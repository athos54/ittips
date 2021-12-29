const { mongoose } = require('../db/db')
// const Tip = require('./Tip')
const { Schema } = mongoose

const schema = new Schema({
  title: String,
  tips: [String],
  image: String
})

module.exports = mongoose.model('Categorie', schema)
