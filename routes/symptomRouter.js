const Router = require('express').Router()
const controller = require('../controllers/symptomController')

Router.post('/create', controller.createSymptom)

Router.get('/', controller.getSymptoms)

Router.get('/:id', controller.getSymptomById)

Router.get('/name/:name', controller.getSymptomByName)

Router.put(`/:id`, controller.updateSymptomById)

Router.delete('/:id', controller.deleteSymptomById)

module.exports = Router