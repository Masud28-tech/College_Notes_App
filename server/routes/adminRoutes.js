const { register, login } = require("../controllers/adminController");

const router = require('express').Router();

router.post('/adminRegister', register);
router.post('/adminLogin', login);

module.exports = router;