// load .env data into process.env
require("dotenv").config();


// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();


// GET All users

const getUsers = (request, response) => {
  db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.json({output: results.rows})
  })
}

// GET a single user by ID =>  /users/:id


const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.json({output: results.rows})
  })
}


// POST a new user

const createUser = (request, response) => {
  const { building_code,fname,lname,email,password,phone_number,unit_number,is_admin } = request.body


  db.query('INSERT INTO users (building_code,fname,lname,email,password,phone_number,unit_number,is_admin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [building_code,fname,lname,email,password,phone_number,unit_number,is_admin], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

// PUT updated data in an existing user

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { building_code, fname, lname, email, password, phone_number, unit_number, is_admin } = request.body

  db.query(
    'UPDATE users SET building_code = $1, fname = $2, lname = $3, email = $4, password = $5, phone_number = $6, unit_number = $7, is_admin = $8 WHERE id = $9',
    [building_code, fname, lname, email, password, phone_number, unit_number, is_admin, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}


// DELETE a user

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}


// Exporting CRUD functions in a REST API

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}

