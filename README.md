# STEPS TO RUN THE APPLICATION

-    [SETUP DATABASE SCHEMA](#setup-database-schema)
-    [SETUP AND RUN THE SERVER](#setup-and-run-the-server)
-    [SEED THE DATABASE](#seed-the-database)
-    [RETRIEVE TOP 10 USERS WITH THE MOST ORDERS](#retrieve-top-10-users-with-the-most-orders)

## SETUP DATABASE SCHEMA

1. Open MySQL Workbench or phpMyAdmin
2. Create a database with the name `timartdb` or run the command `CREATE DATABASE timartdb;`
3. Select `timartdb` database or run the command to select it `USE timartdb;`
4. RUn the following command to create the `users` table in the database `CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, userName VARCHAR(255) NOT NULL UNIQUE, email VARCHAR(255) NOT NULL UNIQUE, firstName VARCHAR(255) NOT NULL, lastName VARCHAR(255) NOT NULL, createdAt DATETIME NOT NULL, updatedAt DATETIME NOT NULL, PRIMARY KEY(id));`
5. Run the following command to create the `orders` table in the database and establish a foreign key relationship between the `users` table and the `orders` table `CREATE TABLE orders (id INT NOT NULL AUTO_INCREMENT, status VARCHAR(255) default 'pending', amount FLOAT NOT NULL, createdAt DATETIME NOT NULL, updatedAt DATETIME NOT NULL, userId INT, PRIMARY KEY(id), FOREIGN KEY(userId) REFERENCES users(id));`

## SETUP AND RUN THE SERVER

1. Clone the repository using the command `git clone https://github.com/danieliheonu/timart.git`
2. Navigate to the project directory using the command `cd timart`.
3. Install all dependencies using the command `npm install`.
4. Create a `.env` file in the root directory and input the following values `DB_NAME=timart`, `DB_USER=your_database_username`, and `DB_PASSWORD=your_database_password`.
5. Start the application using the command `npm start` in your terminal
6. The application should be running on `http://localhost:3000/graphql`

## SEED THE DATABASE

1. Open your terminal and run the following command `npm run seed`
2. The database will be seeded with 1000 users and 5000 orders. It can be seen by running the following SQL Query `SELECT * FROM users;` and `SELECT * FROM orders;` or `SELECT * FROM orders LIMIT 5000;` to see the 5000 orders.

## RETRIEVE TOP 10 USERS WITH THE MOST ORDERS

1. Run the following SQL Query `SELECT users.id, COUNT(orders.userId) AS total_orders FROM users LEFT JOIN orders ON users.id = orders.userId GROUP BY users.id ORDER BY total_orders DESC LIMIT 10;`. It will return the top 10 users with the most orders.
