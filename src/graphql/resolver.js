const { dateScalar, emailScalar } = require("./scalar-types");

const Mutation = require("./mutation");
const Query = require("./query");

module.exports = {
	Email: emailScalar,
	Date: dateScalar,
	Mutation,
	Query,
};
