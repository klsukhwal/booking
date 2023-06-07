const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_database"
});

// Register a user and save their login information in the database
app.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  // Generate a hashed password (you should use a password hashing library like bcrypt)
  const hashedPassword = hashPassword(password);

  // Execute the SQL query to insert the user data into the table
  const query = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
  pool.query(query, [username, hashedPassword, email], (err, result) => {
    if (err) {
      console.error("Error registering user", err);
      res.status(500).json({ error: "Error registering user" });
      return;
    }
    res.json({ success: true });
  });
});

// Hash the password using bcrypt (example)
function hashPassword(password) {
  // Use bcrypt or any suitable password hashing library here
  // Generate a salt and hash the password
  // Return the hashed password
  // Example using bcrypt:
  // const salt = bcrypt.genSaltSync(10);
  // const hashedPassword = bcrypt.hashSync(password, salt);
  // return hashedPassword;
}

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
