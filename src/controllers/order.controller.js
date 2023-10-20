const Order = require("../models/order.model");
const User = require("../models/user.model");

exports.createOrder = async ({ input }) => {
	try {
		const { userId, amount } = input;

		const user = await User.findByPk(userId);
		if (!user) {
			return {
				__typename: "ErrorResponse",
				error: {
					message: "User not found",
					statusCode: 404,
				},
			};
		}

		const order = await Order.create({ userId, amount });

		return {
			__typename: "OrderResponse",
			order,
		};
	} catch (err) {
		return {
			__typename: "ErrorResponse",
			error: {
				message: err.message,
				statusCode: 500,
			},
		};
	}
};

exports.getUserOrders = async ({ userId, page = 1 }) => {
	try {
		const limit = 10;
		const user = await User.findByPk(userId);
		if (!user) {
			return {
				__typename: "ErrorResponse",
				error: {
					message: "User not found",
					statusCode: 404,
				},
			};
		}

		const orders = await user.getOrders({
			limit,
			offset: page * limit,
			order: [["createdAt", "DESC"]],
		});

		return {
			__typename: "OrdersResponse",
			orders,
		};
	} catch (err) {
		return {
			__typename: "ErrorResponse",
			error: {
				message: err.message,
				statusCode: 500,
			},
		};
	}
};
