const { Client } = require('pg');
const client = new Client({
  user: 'mbpii',
  host: 'localhost',
  database: 'basketball',
  password: '1211',
  port: 5432, // or the port number of your PostgreSQL server
});

client.connect((err) => {
  if (err) {
    console.error('Error connecting to the PostgreSQL server', err.stack);
  } else {
    console.log('Connected to PostgreSQL server');
  }
});

// run a query with a WHERE clause and an ORDER BY clause
client.query('SELECT * FROM players', (err, res) => {
  if (err) {
    console.error('Error running query', err.stack);
  } else {
    console.log('Query result:', res.rows);
  }
  // close the connection
  client.end();
});

