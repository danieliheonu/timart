const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/type-definitions");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

module.exports = app;
