require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/db");

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
	sequelize
		.authenticate()
		.then(() => {
			console.log("Connection to database has been established successfully.");
		})
		.catch((error) => {
			console.error("Unable to connect to the database:", error);
		});
	sequelize.sync().then(() => {
		console.log("All models were synchronized successfully.");
	});
});
