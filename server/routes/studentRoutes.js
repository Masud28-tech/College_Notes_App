const { register, login } = require("../controllers/studentController");

const router = require('express').Router();

router.post('/studentRegister', register);
router.post('/studentLogin', login);

module.exports = router;