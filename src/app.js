const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(
	"/graphql",
	graphqlHTTP({
		schema: require("./schema"),
		graphiql: true,
	})
);

module.exports = app;
