'use strict'

const Campus = require('../db/models/campus');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  }
  catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.id);
    res.json(campus);
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;
