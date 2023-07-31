const express = require("express");
const { home, registerUser, loginUser } = require("../Controller/userController");

const router = express.Router();

router.get('/', home);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
