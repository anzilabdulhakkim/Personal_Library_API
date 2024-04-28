const {Router} = require("express");
const getUser = require('../controllers/users/getUser');
const loginUser = require('../controllers/users/loginUser');
const registerUser = require('../controllers/users/registerUser');
const userRoute = Router();

userRoute.get("/",getUser);
userRoute.post("/register",registerUser);
userRoute.post("/login",loginUser);

module.exports = userRoute;