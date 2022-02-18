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
App.use(cookieSession({
  name:"session",
  keys:["key1","key2"]
}))



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
  console.log("\n USERDATAAAAAAAAAA \n",usersData)
  let user_id=""
  let Logged="";
  let first_name=""
  let building_code=""

  // console.log("PASSSSSSSSS",usersData.password)
  //console.log("PASSSSSSSSSUSERRRRRRRRRR",password);
  
  if((users)&&(usersData)&&(usersData.password===password)){
    user_id=usersData.id;
    first_name = usersData.first_name;
    building_code = usersData.building_code;
    // console.log("RRREQQQSESSION",req.session.user_id)
    Logged = "Successful";
    console.log("Valid")
    // req.session["name"]="first_name"
  }
  else {
    Logged = "Unsuccessful";
    console.log("invalid")
  }

  // console.log("USERDATAAAAAA",usersData)
  res.json({user_id:user_id, first_name: first_name,building_code: building_code, Logged:Logged });
  
})

//----------------------------- Register End ------------------------------------------------------------------



module.exports = router

