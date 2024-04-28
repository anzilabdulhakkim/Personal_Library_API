const {Router} = require("express");
const getUser = require('../controllers/users/getUser');
const loginUser = require('../controllers/users/loginUser');
const registerUser = require('../controllers/users/registerUser');
const userRoute = Router();

userRoute.get("/",getUser);
userRoute.post("/register",loginUser);
userRoute.post("/login",registerUser);

module.exports = userRoute;