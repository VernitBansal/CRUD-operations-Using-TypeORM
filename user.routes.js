const express = require('express');

const { createUser } = require('../services/user.services');
const { searchUser } = require('../services/user.services');
const { deleteUser } = require('../services/user.services');
const { updateUser } = require('../services/user.services');


const router = express.Router();

router.post("/create-user", createUser);
router.get("/search-user", searchUser)
router.delete("/delete-user", deleteUser)
router.put("/update-user", updateUser)

module.exports = { router };