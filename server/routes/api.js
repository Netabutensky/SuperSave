const express = require('express')
const router = express.Router()
const request = require('request-promise')
const API_KEY = '2884fae2abf12546ec3d81ea109fa6d284a6b4bc'
// const Product = require('../model/product')

router.get('/city/:cityName', async (req, res) => {
   const stores = []
   const cityName = req.params.cityName
   request.post(`https://api.superget.co.il/?api_key=${API_KEY}&action=GetCityByName&city_name=${cityName}`, async function(err,response) {
       const cityId = response.city_id
       const cityStores = await request.post(`https://api.superget.co.il/?api_key=${YOUR_API_KEY}&action=GetStoresByCityID&city_id=${cityId}`)
       cityStores = JSON.parse(response)
       cityStores =cityStores.map(c => ({storeName: c.chain_name , storeAdress: c.store_address}))
       stores.push(cityStores)
   })
   res.send(stores)

})

module.exports = router