const mongoose = require('mongoose')
const userSchema = require('./user')
const symptomsSchema = require('./symptoms')
const illnessSchema = require('./illness')

const User = mongoose.model('User', userSchema)
const Symptoms = mongoose.model('Symptoms', symptomsSchema)
const Illness = mongoose.model('Illness', illnessSchema)

module.exports = {
  User,
  Symptoms,
  Illness
}