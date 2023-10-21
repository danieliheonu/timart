require("dotenv").config();
const { faker } = require("@faker-js/faker");
const User = require("../models/user.model");
const Order = require("../models/order.model");

const seedUserTable = async () => {
	console.log("Creating users...");
	for (let i = 1; i < 1001; i++) {
		await User.create({
			userName: faker.internet.userName(),
			email: faker.internet.email(),
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
		});
	}
	console.log("Users created!");
};

const seedOrderTable = async () => {
	console.log("Creating orders...");
	for (let i = 1; i < 5001; i++) {
		await Order.create({
			status: faker.helpers.arrayElement(["pending", "paid", "delivered"]),
			amount: faker.number.int({ min: 100, max: 1000 }),
			userId: faker.number.int({ min: 1, max: 1000 }),
		});
	}
	console.log("Orders created!");
};

seedUserTable().then(() => seedOrderTable());
