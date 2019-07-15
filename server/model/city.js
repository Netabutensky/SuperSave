const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citiesSchema = new Schema({
   store_name: String,
   store_id: Number,
   store_address: String,

})

const City = mongoose.model('city', citiesSchema)

module.exports = City