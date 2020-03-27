const { getUserData } =  require("../handlers/user.handlers");
let bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { Router } = require('express');
const router = Router();


router.post("/user", jsonParser, getUserData);

module.exports = router;