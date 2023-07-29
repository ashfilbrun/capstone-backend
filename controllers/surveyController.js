const { Survey, User, Symptom } = require('../models')


//CREATE Survey
const createSurvey = async (req, res) => {
  const newSurvey = await Survey.create({
    date: req.body.name,
    userId: req.body.description,
    symptomsId: req.body.symptoms
  })
  res.json(newSurvey)
}

//GET Survey By Id 
const getSurveyById = async (req, res) => {
  try {
    const { id } = req.params
    const surveyById = await Survey.findById(id)
    if(!surveyById) throw Error(`Survey not found`)
    res.json(surveyById)
  }catch (e){
    console.log(e)
    res.send(`Survey not found`)
  }
}

//UPDATE Survey BY ID
const updateSurveyById = async (req, res) => {
  try {
    const updateSurvey = await Survey.findByIdAndUpdate(req.query.SurveyId, {[req.query.whatToUpdate]: req.query.update})
    if(!updateSurvey) throw Error(`Survey not updated`)
    res.json(updateSurvey)
  }catch (e){
    console.log(e)
    res.send(`Survey not updated`)
  }
}

const getSymptomById = async (req, res) => {
  try {
    const { id } = req.params
    const findSurveySymptomId = await Symptom.findById(id)
    if(!findSurveySymptomId) throw Error(`Symptom not found`)
    res.json(findSurveySymptomId)
  }catch (e){
    console.log(e)
    res.send(`Symptom not found`)
  }
}

const updateSymptomById = async (req, res) => {
  try {
    const updateSymptom = await Symptom.findByIdAndUpdate(req.query.symptomId, {[req.query.whatToUpdate]: req.query.update})
    if(!updateSymptom) throw Error(`Symptom not updated`)
    res.json(updateSymptom)  
  }catch (e){
    console.log(e)
    res.send(`Symptom not updated`)
  }
}

const deleteSymptomById = async (req, res) => {
  try {
    const { id } = req.params
    const deleteSymptom = await Symptom.findByIdAndDelete(id)
    if(!deleteSymptom) throw Error(`Symptom not deleted`)
    res.json(deleteSymptom)
  }catch (e){
    console.log(e)
    res.send(`Symptom not deleted`)
  }
}


// FIND SYMPTOMS BY Survey
const findSymptomsBySurvey = async (req, res) => {
  try {
        console.log(req.params)
        const { Survey } = req.params.Survey
        const symptoms = await Symptom.find(Survey)
        if (!symptoms) {
              return res.status(404).json({ message: 'Symptoms not found'})
        }
        res.status(200).json(symptoms)
  } catch (e) {
        console.log('Error:', e)
        res.status(500).json({ message: "Internal server error"})
  }
}


//EXPORT 
module.exports = {
  createSurvey,
  getSurveyById,
  updateSurveyById,
  getSymptomById,
  updateSymptomById,
  deleteSymptomById,
  findSymptomsBySurvey
}