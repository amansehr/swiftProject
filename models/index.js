const Sequelize = require('sequelize');

const sequelize = new Sequelize('temp', 'postgres', 'Aman', {
    host: 'localhost',
    dialect: 'postgres'
});


// console.log(sequelize)
var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize.sync({ force: true }).then(() => console.log("table created"));

const User = require("./user.model")(sequelize,Sequelize);
db.User = User;

module.exports = db;