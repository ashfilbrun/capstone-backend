const { Schema } = require('mongoose')

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
        ref: 'Symptom'
      }
    ]
  }
)

module.exports = illnessSchema