const { mongoose } = require('../db/db')
// const User = require('./User')

const { Schema } = mongoose

const schema = new Schema({
  title: String,
  author: String,
  body: String
})

module.exports = mongoose.model('Tip', schema)
