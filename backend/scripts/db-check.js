// Simple connection test. Prints no secrets.
require('dotenv/config');
const { Client } = require('pg');

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error('DATABASE_URL is not set in backend/.env');
    process.exit(1);
  }

  const client = new Client({ connectionString: url });
  await client.connect();
  const result = await client.query(
    'select now() as server_time, current_database() as db',
  );
  console.log('Connected. Database:', result.rows[0].db);
  console.log('Server time:', result.rows[0].server_time);
  await client.end();
}

main().catch((err) => {
  console.error('Connection failed:', err.code || '', err.message);
  process.exit(1);
});