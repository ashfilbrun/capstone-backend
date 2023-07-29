const { Schema } = require('mongoose')

const surveySchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
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