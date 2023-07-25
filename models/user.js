const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    firstName: { 
      type: String, 
      required: true 
    },
    lastName: { 
      type: String, 
      required: true 
    },
    birthDate: { 
      type: Date, 
      required: true, 
      trim: true 
    },
    sex: { 
      type: String, 
      required: true 
    },
    illnessId: { 
      type: Schema.Types.ObjectId,
      ref: 'Illness'
    },
  },
  { timestamps: true }
)

module.exports = userSchema