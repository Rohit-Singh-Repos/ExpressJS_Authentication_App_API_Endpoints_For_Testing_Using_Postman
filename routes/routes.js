const express = require("express");
const router = express.Router();
const UserRegistrationController = require("../controllers/userregistrationlogic.controller");
const checkuserauthmiddleware = require("../middlewares/userauth.middleware");

// Express Public Routes
router.post("/registeruser",UserRegistrationController.registerUser)
router.post("/loginuser",UserRegistrationController.loginUser)
router.post("/sendpaswordresetemail",UserRegistrationController.sendPasswordResetEmailToUser)
router.post("/resetpassword/:id/:token",UserRegistrationController.resetUserPassword)

// Express Auth Middleware -  To Protect Private Routes
// Express Route Level Middleware - To Protect Private Route
router.use("/changepassword",checkuserauthmiddleware)
router.use("/getloggedinuserinfo",checkuserauthmiddleware)

// Express Private Routes
router.post("/changepassword",UserRegistrationController.changeUserPassword)
router.get("/getloggedinuserinfo",UserRegistrationController.getLoggedInUserInfo)

module.exports = router
