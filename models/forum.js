const { Schema } = require('mongoose')

const forumSchema = new Schema (
  {
    title: {
      type: String,
    },
    date: {
      type: Date,
    },
    description: {
      type: String,
    }
  }
)

module.exports = forumSchema