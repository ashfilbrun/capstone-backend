const db = require(`../db`)
const { Symptom } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
  const symptom = [
    {
      name: 'brain fog',
      score: '',
      illnessId: ''
    },
    {
      name: 'fatigue',
      score: '',
      illnessId: ''
    }
  ]
}