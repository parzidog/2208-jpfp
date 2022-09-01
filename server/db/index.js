// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./models/student')
const Campus = require('./models/campus')

const campuses = [
  {
        id:0,
        name:"Unregistered Students",
        imgUrl: 'https://image.shutterstock.com/image-vector/abstract-school-building-silhouette-on-600w-222076837.jpg',
        address: 'None',
        description: 'Students to be registered'
         },
  {
        id:1,
        name:"Muppets University",
        imgUrl: 'https://image-cdn.neatoshop.com/styleimg/37466/none/kiwigreen/default/269117-20.jpg',
        address: '123 Sesame Street',
        description: 'A place of learning, a place of knowledge'
         },
    {
        id:2,
        name:"Sith Academy",
        imgUrl: 'https://i.kym-cdn.com/photos/images/original/000/559/643/1b7.png',
        address: '666 Koriban Drive',
        description: 'Through passion, I gain strength. Through strength, I gain power. Through power, I gain victory. Through victory, my chains are broken.'
         },
];
const students=[
    {
            id:1,
            fname:"Kermit",
            lname:"Frog",
            email: 'kfrog@sesamestreet.com',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg', 
            gpa: 4.0,
            campusId: 1
        },
        {
            id:2,
            fname:"Darth",
            lname:"Vader",
            email: 'dvader@killedhiswife.com',
            imgUrl: 'https://as2.ftcdn.net/v2/jpg/03/13/36/79/1000_F_313367965_7B8Y7JrJ3JAG6zdjw51L59kVQZMlA9K7.jpg', 
            gpa: 4.0,
            campusId: 2
        },
        {
            id:3,
            fname:"Piggy",
            lname:"Lee",
            email: 'plee@muppetsrule.com',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/22/MissPiggy.jpg', 
            gpa: 3.0,
            campusId: 1
        },
        {
            id:4,
            fname:"Darth",
            lname:"Revan",
            email: 'drevan@pickaside.com',
            imgUrl: 'https://wegotthiscovered.com/wp-content/uploads/2021/04/161834009578318259-19-640x321.jpeg', 
            gpa: 2.7,
            campusId: 2
        },
        {
            id:5,
            fname:"Boba",
            lname:"Fett",
            email: 'bfett@misseshisdaddy.com',
            imgUrl: 'https://cdn.theatlantic.com/thumbor/bqAmG_kEL3yosFhPGILd9ZqgJAg=/0x0:2500x1406/976x549/media/img/mt/2022/01/06_boba_fett_trailer_stills_uhd_t_r709_211010_8f3ddb41/original.jpg', 
            gpa: 3.8,
            campusId: 2
        },
        {
            id:6,
            fname:"Fozzie",
            lname:"Bear",
            email: 'fbear@frankoz.com',
            imgUrl: 'https://d23.com/app/uploads/2020/08/1180w-600h_081420_fozzie-national-tell-a-joke-day_3-780x440.jpg', 
            gpa: 2.9,
            campusId: 1
        }
    ];

const syncAndSeed = async () => {
  try {
  await db.sync({force: true});
  
  await Promise.all(campuses.map(campus => Campus.create(campus)));
  await Promise.all(students.map(student => Student.create(student)));
  
//   await db.close();
  
  console.log("Successfully seeded the database!");
  } catch (error) {
  console.error("There was a problem seeding the database", error);
//   await db.close();
  }
  };

Student.belongsTo(Campus, {foreignKey: 'campusId'})
Campus.hasMany(Student)


module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    Student,
    Campus

}