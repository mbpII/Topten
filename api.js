const express = require("express");
const { Client } = require("pg");

const app = express();
const port = 3000;
// establish Client to db connection
const client = new Client({
  user: "mbpii",
  host: "localhost",
  database: "basketball",
  password: "1211",
  port: 5432, // or the port number of your PostgreSQL server
});
// Test the database connection
client.connect((err) => {
  if (err) {
    console.error("Database connection error", err.stack);
  } else {
    console.log("Connected to database");
  }
});

// Create a GET endpoint to retrieve all players
app.get("/api/players", (req, res) => {
  client.query("SELECT * FROM players", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      res.status(500).send("Error retrieving players from database");
    } else {
      res.status(200).json(result.rows);
    }
  });
});

// Create a Post endpoint to insert into db
app.post("/api/players", (req, res) => {
  const { name, description, image_url } = req.body;

  if (!name || !description || !image_url) {
    res.status(400).send("Please provide a name, description, and image URL");
    return;
  }

  const query = {
    text: "INSERT INTO players(name, description, image_url) VALUES($1, $2, $3) RETURNING *",
    values: [name, description, image_url],
  };

  client.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      res.status(500).send("Error creating player in database");
    } else {
      res.status(201).json(result.rows[0]);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// // Create a POST endpoint to add a new player
// app.post("/api/players", (req, res) => {
//   // Retrieve the player data from the request body
//   const { name, team, points_per_game } = req.body;

//   // Insert the player data into the database
//   client.query(
//     "INSERT INTO players (name, team, points_per_game) VALUES ($1, $2, $3)",
//     [name, team, points_per_game],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error adding player to database");
//       } else {
//         res.status(201).send("Player added to database");
//       }
//     }
//   );
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
