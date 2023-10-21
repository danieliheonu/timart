const User = require("../models/user.model");

exports.createUser = async ({ input }) => {
	try {
		const { userName, email, firstName, lastName } = input;

		const user = await User.create({ userName, email, firstName, lastName });

		return {
			__typename: "UserResponse",
			user,
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

exports.getUser = async ({ id }) => {
	try {
		const user = await User.findByPk(id);
		if (!user) {
			return {
				__typename: "ErrorResponse",
				error: {
					message: "User not found",
					statusCode: 404,
				},
			};
		}

		return {
			__typename: "UserResponse",
			user,
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
