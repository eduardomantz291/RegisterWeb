const Sequelize = require("sequelize");
const sequelize = new Sequelize("registerweb", "root", "eduardo2004", {
  host: "localhost",
  dialect: "mysql"
}) 

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}