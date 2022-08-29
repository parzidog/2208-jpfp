'use strict'

const Campus = require('../db/models/campus');
const Student = require('../db/models/student');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [Campus]
    });
    res.json(students);
  }
  catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id, {
      include: [Campus]
    });
    res.json(student);
  }
  catch (err) {
    next(err);
  }
});


module.exports = router;
