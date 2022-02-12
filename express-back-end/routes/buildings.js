const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { buildings } = new PrismaClient();

router.get('/', async (req, res) => {
  const buildingData = await buildings.findMany();

  res.json(buildingData)
})


module.exports = router