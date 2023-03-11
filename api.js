fetch("http://localhost:3000/players")
  .then((response) => response.json())
  .then((data) => {
    console.log("Received data:", data);
    // store the data as a cookie
    document.cookie = "player=" + JSON.stingify(data) + "; path=/";
  })
  .catch((error) => console.error("Error fetching data", error));

const cookie = document.cookie
  .split("; ")
  .find((row) => row.startsWith("players="));
if (cookie) {
  const playersJson = cookie.split("=")[1];
  const players = JSON.parse(playersJson);
  console.log("Retrieved players:", players);
  // do something with the players data
}
