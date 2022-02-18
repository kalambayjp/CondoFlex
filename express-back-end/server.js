const express = require('express');
const App = express();
const BodyParser = require('body-parser');
const { application } = require('express');
const cookieSession = require ('cookie-session')
const PORT = 8080;
const { PrismaClient } = require("@prisma/client");

var cors = require('cors')

// Express Configuration
App.use(cors())
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(express.json());
App.use(express.static('public'));


// application.use(express.json())
App.get("/", (req, res) => {
  res.send("works")
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
})

// const cookieSession = require('cookie-session');
// App.use(cookieSession({
//   name: 'session',
//   keys: ["TRIAL"],
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }));



App.use('/api/buildings', require("./routes/buildings"))
App.use('/api/users', require("./routes/users"))
App.use('/api/amenities', require("./routes/amenities"))
App.use('/api/bookings', require("./routes/bookings"))



App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

