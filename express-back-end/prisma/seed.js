const buildings = [
  {
    id: 2000,
    name: "City Gardens",
    address: "698 CandleWood Lane",
    image: "https://images.unsplash.com/photo-1571905837410-87605d34ad73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 2001,
    name:"Uptown Villa's",
    address: "17 Chery Tree Lane",
    image: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2002,
    name:"Grand Estates",
    address: "42 Wallaby Way",
    image: "https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
  },
  {
    id: 2003,
    name:"River City",
    address: "31 Spooner St",
    image: "https://images.unsplash.com/photo-1621831337119-dedf02b5e611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
];
const users = [
  {
  first_name: "Nat",
  last_name: "Reynold",
  email: "nreynold0@chronoengine.com",
  password: "password",
  phone_number: 8896157835,
  unit_number: 7979,
  building_id: 2001
}, 
{
  first_name: "Elvina",
  last_name: "Cescotti",
  email: "ecescotti1@blogtalkradio.com",
  password: "password",
  phone_number: 6658605558,
  unit_number: 6798,
  building_id: 2003
},
 {
  first_name: "Hansiain",
  last_name: "Lambswood",
  email: "hlambswood2@army.mil",
  password: "password",
  phone_number: 8189002856,
  unit_number: 5518,
  building_id: 2003
}, {
  first_name: "Ellene",
  last_name: "Kerby",
  email: "ekerby3@joomla.org",
  password: "password",
  phone_number: 8148111652,
  unit_number: 3837,
  building_id: 2002
}, {
  first_name: "Kitti",
  last_name: "Tortoishell",
  email: "ktortoishell4@eepurl.com",
  password: "password",
  phone_number: 1166835797,
  unit_number: 3877,
  building_id: 2003
}, {
  first_name: "Harrietta",
  last_name: "Roiz",
  email: "hroiz5@infoseek.co.jp",
  password: "password",
  phone_number: 4308735189,
  unit_number: 1778,
  building_id: 2001
}, {
  first_name: "Tilda",
  last_name: "Adamczyk",
  email: "tadamczyk6@ebay.com",
  password: "password",
  phone_number: 5022390563,
  unit_number: 7640,
  building_id: 2001
}, {
  first_name: "Bertrand",
  last_name: "Cashin",
  email: "bcashin7@whitehouse.gov",
  password: "password",
  phone_number: 9365417326,
  unit_number: 6098,
  building_id: 2000
}, {
  first_name: "Shandie",
  last_name: "Sellman",
  email: "ssellman8@gnu.org",
  password: "password",
  phone_number: 3714768726,
  unit_number: 6949,
  building_id: 2001
}, {
  first_name: "Francyne",
  last_name: "Carlet",
  email: "fcarlet9@yolasite.com",
  password: "password",
  phone_number: 1414282896,
  unit_number: 0974,
  building_id: 2002
}, {
  first_name: "Kellen",
  last_name: "Lebel",
  email: "klebela@aol.com",
  password: "password",
  phone_number: 1279890222,
  unit_number: 7694,
  building_id: 2000
}, {
  first_name: "Britney",
  last_name: "Brigge",
  email: "bbriggeb@discuz.net",
  password: "password",
  phone_number: 8488986295,
  unit_number: 6996,
  building_id: 2000
}, {
  first_name: "Mariejeanne",
  last_name: "Dumberell",
  email: "mdumberellc@wordpress.com",
  password: "password",
  phone_number: 3184414279,
  unit_number: 4679,
  building_id: 2003
}, {
  first_name: "Sherri",
  last_name: "Ibarra",
  email: "sibarrad@cbsnews.com",
  password: "password",
  phone_number: 7898529204,
  unit_number: 9862,
  building_id: 2002
}, {
  first_name: "Ichabod",
  last_name: "Matisoff",
  email: "imatisoffe@paginegialle.it",
  password: "password",
  phone_number: 8893714889,
  unit_number: 4213,
  building_id: 2002
}, {
  first_name: "Klarika",
  last_name: "Glazer",
  email: "kglazerf@washington.edu",
  password: "password",
  phone_number: 6806828070,
  unit_number: 1938,
  building_id: 2002
}, {
  first_name: "Romona",
  last_name: "Jakubovits",
  email: "rjakubovitsg@ifeng.com",
  password: "password",
  phone_number: 4768810956,
  unit_number: 3249,
  building_id: 2001
}, {
  first_name: "Kellen",
  last_name: "Calvie",
  email: "kcalvieh@google.ca",
  password: "password",
  phone_number: 7808940590,
  unit_number: 4795,
  building_id: 2001
}, {
  first_name: "Lenora",
  last_name: "Taylor",
  email: "ltaylori@princeton.edu",
  password: "password",
  phone_number: 3311113293,
  unit_number: 0102,
  building_id: 2003
}, {
  first_name: "Scarlet",
  last_name: "O'Loughane",
  email: "soloughanej@unicef.org",
  password: "password",
  phone_number: 1259972129,
  unit_number: 2059,
  building_id: 2000
}]
const amenities = [
  {
    building_id: 2000,
    name: "Pool", 
    description: "Massa sapien faucibus et molestie.",
    image: "https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    capacity: 20,
  },
  {
    building_id: 2001,
    name: "Pool", 
    description: "Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
    image: "https://images.pexels.com/photos/8688171/pexels-photo-8688171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    capacity: 30,
  },
  {
    building_id: 2002,
    name: "Pool", 
    description: "Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. ",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    capacity: 30,
  },
  {
    building_id: 2003,
    name: "Pool", 
    description: "Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend",
    image: "https://images.pexels.com/photos/6908362/pexels-photo-6908362.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6908362.jpg&fm=jpg",
    capacity: 25,
  },
  {
    building_id: 2000,
    name: "Suana", 
    description: "Sit amet justo donec enim diam vulputate ut pharetra sit.",
    image: "https://images.pexels.com/photos/7174404/pexels-photo-7174404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    capacity: 15,
  },
  {
    building_id: 2001,
    name: "Suana", 
    description: "Nisi est sit amet facilisis magna etiam tempor orci.",
    image: "https://images.pexels.com/photos/7587466/pexels-photo-7587466.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7587466.jpg&fm=jpg",
    capacity: 5,
  },
  {
    building_id: 2003,
    name: "Suana", 
    description: "Velit scelerisque in dictum non consectetur a erat nam at. Dolor purus non enim praesent.",
    image: "https://images.pexels.com/photos/8092430/pexels-photo-8092430.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-8092430.jpg&fm=jpg",
    capacity: 5,
  },
  {
    building_id: 2003,
    name: "Yoga Studio", 
    description: "Aliquam sem et tortor consequat id porta nibh venenatis cras.",
    image: "https://www.innerpeaceyoga.ca/images/home/home-background.jpg",
    capacity: 15,
  },
  {
    building_id: 2000,
    name: "Yoga Studio", 
    description: "Aliquam sem et tortor consequat id porta nibh venenatis cras.",
    image: "https://destinationdeluxe.com/wp-content/uploads/2020/06/Good-Vibes-Yoga-Melbourne-Destination-Deluxe.jpg",
    capacity: 25,
  },
  {
    building_id: 2002,
    name: "Rec Room", 
    description: "Varius duis at consectetur lorem donec massa sapien faucibus et. Ac tortor dignissim convallis aenean.",
    image: "https://i.pinimg.com/originals/12/7e/79/127e791715032f0db0d1638e404febf7.jpg",
    capacity: 20,
  },
  {
    building_id: 2000,
    name: "Rec Room", 
    description: "Varius duis at consectetur lorem donec massa sapien faucibus et. Ac tortor dignissim convallis aenean.",
    image: "https://storeys.com/wp-content/uploads/2021/02/The-Eglinton-Billiards-and-Games-Room.jpg",
    capacity: 20,

  },
  {
    building_id: 2001,
    name: "Rec Room", 
    description: "Accumsan tortor posuere ac ut consequat semper viverra nam.",
    image: "https://talkcondo.s3.ca-central-1.amazonaws.com/wp-content/uploads/2016/06/blue-diamong-at-imperial-village-billiards-1030x644.jpg",
    capacity: 25,
  },
  {
    building_id: 2003,
    name: "Rec Room", 
    description: "Arcu vitae elementum curabitur vitae nunc sed.",
    image: "https://images.rentals.ca/property-pictures/original/ottawa-on/522660/studio-5748902.jpg",
    capacity: 25,
  },
  {
    building_id: 2000,
    name: "Conference Room", 
    description: "Cursus in hac habitasse platea dictumst quisque sagittis purus.",
    image: "https://i.pinimg.com/originals/0f/c0/1f/0fc01f3f8c6ad46d6a2e802025fec4e6.jpg",
    capacity: 20,
  },
  {
    building_id: 2001,
    name: "Conference Room", 
    description: "Imperdiet sed euismod nisi porta lorem mollis.",
    image: "https://www.condoauthorityontario.ca/wp-content/uploads/2020/05/Web16.jpg",
    capacity: 15,
  },
  {
    building_id: 2002,
    name: "Conference Room", 
    description: "Ultricies mi eget mauris pharetra.",
    image: "https://smartcdn.prod.postmedia.digital/nationalpost/wp-content/uploads/2013/09/meet.jpg",
    capacity: 20,
  },
  {
    building_id: 2003,
    name: "Conference Room", 
    description: "Enim diam vulputate ut pharetra sit amet aliquam.",
    image: "https://uploads-ssl.webflow.com/5709957944c86edb7d69cd8b/5fbedce11494e47b550f1074_Image%20from%20iOS%20(1).jpg",
    capacity: 12,
  }
];
const bookings = [];

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

async function seedBuildings() {
  for (const building of buildings) {
    await prisma.buildings.create({
      data: building
    })
  }
};
async function seedAmenities() {
  for (const amenity of amenities) {
    await prisma.amenities.create({
      data: amenity
    })
  }
};
async function seedUsers() {
  for (const user of users) {
    await prisma.users.create({
      data: user
    })
  }
};
async function seedBookings() {
  for (const booking of bookings) {
    await prisma.bookings.create({
      data: booking
    })
  }
};




seedBuildings()
  .then(x => seedUsers())
  .then(x => seedAmenities())
  .then(x => seedBookings())
.catch(e => {
  console.log(e);
  process.exit(1)
}).finally(() => {
  prisma.$disconnect()
})

// seedUsers()
// .catch(e => {
//   console.log(e);
//   process.exit(1)
// }).finally(() => {
//   prisma.$disconnect()
// })

// seedAmenities()
// .catch(e => {
//   console.log(e);
//   process.exit(1)
// }).finally(() => {
//   prisma.$disconnect()
// })

// seedBookings()
// .catch(e => {
//   console.log(e);
//   process.exit(1)
// }).finally(() => {
//   prisma.$disconnect()
// })