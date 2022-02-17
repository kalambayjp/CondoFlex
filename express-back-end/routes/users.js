const router = require("express").Router();
const { PrismaClient, Prisma } = require("@prisma/client");
const { users } = new PrismaClient();
const BodyParser = require('body-parser');
const cookieSession = require('cookie-session');
var cors = require('cors')
const express = require('express');
const App = express();

App.use(cors());
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(express.static('public'));


router.get('/', async (req, res) => {
  const usersData = await users.findMany();

  res.json(usersData)
})

router.post('/login', async (req, res) => {
  console.log("REQBODYFORM123", req.body.formDetails)
  const { email, password } = req.body.formDetails


  console.log("PASSSSSSSSSUSERRRRRRRRRR", password);
  const usersData = await users.findUnique({
    where: {
      email: email,
    }
  });
  console.log("\n USERDATAAAAAAAAAA \n", usersData)
  let Logged = "";
  let first_name = ""
  let building_code = ""

  // console.log("PASSSSSSSSS",usersData.password)
  //console.log("PASSSSSSSSSUSERRRRRRRRRR",password);

  if ((users) && (usersData) && (usersData.password === password)) {
    first_name = usersData.first_name;
    building_code = usersData.building_code;
    // console.log("RRREQQQSESSION",req.session.user_id)
    Logged = "Successful";
    console.log("Valid")
  }
  else {
    Logged = "Unsuccessful";
    console.log("invalid")
  }

  // console.log("USERDATAAAAAA",usersData)
  res.json({ first_name: first_name, building_code: building_code, Logged: Logged });

})


//----------------------------- Register Start ------------------------------------------------------------------


router.post('/register', async (req, res) => {
  console.log("Register Data:", req.body.formData)
  const { first_name, last_name, email, password, phone_number, unit_number, building_code } = req.body.formData

  const firstName = first_name;
  const lastName = last_name;
  const userEmail = email;
  const userPassword = password;
  const phoneNumber = Number.parseInt(phone_number);
  const unitNumber = Number.parseInt(unit_number);
  const buildingCode = Number.parseInt(building_code);
  let userCreated = "";
  let userId = 0;

  try {
    await users.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email: userEmail,
        password: userPassword,
        phone_number: phoneNumber,
        unit_number: unitNumber,
        building_code: buildingCode
      },
    })
  } catch (e) {
    console.log("Error: \n", e);
  }

  const usersData = await users.findUnique({
    where: {
      email: userEmail,
    }
  });

  if ((usersData) && (usersData.email === userEmail)) {
    userId = usersData.id;
    userCreated = "Successful";
    console.log("User Created: ",)
  }
  else {
    userCreated = "Unsuccessful";
  }

  res.json({ userCreated: userCreated, userId: userId });

})

//----------------------------- Register End ------------------------------------------------------------------



module.exports = router

