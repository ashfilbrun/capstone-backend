const Router = require('express').Router()
const controller = require('../controllers/illnessController')

Router.post('/create', controller.createIllness)

Router.get('/', controller.getIllness)

Router.get('/:id', controller.getIllnessById)

Router.get('/name/:name', controller.getIllnessByName)

Router.put('/:id', controller.updateIllnessById)

Router.put(`/:id`, controller.updateSymptomById)

Router.delete(`/:id`, controller.deleteSymptomById)

Router.get(`/symptoms/:id`, controller.findSymptomsByIllness)

module.exports = Router