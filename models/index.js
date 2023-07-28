const mongoose = require('mongoose')
const userSchema = require('./user')
const symptomSchema = require('./symptom')
const illnessSchema = require('./illness')
const surveySchema = require('./survey')

const User = mongoose.model('User', userSchema)
const Symptom = mongoose.model('Symptom', symptomSchema)
const Illness = mongoose.model('Illness', illnessSchema)
const Survey = mongoose.model('Survey', surveySchema)

module.exports = {
  User,
  Symptom,
  Illness,
  Survey
}