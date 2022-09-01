const router = require('express').Router()
const {Campus, Student} = require('../db')

// GET /api/campuses
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll()
    res.json(campuses)
  }
  catch (error) {
    next(error)
  }
})

// POST /api/campuses
router.post('/', async(req,res,next)=>{
  try{
    res.send(await Campus.create(req.body))
  }
  catch(error){
    console.log(error)
  }
})

// GET /api/campuses/:campusId
router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId)
    res.json(campus)
  }
  catch (error) {
    next(error)
  }
})


// GET /api/campuses/:campusId/students
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