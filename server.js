const express = require("express");
const { Client } = require("pg");

const app = express();

const client = new Client({
  user: "mbpii",
  host: "localhost",
  database: "basketball",
  password: "1211",
  port: 5432, // or the port number of your PostgreSQL server
});

app.get("/players", (req, res) => {
  client.connect((err) => {
    if (err) {
      console.error("Error connecting to the PostgreSQL server", err.stack);
      res.status(500).send("Error connecting to the PostgreSQL server");
    } else {
      console.log("Connected to PostgreSQL server");

      // run a query
      client.query("SELECT * FROM players", (err, result) => {
        if (err) {
          console.error("Error running query", err.stack);
          res.status(500).send("Error running query");
        } else {
          console.log("Query result:", result.rows);
          res.json(result.rows); // send the result as a JSON response
        }
        // close the connection
        client.end();
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
