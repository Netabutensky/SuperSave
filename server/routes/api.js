const express = require('express')
const router = express.Router()
const request = require('request-promise')
const API_KEY = '2884fae2abf12546ec3d81ea109fa6d284a6b4bc'
const City = require('../model/city')
const User = require('../model/user')

router.get('/city/:cityName', async (req, res) => {
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
            cs.push(cityStores[i])
        }
    }
    
    let city1 = new City({name: cityName, city_id: cityId, city_stores:cs})
    city1.save()
    res.end() 
})

router.get('/city/:product', async (req, res) => {
    const product = req.params.product


})

module.exports = router
