// Connection test with TLS modes. Prints no secrets.
require('dotenv/config');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL is not set in backend/.env');
  process.exit(1);
}

const caPath = path.join(__dirname, '..', 'certs', 'supabase-ca.crt');
const ca = fs.existsSync(caPath) ? fs.readFileSync(caPath, 'utf8') : null;

const tests = [
  { label: 'A) default, no TLS option', config: { connectionString: url } },
  {
    label: 'C) TLS on, certificate NOT verified',
    config: { connectionString: url, ssl: { rejectUnauthorized: false } },
  },
];

if (ca) {
  tests.push({
    label: 'D) TLS on, verified with Supabase CA',
    config: {
      connectionString: url,
      ssl: { ca, rejectUnauthorized: true },
    },
  });
} else {
  console.log('Note: backend/certs/supabase-ca.crt not found, skipping test D.');
}

async function run(test) {
  const client = new Client(test.config);
  try {
    await client.connect();
    const encrypted = client.connection.stream.encrypted === true;
    console.log(`${test.label}: connected, encrypted = ${encrypted}`);
  } catch (err) {
    console.log(`${test.label}: FAILED - ${err.code || ''} ${err.message}`);
  } finally {
    await client.end().catch(() => {});
  }
}

(async () => {
  for (const test of tests) {
    await run(test);
  }
})();