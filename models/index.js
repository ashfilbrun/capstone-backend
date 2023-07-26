const mongoose = require('mongoose')
const userSchema = require('./user')
const symptomSchema = require('./symptom')
const illnessSchema = require('./illness')

const User = mongoose.model('User', userSchema)
const Symptom = mongoose.model('Symptom', symptomSchema)
const Illness = mongoose.model('Illness', illnessSchema)

module.exports = {
  User,
  Symptom,
  Illness
}