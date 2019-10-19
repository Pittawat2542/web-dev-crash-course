const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

// localhost:3000/users/test
router.get("/test", usersController.getTest);

router.get("/:id", usersController.getUserId);

module.exports = router;