const express = require('express');
const router = express.Router();

const { getAllUser, createUser, updateUser, deleteUser} = require('../controllers/users.controller');

router.get("/", getAllUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;