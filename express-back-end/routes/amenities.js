const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { amenities } = new PrismaClient();

router.get('/', async (req, res) => {
  const amenityData = await amenities.findMany();

  res.json(amenityData)
})

router.get('/capacity', async (req, res) => {
  const {amenityId} = req.query;
  // console.log(req.body)
 try { const amenityData = await amenities.findUnique({
    where: {
      id: parseInt(amenityId)
    },
    select: {
      capacity: true
    }
    
  });

  res.json(amenityData)
} catch(err) {
  console.log(err)
}
})


module.exports = router