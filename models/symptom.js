const { Schema } = require('mongoose')

const symptomSchema = new Schema(
  {
    name: { 
      type: String,
      required: true 
    },
    score: { 
      type: Number,
    },
    // illnessId: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Illness'
    //   }
    // ]
  }
)

module.exports = symptomSchema