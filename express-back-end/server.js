const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8090;
const db = require('./queries')

// Express Configuration

App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(Express.static('public'));




// Routes

App.get('/users', db.getUsers)
App.get('/users/:id', db.getUserById)
App.post('/users', db.createUser)
App.put('/users/:id', db.updateUser)
App.delete('/users/:id', db.deleteUser)





// Listen Server Port

App.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
