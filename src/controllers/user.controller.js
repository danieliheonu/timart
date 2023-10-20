const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

exports.createUser = async ({ input }) => {
	try {
		const { userName, email, password } = input;

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = await User.create({ userName, email, password: hashedPassword });

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
