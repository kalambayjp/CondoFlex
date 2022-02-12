const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { amenities } = new PrismaClient();

router.get('/', async (req, res) => {
  const amenityData = await amenities.findMany();

  res.json(amenityData)
})


module.exports = router