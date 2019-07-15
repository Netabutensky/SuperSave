const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
    product_name: String,
    manufacturer_name: String,
    product_image: String

})

const dataSchema = new Schema({
    store_name: String,
    store_city: String,
    products: productsSchema


})


const mydata = mongoose.model('data', dataSchema)

module.exports = mydata
