const express = require('express');
const App = express();
const BodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(express.static('public'));
App.use(cookieParser());
var cors = require('cors');


// application.use(express.json())

App.get("/", (req, res) => {
  res.send("works")
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
})

App.use(cors())



App.use('/api/buildings', require("./routes/buildings"))
App.use('/api/users', require("./routes/users"))
App.use('/api/amenities', require("./routes/amenities"))
App.use('/api/bookings', require("./routes/bookings"))




App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

