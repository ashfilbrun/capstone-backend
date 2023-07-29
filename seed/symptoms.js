const db = require(`../db`)
const { Symptom } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
  const symptoms = [
    {
      name: 'brain fog',
      score: null,
      // illnessId: null,
    },
    {
      name: 'fatigue',
      score: null,
      // illnessId: null,
    },
    {
      name: 'joint pain',
      score: null,
    },
    {
      name: 'fever',
      score: null,
    },
    {
      name: 'muscle soreness',
      score: null,
    },
    {
      name: 'sunlight sensitivity',
      score: null,
    },
    {
      name: 'muscle weakness',
      score: null,
    },
    {
      name: 'headache',
      score: null,
    },
    {
      name: 'hot flashes',
      score: null,
    },
    {
      name: 'dry mouth',
      score: null,
    },
    {
      name: 'increased appetite',
      score: null,
    },
    {
      name: 'loss of appetite',
      score: null,
    },
    {
      name: 'hip pain',
      score: null,
    },
    {
      name: 'joint swelling',
      score: null,
    },
    {
      name: 'cold intolerance',
      score: null,
    },
    {
      name: 'heat intolerance',
      score: null,
    },
    {
      name: 'memory issues',
      score: null,
    },
    {
      name: 'malar rash',
      score: null,
    },
    {
      name: 'non-specific rash',
      score: null,
    },
    {
      name: 'chronic uticaria (hives)',
      score: null,
    },
    {
      name: 'unexplained weight gain',
      score: null,
    },
    {
      name: 'unexplained weight loss',
      score: null,
    },
    {
      name: 'leg swelling',
      score: null,
    },
    {
      name: 'facial swelling',
      score: null,
    },
    {
      name: 'joint stiffness',
      score: null,
    },
    {
      name: 'hair loss',
      score: null,
    }
  ]

  await Symptom.deleteMany()
  await Symptom.insertMany(symptoms)
  console.log('Created symptoms!')
}

const run = async () => {
  await main()
  db.close()
}

run()