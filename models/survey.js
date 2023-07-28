const { Schema } = require('mongoose')

const surveySchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
      unique: true,
    },
    userId: {
      type: String,
      maxlength: 250
    },
    symptomId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Symptom'
      }
    ]
  }
)

module.exports = surveySchema