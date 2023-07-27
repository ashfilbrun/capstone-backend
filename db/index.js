require('dotenv').config()
const mongoose = require('mongoose')
const URL = process.env.DATABASE_URL

console.log(URL)

mongoose
  .connect(URL)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db