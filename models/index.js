const mongoose = require('mongoose')
const userSchema = require('./user')
const symptomSchema = require('./symptom')
const illnessSchema = require('./illness')
const surveySchema = require('./survey')
// const forumSchema = require('./forum')

const User = mongoose.model('User', userSchema)
const Symptom = mongoose.model('Symptom', symptomSchema)
const Illness = mongoose.model('Illness', illnessSchema)
const Survey = mongoose.model('Survey', surveySchema)
// const Forum = mongoose.model('Forum', forumSchema)

module.exports = {
  User,
  Symptom,
  Illness,
  Survey,
  // Forum
}