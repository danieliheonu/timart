const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const User = require("./user.model");

const Order = sequelize.define(
	"order",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "pending",
		},
		amount: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: true,
	}
);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = Order;
