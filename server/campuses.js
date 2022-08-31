const router = require('express').Router()
const {Campus, Student} = require('../db')
const AddCampus = require('../src/components/campuses/AddCampus')

// GET /campuses
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      attributes: ['id', 'name', 'imgUrl']
    })
    res.send(AddCampus)
  }
  catch (error) {
    next(error)
  }
})

// GET /campuses/:campusId
router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId)
    const students = await Student.findAll()
    res.send(campusPage(campus))
  }
  catch (error) {
    next(error)
  }
})


// GET /campuses/:campusId/students
router.get('/:campusId/students', async (req, res, next) => {
  try {
    const student = await Student.findAll({
      where: {
        campusId: req.params.campusId
      },
      include: [Campus]
    })
    res.json(student)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router