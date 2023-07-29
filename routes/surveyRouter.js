const Router = require('express').Router()
const controller = require('../controllers/surveyController')

Router.post('/create', controller.createSurvey)

Router.get('/:id', controller.getSurveyById)

Router.get('/:id/:symptoms', controller.getSymptomById)

Router.put('/:id', controller.updateSurveyById)

Router.put(`/:id`, controller.updateSymptomById)

Router.delete(`/:id`, controller.deleteSymptomById)

Router.get(`/symptoms/:id`, controller.findSymptomsBySurvey)

module.exports = Router