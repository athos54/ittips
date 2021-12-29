const { mongoose } = require('../db/db')

const { Schema } = mongoose

const schema = new Schema({
  firstName: String,
  lastName: String,
  email: String
})

module.exports = mongoose.model('User', schema)
