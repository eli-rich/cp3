const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const saltRounds = 10;
const myPlaintextPassword = process.argv[2];

async function initialize() {
  const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
  const user = await prisma.user.create({
    data: {
      password: hash,
    },
  });
  console.log(user);
}

initialize();
