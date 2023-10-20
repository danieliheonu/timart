require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/db");
// const Order = require("./models/order.model");
// const User = require("./models/user.model");

const port = process.env.PORT || 3000;

app.listen(port, async () => {
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

	// console.log("Creating users...");
	// for (let i = 1; 1 <= 1000; i++) {
	// 	const salt = bcrypt.genSaltSync(10);
	// 	const hashedPassword = bcrypt.hashSync(`password${i}`, salt);

	// 	await User.create({
	// 		userName: `username${i}`,
	// 		email: `email${i}@gmail.com`,
	// 		password: hashedPassword,
	// 	});
	// }

	// console.log("Creating orders...");
	// for (let i = 1; 1 <= 5000; i++) {
	// 	const statusOptions = ["pending", "paid", "delivered"];
	// 	const randomIndex = Math.floor(Math.random() * statusOptions.length);
	// 	const randomStatus = statusOptions[randomIndex];
	// 	const randomUserId = Math.floor(Math.random() * 1000) + 1;

	// 	await Order.create({
	// 		status: randomStatus,
	// 		amount: Math.floor(Math.random() * 901) + 100,
	// 		userId: randomUserId,
	// 	});
	// }
});
