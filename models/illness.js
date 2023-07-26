const mongoose = require('mongoose')
const Schema = mongoose.Schema

const illnessSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50
    },
    description: {
      type: String,
      maxlength: 250
    },
    symptoms: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Symptoms'
      }
    ]
  }
)

module.exports = illnessSchema