const db = require(`../db`)
const { User } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
  const users = [
    {
      firstName: 'Abigail',
      lastName: 'Smith',
      email: 'abbismith123@mail.com',
      password: 'abc123',
      username: 'abigailsmith',
      birthDate: new Date (`2001-05-23`),
      sex: 'female',
      userSymptoms: ['googly eyes', 'bloated head'],
      googleId: '0'
    },
    {
      firstName: 'Jeremiah',
      lastName: 'Kinsler',
      email: 'jkinsler@mail.com',
      password: 'xyz123',
      username: 'jkins',
      birthDate: new Date (`1993-10-05`),
      sex: 'male',
      userSymptoms: ['broken heart'],
      googleId: '1'
    }
  ]
}