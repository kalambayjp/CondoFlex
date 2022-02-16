const express = require('express');
const App = express();
const BodyParser = require('body-parser');
const { application } = require('express');
const PORT = 8080;
var cors = require('cors')

// Express Configuration

App.use(cors())
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(express.json());
App.use(express.static('public'));
var cors = require('cors');


App.get("/", (req, res) => {
  res.send("works")
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
})


//login
App.post('/login',(req, res) =>{
  console.log(req.body)
})


//Register 

let users = [];

App.post('/register', function(req, res) {
  const newUser = {
    building_code: req.body.building_code,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    phone_number: req.body.phone_number,
    unit_number: req.body.unit_number
  };
  users.push(newUser);
  console.log(users);
});



// App.use(cors())

App.use(cors())



App.use('/api/buildings', require("./routes/buildings"))
App.use('/api/users', require("./routes/users"))
App.use('/api/amenities', require("./routes/amenities"))
App.use('/api/bookings', require("./routes/bookings"))



App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

