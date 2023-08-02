const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    birthDate: {
      type: Date,
      trim: true,
    },
    sex: {
      type: String,
    },
    illnessId: {
      type: Schema.Types.ObjectId,
      ref: "Illness",
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
