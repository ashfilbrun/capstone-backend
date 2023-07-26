const db = require(`../db`)
const { Symptom } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
  const symptoms = [
    {
      name: 'brain fog',
      score: '',
      // illnessId: ''
    },
    {
      name: 'fatigue',
      score: '',
      // illnessId: ''
    },
    {
      name: 'joint pain',
      score: '',
    },
    {
      name: 'fever',
      score: '',
    },
    {
      name: 'muscle soreness',
      score: '',
    },
    {
      name: 'sunlight sensitivity',
      score: '',
    },
    {
      name: 'muscle weakness',
      score: '',
    },
    {
      name: 'headache',
      score: '',
    },
    {
      name: 'hot flashes',
      score: '',
    },
    {
      name: 'dry mouth',
      score: '',
    },
    {
      name: 'increased appetite',
      score: '',
    },
    {
      name: 'loss of appetite',
      score: '',
    },
    {
      name: 'hip pain',
      score: '',
    },
    {
      name: 'joint swelling',
      score: '',
    },
    {
      name: 'cold intolerance',
      score: '',
    },
    {
      name: 'heat intolerance',
      score: '',
    },
    {
      name: 'memory issues',
      score: '',
    },
    {
      name: 'malar rash',
      score: '',
    },
    {
      name: 'non-specific rash',
      score: '',
    },
    {
      name: 'chronic uticaria (hives)',
      score: '',
    },
    {
      name: 'unexplained weight gain',
      score: '',
    },
    {
      name: 'unexplained weight loss',
      score: '',
    },
    {
      name: 'leg swelling',
      score: '',
    },
    {
      name: 'facial swelling',
      score: '',
    },
    {
      name: 'joint stiffness',
      score: '',
    },
    {
      name: 'hair loss',
      score: '',
    }
  ]

  await Symptom.insertMany(symptoms)
  console.log('Created symptoms!')
}

const run = async () => {
  await main()
  db.close()
}

run()