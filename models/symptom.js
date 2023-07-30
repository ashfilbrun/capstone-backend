const { Schema } = require('mongoose')

const symptomSchema = new Schema(
  {
    name: { 
      type: String,
      required: true 
    }
  }
)

module.exports = symptomSchema