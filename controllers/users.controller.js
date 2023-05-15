const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

//get user
const getAllUser = (req, res) => {
  res.status(200).json(users);
};

//create user
const createUser = (req, res) => {
  const username  = req.body.username;
  const email  = req.body.email;
  const user = {
    id: uuidv4(),
    username,
    email,
  };
  users.push(user);
  res.status(201).json(users);
};

//update User
const updateUser = (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;
  users.filter((user) => user.id === id).map((selectedUser) => {
    selectedUser.username = username;
    selectedUser.email = email;
  })
  res.status(200).json( users );
};

//delete user
const deleteUser = (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id)
  res.status(200).json(users);
};


  (module.exports = { getAllUser, createUser, updateUser,deleteUser });
