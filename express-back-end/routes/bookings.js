const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { bookings } = new PrismaClient();

router.get('/', async (req, res) => {
  const bookingsData = await bookings.findMany();

  res.json(bookingsData)
})


module.exports = router