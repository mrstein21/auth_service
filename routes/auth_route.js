const router = require('express-promise-router')();
const authController= require('../controller/auth_controller');

router.route("/login").post(authController.login);
router.route("/register").post(authController.register);

module.exports=router;
