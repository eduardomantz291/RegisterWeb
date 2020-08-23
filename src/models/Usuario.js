const db = require("./db");

const Register = db.sequelize.define("usuariso", {
  noma: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  bio: {
    type: db.Sequelize.TEXT
  }
})

//Register.sync({force: true});

module.exports = Register