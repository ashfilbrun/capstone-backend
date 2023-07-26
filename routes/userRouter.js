const Router = require('express').Router()
const controller = require('../controllers/userController')

Router.post('/create', controller.createUser)

Router.get('/', controller.getUsers)

Router.get('/:id', controller.findUserById)

Router.get('/name/:name', controller.findUserByName)

Router.get('/email/:email', controller.findUserByEmail)


Router.delete('/:id', controller.deleteUserById)

Router.put('/:id', controller.updateUserById)

module.exports = Router