const { GraphQLScalarType, GraphQLError, Kind } = require("graphql");

const EMAIL_REGEX = new RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const dateScalar = new GraphQLScalarType({
	name: "Date",
	parseValue(value) {
		return new Date(value);
	},
	serialize(value) {
		return value.toISOString();
	},
});

const emailScalar = new GraphQLScalarType({
	name: "Email",
	parseValue(value) {
		if (typeof value !== "string") {
			throw new TypeError("Value is not string");
		}

		if (!EMAIL_REGEX.test(value)) {
			throw new TypeError(`Value is not a valid email address: ${value}`);
		}

		return value;
	},
	serialize(value) {
		return value;
	},
	parseLiteral(ast) {
		if (ast.kind !== Kind.STRING) {
			throw new GraphQLError(`Value is not string : ${ast.kind}`);
		}

		if (!EMAIL_REGEX.test(ast.value)) {
			throw new GraphQLError(`Value is not a valid email address: ${ast.value}`);
		}

		return ast.value;
	},
});

module.exports = { dateScalar, emailScalar };
