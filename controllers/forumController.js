const { User, Illness } = require(`../models`)

// CREATE A SYMPTOM
const createForum = async (req, res) => {
  const newForum = await Forum.create({
    name: req.body.name,
    score: req.body.score,
    illnessId: req.body.illnessId
  })
  res.json(newForum)
}

// FIND ALL SYMPTOMS
const getForums = async (req, res) => {
  const allForums = await Forum.find({})
  res.status(200).json(allForums)
}

// FIND SYMPTOM BY ID
const getForumById = async (req, res) => {
  try {
    const { id } = req.params
    const symptomById = await Forum.findById(id)
    if(!symptomById) throw Error(`Forum not found`)
    res.json(symptomById)
  }catch (e){
    console.log(e)
    res.send(`Forum not found`)
  }
}

// FIND SYMPTOM BY NAME
const getForumByName = async (req, res) => {
  try {
    const name = req.params.name
    const symptom = await Forum.find({ name: name })
    if (!user) throw Error(`Forum not found`)
    res.status(200).json(symptom)
  } catch (e) {
    console.log(e)
    res.status(500).send(`Forum not found`)
  }
}

// UPDATE A SYMPTOM BY ID
const updateForumById = async (req, res) => {
  try {
    const updateById = await Forum.findByIdAndUpdate(req.query.symptomId, {[req.query.whatToUpdate]: req.query.update})
    if(!updateById) throw Error(`Forum not updated`)
    res.json(updateById)
  }catch (e){
    console.log(e)
    res.send(`Forum not updated`)
  }
}

// DELETE A SYMPTOM BY ID
const deleteForumById = async (req, res) =>  {
  try {
    const { id } = req.params
    const deleteById = await Forum.findByIdAndDelete(id)
    if(!deleteById) throw Error(`Forum not deleted`)
    res.json(deleteById)
  }catch (e){
    console.log(e)
    res.send(`Forum not deleted`)
  }
}

module.exports = {
  createForum,
  getForums,
  getForumById,
  getForumByName,
  updateForumById,
  deleteForumById,
}