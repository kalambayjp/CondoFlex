const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
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
  console.log("REQBODYFORM123",req.body.formDetails)
  const {email, password}= req.body.formDetails
  

  console.log("PASSSSSSSSSUSERRRRRRRRRR",password);
  const usersData = await users.findUnique({
    where:{
      email:email,
    }
  });
  console.log("\n USERDATAAAAAAAAAA \n",usersData)
  let Logged="";
  let first_name=""
  let building_code=""

  // console.log("PASSSSSSSSS",usersData.password)
  //console.log("PASSSSSSSSSUSERRRRRRRRRR",password);
  
  if((users)&&(usersData)&&(usersData.password===password)){
    first_name = usersData.first_name;
    building_code = usersData.building_code;
    // console.log("RRREQQQSESSION",req.session.user_id)
    Logged="Successful";
    console.log("Valid")
  }
  else{
    Logged="Unsuccessful";
    console.log("invalid")
  }

  // console.log("USERDATAAAAAA",usersData)
  res.json({first_name: first_name,building_code: building_code, Logged:Logged });
  
})


module.exports = router