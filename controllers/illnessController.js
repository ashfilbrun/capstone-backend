const { Illness, Symptom } = require("../models");

//GET ALL ILLNESS
const getIllness = async (req, res) => {
  const findIllness = await Illness.find({}).populate("symptoms");
  return res.json(findIllness);
};
// GET ALL ILLNESSES
// const getAllIllnesses = async (req, res) => {
//   try {
//     const illnesses = await Illness.find().populate(`illnessName`).populate(`description`).populate(`symptoms`)
//     return res.status(200).json ({ illnesses })
//   } catch (e){
//     return res.status(500).json ({error: error.message})
//   }
// }

// GET ILLNESS BY NAME
const getIllnessByName = async (req, res) => {
  try {
    const name = req.params.name;
    const regex = new RegExp(name, "i");
    const illness = await Illness.find({ name: regex })
      .populate("name")
      .populate("description")
      .populate("symptom");
    if (!illness) throw Error("Illness not found.");
    res.status(200).json(illness);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

//CREATE ILLNESS
const createIllness = async (req, res) => {
  const newIllness = await Illness.create({
    name: req.body.name,
    description: req.body.description,
    symptoms: req.body.symptoms,
  });
  res.json(newIllness);
};

// FIND ILLNESS BY ID
const getIllnessById = async (req, res) => {
  try {
    const { id } = req.params;
    const findIllnessId = await Illness.findById(id).populate("symptoms");
    if (!findIllnessId) throw Error(`Illness not found`);
    res.json(findIllnessId);
  } catch (e) {
    console.log(e);
    res.send(`Illness not found`);
  }
};

//UPDATE ILLNESS BY ID
const updateIllnessById = async (req, res) => {
  try {
    const updateIllness = await Illness.findByIdAndUpdate(req.query.illnessId, {
      [req.query.whatToUpdate]: req.query.update,
    });
    if (!updateIllness) throw Error(`Illness not updated`);
    res.json(updateIllness);
  } catch (e) {
    console.log(e);
    res.send(`Illness not updated`);
  }
};

const getSymptomById = async (req, res) => {
  try {
    const { id } = req.params;
    const findIllnessSymptomId = await Symptom.findById(id);
    if (!findIllnessSymptomId) throw Error(`Symptom not found`);
    res.json(findIllnessSymptomId);
  } catch (e) {
    console.log(e);
    res.send(`Symptom not found`);
  }
};

const updateSymptomById = async (req, res) => {
  try {
    const updateSymptom = await Symptom.findByIdAndUpdate(req.query.symptomId, {
      [req.query.whatToUpdate]: req.query.update,
    });
    if (!updateSymptom) throw Error(`Symptom not updated`);
    res.json(updateSymptom);
  } catch (e) {
    console.log(e);
    res.send(`Symptom not updated`);
  }
};

const deleteSymptomById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSymptom = await Symptom.findByIdAndDelete(id);
    if (!deleteSymptom) throw Error(`Symptom not deleted`);
    res.json(deleteSymptom);
  } catch (e) {
    console.log(e);
    res.send(`Symptom not deleted`);
  }
};

// FIND SYMPTOMS BY ILLNESS
const findSymptomsByIllness = async (req, res) => {
  try {
    console.log(req.params);
    const { illness } = req.params.illness;
    const symptoms = await Symptom.find(illness);
    if (!symptoms) {
      return res.status(404).json({ message: "Symptoms not found" });
    }
    res.status(200).json(symptoms);
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({ message: "Internal server error" });
  }
};

//EXPORT
module.exports = {
  createIllness,
  getIllness,
  getIllnessById,
  getIllnessByName,
  updateIllnessById,
  getSymptomById,
  updateSymptomById,
  deleteSymptomById,
  findSymptomsByIllness,
};
