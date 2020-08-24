const db = require("./db");

const Register = db.sequelize.define("usuarios", {
  name: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  password: {
    type: db.Sequelize.STRING
  },
  avatar: {
    type: db.Sequelize.STRING
  },
  bio: {
    type: db.Sequelize.TEXT
  }
})

//Register.sync({force: true});

module.exports = Register