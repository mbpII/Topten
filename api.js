// fetch("http://localhost:3000/players")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Received data:", data);
//     // store the data as a cookie
//     document.cookie = "player=" + JSON.stingify(data) + "; path=/";
//   })
//   .catch((error) => console.error("Error fetching data", error));

// const cookie = document.cookie
//   .split("; ")
//   .find((row) => row.startsWith("players="));
// if (cookie) {
//   const playersJson = cookie.split("=")[1];
//   const players = JSON.parse(playersJson);
//   console.log("Retrieved players:", players);
//   // do something with the players data
// }
// const express = require("express");
// const { Client } = require("pg");

// const app = express();

// const client = new Client({
//   user: "mbpii",
//   host: "localhost",
//   database: "basketball",
//   password: "1211",
//   port: 5432, // or the port number of your PostgreSQL server
// });

async function getAllRows() {
  await client.connect();
  try {
    const result = await client.query("SELECT * FROM players");
    return result.rows;
  } catch (err) {
    console.error("Error executing query", err.stack);
  } finally {
    await client.end();
  }
}
app.listen(30, () => {
  console.log("Server listening on port 30");
});
