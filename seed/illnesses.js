const db = require(`../db`)
const { Illness } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
  const illnesses = [
    {
      name: 'Systemic Lupus Erythematosus',
      description: 'An inflammatory auto-immune disease that occurs when the immune system attacks its own tissues.',
      symptoms: ['64c164bef1856be9a1a40bcf']
    }, 
    {
      name: 'Hashimotos',
      description: 'An auto-immune disease where the immune system mistakes the thyroid for as foreign and attacks it',
      symptoms: ['64c164bef1856be9a1a40bcf']
    },
  ]

  await Illness.deleteMany()
  await Illness.insertMany(illnesses)
  console.log(`Created illnesses!`)
}

const run = async () => {
  await main()
  db.close()
}

run()