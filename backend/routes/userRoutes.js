const router = require("express").Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");
const isAuth = require("../middleware/auth").isAuth;

//POST routes
router.post("/register", registerUser);

router.post("/login", loginUser);

//GET Routes
router.get("/logout", logoutUser);

module.exports = router;