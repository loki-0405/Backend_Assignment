const express = require('express');
const router = express.Router();
const Person = require('../models/person');


router.get('/', async (req, res) => {
  try {
    const people = await Person.find().sort({ createdAt: -1 });
    res.json(people);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const { name, age, gender, mobile } = req.body;
  const person = new Person({ name, age, gender, mobile });
  try {
    const saved = await person.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { name, age, gender, mobile } = req.body;
    const updated = await Person.findByIdAndUpdate(
      req.params.id,
      { name, age, gender, mobile },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Person not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const removed = await Person.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Person not found' });
    res.json({ message: 'Person deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
