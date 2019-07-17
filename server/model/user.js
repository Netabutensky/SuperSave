const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
   user_name: String,
   user_id: Number,
   user_city: String,
   shop_list: []
})

const User = mongoose.model('user', userSchema)

module.exports =  User

