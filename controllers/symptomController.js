const { Symptom, Illness } = require(`../models`)

// CREATE A SYMPTOM
const createSymptom = async (req, res) => {
  const newSymptom = await Symptom.create({
    name: req.body.name,
    score: req.body.score,
    illnessId: req.body.illnessId
  })
  res.json(newSymptom)
}

// FIND ALL SYMPTOMS
const getSymptoms = async (req, res) => {
  const allSymptoms = await Symptom.find({}).populate(`name`)
  res.status(200).json(allSymptoms)
}

// FIND SYMPTOM BY ID
const getSymptomById = async (req, res) => {
  try {
    const { id } = req.params
    const symptomById = await Symptoms.findById(id)
    if(!symptomById) throw Error(`Symptom not found`)
    res.json(symptomById)
  }catch (e){
    console.log(e)
    res.send(`Symptom not found`)
  }
}

// FIND SYMPTOM BY NAME
const getSymptomByName = async (req, res) => {
  try {
    const name = req.params.name
    const symptom = await Symptom.find({ name: name })
    if (!user) throw Error(`User not found`)
    res.status(200).json(user)
  } catch (e) {
    console.log(e)
    res.status(500).send(`Symptom not found`)
  }
}

// UPDATE A SYMPTOM BY ID
const updateSymptomById = async (req, res) => {
  try {
    const updateById = await Symptom.findByIdAndUpdate(req.query.symptomId, {[req.query.whatToUpdate]: req.query.update})
    if(!updateById) throw Error(`Symptom not updated`)
    res.json(updateById)
  }catch (e){
    console.log(e)
    res.send(`Symptom not updated`)
  }
}

// DELETE A SYMPTOM BY ID
const deleteSymptomById = async (req, res) =>  {
  try {
    const { id } = req.params
    const deleteById = await Symptom.findByIdAndDelete(id)
    if(!deleteById) throw Error(`Symptom not deleted`)
    res.json(deleteById)
  }catch (e){
    console.log(e)
    res.send(`Symptom not deleted`)
  }
}

module.exports = {
  createSymptom,
  getSymptoms,
  getSymptomById,
  getSymptomByName,
  updateSymptomById,
  deleteSymptomById,
}