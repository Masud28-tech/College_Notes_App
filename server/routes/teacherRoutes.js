const { register, login } = require("../controllers/teacherController");

const router = require('express').Router();

router.post('/teacherRegister', register);
router.post('/teacherLogin', login);

module.exports = router;