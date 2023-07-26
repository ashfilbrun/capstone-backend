const { Schema } = require('mongoose')

const symptomsSchema = new Schema(
  {
    name: { 
      type: String,
      required: true 
    },
    score: { 
      type: Number, 
      required: true 
    },
    illnessId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Illness'
      }
    ]
  }
)

module.exports = symptomsSchema