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




// router.get('/', async (req, res) => {
//   const bookingsData = await bookings.findMany();

//   res.json(bookingsData)
// })

router.post('/', async (req, res) => {
  const { userId, amenityId, numOfPpl, startTime } = req.query;

  try {const bookingsData = await bookings.create({
    data: {
      user_id: parseInt(userId),
      amenity_id: parseInt(amenityId),
      number_of_ppl: parseInt(numOfPpl),
      start_time: startTime,
    }})

    res.json(bookingsData)

  } catch(err) {
    console.log(err)
  }

})




module.exports = router