const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = new Schema ({
   store_name: String,
   store_id: Number,
   store_address: String,
})

const citiesSchema = new Schema({
   name: String,
   city_id: Number,
   city_stores: [storeSchema],

})


const City = mongoose.model('city', citiesSchema)

module.exports = City

