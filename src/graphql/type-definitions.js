const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require("./resolver");

const typeDefs = `
scalar Email
scalar Date

input UserInput {
    userName: String!
    email: Email!
    password: String!
}

input OrderInput {
    userId: ID!
    amount: Int!
}

type Error {
    message: String
    statusCode: Int
}

type ErrorResponse {
    error: Error
}

type User {
    id: ID!
    userName: String
    email: Email
    password: String
}

type Order {
    id: ID!
    userId: ID!
    amount: Int
    status: String
}

type UserResponse {
    user: User
}

type OrderResponse {
    order: Order
}

type OrdersResponse {
    orders: [Order]
}

union UserResult = UserResponse | ErrorResponse
union OrderResult = OrderResponse | ErrorResponse
union OrdersResult = OrdersResponse | ErrorResponse

type Query {
    getUser(
        id: ID!
    ): UserResult
    getUserOrders(
        userId: ID!
    ): OrdersResult
}

type Mutation {
    creatUser(
        input: UserInput
    ): UserResult
    createOrder(
        input: OrderInput
    ): OrderResult
}
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
