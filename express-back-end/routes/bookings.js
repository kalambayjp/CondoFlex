const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { bookings } = new PrismaClient();

router.get("/", async (req, res) => {
  const { amenityId, date } = req.query;

  try {
    const bookingsData = await bookings.findMany({
      where: {
        AND: [
          {
            amenity_id: {
              equals: parseInt(amenityId),
            },
          },
          {
            start_time: {
              startsWith: date,
            },
          },
        ],
      },
    });

    res.json(bookingsData);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const { userId, amenityId, numOfPpl, startTime } = req.query;

  try {
    const bookingsData = await bookings.create({
      data: {
        user_id: parseInt(userId),
        amenity_id: parseInt(amenityId),
        number_of_ppl: parseInt(numOfPpl),
        start_time: startTime,
      },
    });

    res.json(bookingsData);
  } catch (err) {
    console.log(err);
  }
});

router.get("/my_bookings", async (req, res) => {
  const { userId} = req.query;

  try {
    const bookingsData = await bookings.findMany({
      where: {
        user_id: parseInt(userId),
      },
      select:{
        id:true,
        number_of_ppl:true,
        start_time:true,
        amenity:{
          select: {
            name:true
          }
        }
      }
      
    });

    res.json(bookingsData);
  } catch (err) {
    console.log(err);
  }
});



router.delete("/delete", async (req, res) => {
  const { booking_id} = req.query;
  console.log("BOOOOKING ID",booking_id)
  try {
    const deleteBooking = await bookings.delete({
      where: {
        id: parseInt(booking_id),
      },
  
      
    });

    res.json(deleteBooking);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

