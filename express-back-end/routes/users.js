const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { users } = new PrismaClient();

router.get('/', async (req, res) => {
  const usersData = await users.findMany();

  res.json(usersData)
})


module.exports = router