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
App.use(express.static('public'));
var cors = require('cors');


// application.use(express.json())

App.get("/", (req, res) => {
  res.send("works")
})
//login
App.post('/login',(req, res) =>{
  console.log(req.body)
})

// App.use(cors())



App.use('/api/buildings', require("./routes/buildings"))
App.use('/api/users', require("./routes/users"))
App.use('/api/amenities', require("./routes/amenities"))
App.use('/api/bookings', require("./routes/bookings"))




App.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
