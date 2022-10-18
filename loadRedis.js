const createClient = require('redis').createClient;
const readFile = require('node:fs/promises').readFile;
const dotenv = require('dotenv');
dotenv.config();

async function run() {
  const client = createClient();
  await client.connect();
  await client.sendCommand(['AUTH', process.env.REDIS_PASSWORD]);
  const home = await readFile('./public/md/home.md', 'utf8');
  const ourbeef = await readFile('./public/md/ourbeef.md', 'utf8');
  await client.LPUSH('home', home);
  await client.LPUSH('ourbeef', ourbeef);
  await client.quit();
}

run();
