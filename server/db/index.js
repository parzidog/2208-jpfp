// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./models/student')
const Campus = require('./models/campus')

const syncAndSeed = async () => {
    await db.sync({ force: true });

    //use this area to sync your database

    console.log(`
    Seeding successful!
  `);
};

Student.belongsTo(Campus, {as: 'campus'})
Campus.hasMany(Student)


module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    Student,
    Campus

}