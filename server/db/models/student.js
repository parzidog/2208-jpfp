const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('student', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: {
              msg: "Must be a valid email address",
          }
      }
    },
    gpa: {
      type: Sequelize.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg'
    },
    campusId: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    }
});