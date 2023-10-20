const { getUser } = require("../controllers/user.controller");
const { getUserOrders } = require("../controllers/order.controller");

module.exports = {
	getUser: async (_, args) => {
		return await getUser(args);
	},
	getUserOrders: async (_, args) => {
		return await getUserOrders(args);
	},
};
