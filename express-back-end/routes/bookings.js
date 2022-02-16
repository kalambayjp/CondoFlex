const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { bookings } = new PrismaClient();


router.get('/', async (req, res) => {
  const { amenityId, date} = req.query;
  
  console.log("date -->", date)
  console.log("amenityId -->", amenityId )
 
  try {
    const bookingsData = await bookings.findMany({
      where: {
        AND: [
          { 
            amenity_id: {
              equals: parseInt(amenityId)
            }
          },
          {
            start_time: {
              startsWith: date
            }
          }
        ]
      }
    });
    console.log(bookingsData)
    res.json(bookingsData)
  } catch(err) {
    console.log(err);
  }
  
})




router.get('/', async (req, res) => {
  const bookingsData = await bookings.findMany();

  res.json(bookingsData)
})


module.exports = router