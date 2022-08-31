'use strict'

const router = require("express").Router();
const { Student, Campus } = require("../db");

// GET /api/students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      where: req.query,
      include: [Campus],
    });
    res.json(students);
  } catch (error) {
    next(error);
  }
});

// GET /api/students/:studentId
router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId, {
      include: [Campus],
    });

    res.json(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;