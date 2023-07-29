const { Schema } = require('mongoose')

const symptomSchema = new Schema(
  {
    name: { 
      type: String,
      required: true 
    },
    score: {
      type: Number,
    }
  }
)

module.exports = symptomSchema