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
  const {email, password}= req.body.formDetails
  
  const usersData = await users.findUnique({
    where:{
      email:email,
    }
  });

  let Logged="";
  let first_name=""
  let building_id=""

  if((users)&&(usersData)&&(usersData.password===password)){
    first_name = usersData.first_name;
    building_id = usersData.building_id;
    userId = usersData.id
    Logged="Successful";
    console.log("Valid")
  }
  else{
    Logged="Unsuccessful";
    console.log("invalid")
  }

  res.json({first_name: first_name,building_id: building_id, Logged:Logged, userId: userId});
  
})


module.exports = router