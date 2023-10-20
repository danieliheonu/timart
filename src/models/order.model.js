const sequelize = require("../config/db");
const { DataTypes, Sequelize } = require("sequelize");
const User = require("./user.model");

const Order = sequelize.define(
	"order",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: Sequelize.UUIDV4,
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
