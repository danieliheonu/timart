const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: "localhost",
	dialect: "mysql",
	logging: false,
});

module.exports = sequelize;
