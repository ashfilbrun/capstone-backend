const mongoose = require('mongoose')
const Schema = mongoose.Schema

const illnessSchema = new Schema(
  {
    illnessName: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50
    },
    description: {
      type: String,
      maxlength: 250
    },
    
  }
)