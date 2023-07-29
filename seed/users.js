const db = require(`../db`)
const { User } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
  const users = [
    {
      firstName: 'Abigail',
      lastName: 'Smith',
      email: 'abbismith123@mail.com',
      password: 'abc123456',
      username: 'abigailsmith',
      birthDate: new Date (`2001-05-23`),
      illnessId: null,
      sex: 'female',
      googleId: '1'
    },
    {
      firstName: 'Jeremiah',
      lastName: 'Kinsler',
      email: 'jkinsler@mail.com',
      password: 'xyz123456',
      username: 'jkins',
      birthDate: new Date (`1993-10-05`),
      illnessId: null,
      sex: 'male',
      googleId: '2'
    }
  ]

  await User.deleteMany()
  await User.insertMany(users)
  console.log('Created users!')
}

const run = async () => {
  await main()
  db.close()
}

run()