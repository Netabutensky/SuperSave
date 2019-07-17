const express = require('express')
const router = express.Router()
const request = require('request-promise')
// const API_KEY = '2884fae2abf12546ec3d81ea109fa6d284a6b4bc'
const Model = require('../model/city')
const User = require('../model/user')

router.get('/city/:cityName', async (req,res) => {
    const cityName = req.params.cityName
    await Model.City.find({name : cityName}).populate('city_stores').exec(function (err,city_stores) {
            for (let i=0; i < city_stores.length; i++)
            {
                console.log(city_stores[0])
                res.send(city_stores[0])
            }
    })
})


router.post('/city/:cityName', async (req, res) => {
    const cityName = req.params.cityName
    let cityId
    let response = await request.post(`https://api.superget.co.il/?api_key=2884fae2abf12546ec3d81ea109fa6d284a6b4bc&action=GetCities`)
    response = JSON.parse(response)
    for (let c of response)
    {
        if (c.city_name == cityName)
        {
            cityId = c.city_id
            break
        }
    }
    let cityStores = await request.post(`https://api.superget.co.il/?api_key=2884fae2abf12546ec3d81ea109fa6d284a6b4bc&action=GetStoresByCityID&city_id=${cityId}`)
    cityStores = JSON.parse(cityStores)
    cityStores =cityStores.map(c => ({store_name: c.chain_name , store_id : c.store_id, store_address: c.store_address}))    
    const stores = []
    const cs = []

    for(let i = 0; i < cityStores.length; i++)
    {
        if (!stores.includes(cityStores[i].store_name))
        {
            stores.push(cityStores[i].store_name)
            let store1 = new Model.Store(cityStores[i])
            store1.save()
            cs.push(store1)
        }
    }
    
    let city1 = new Model.City({name: cityName, city_id: cityId, city_stores:cs})
    city1.save()
    res.send(city1) 
})

router.get('/user', (req, res) =>
{
    User.find({}, function (err, response) {
        res.send(response)
    })
})

router.post('/user', async (req, res) => 
{
    console.log(req.body)
    const user1 = new User(req.body)
    const newShopList = []
    // for (let p of user1.shop_list) 
    // {
    //     let productId = await request.post(`https://api.superget.co.il/?api_key=2884fae2abf12546ec3d81ea109fa6d284a6b4bc&action=GetProductsByName&product_name=${p}`)
    //     productId = JSON.parse(product)
    //     productId = product[0].product_id;
    //     newShopList.push({productName : p, productId : productId})
    // }
    // user1.shop_list = newShopList
    user1.save()
    res.end()
    // res.post(user1)
})

router.get('/user/:shopListPrice', async (req, res) => {
    const shop_list = req.params.shopListPrice.shop_list
    const user_city = req.params.shopListPrice.user_city
    const eachSupers = []
    Model.City.find({name : user_city}, async function (err, response) {
        const stores = response.city_stores
        for (let s of stores)
        {
            total = 0
            let res = await request.post(`https://api.superget.co.il/?api_key=2884fae2abf12546ec3d81ea109fa6d284a6b4bc&action=GetPrice&store_id=${p.store_id}`)
            for (let p of shop_list)
            {
                const item = res.find(i => (i.product_id == p.productId) )
                total += item.store_product_price
            }
            eachSupers.push({storeName1: s.store_name, storeAddress : s.store_address, total : total})
        }
    })
    res.send(eachSupers)
})

module.exports = router
