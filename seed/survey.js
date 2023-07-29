const db = require(`../db`)
const { Survey } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
  const surveys = [
    {
      date: '2023-07-15',
      userId: '64c164a56ab92beaa1c74107',
      symptomId: ['64c170620742c0ed851ca795', '64c170620742c0ed851ca7a1']
    }, 
    {
      date: '2023-07-28',
      userId: '64c164a56ab92beaa1c74108',
      symptomId: ['64c174d8dcba0a9986a16659', '64c174d8dcba0a9986a16664', '64c174d8dcba0a9986a1665b']
    },
  ]
  await Survey.insertMany(surveys)
  console.log(`Created surveys!`)
}

const run = async () => {
  await main()
  db.close()
}

run()