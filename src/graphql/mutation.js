const { createUser } = require("../controllers/user.controller");
const { createOrder } = require("../controllers/order.controller");

module.exports = {
	creatUser: async (_, args) => {
		return await createUser(args);
	},
	createOrder: async (_, args) => {
		return await createOrder(args);
	},
};
