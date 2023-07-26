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
      sex: 'female',
      googleId: '0'
    },
    {
      firstName: 'Jeremiah',
      lastName: 'Kinsler',
      email: 'jkinsler@mail.com',
      password: 'xyz123456',
      username: 'jkins',
      birthDate: new Date (`1993-10-05`),
      sex: 'male',
      googleId: '1'
    }
  ]

  await User.insertMany(users)
  console.log('Created users!')
}

const run = async () => {
  await main()
  db.close()
}

run()