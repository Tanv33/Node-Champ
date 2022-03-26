const express = require("express");
const login = require("./login");
const signUpUser = require("./signup");
const router = express.Router();

router.post("/register",signUpUser);
router.post("/login", login);

module.exports = router;
