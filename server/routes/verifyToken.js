var express = require("express");
var router = express.Router();
const verifyToken = require('../functions/verifyToken');

router.get('/',verifyToken, (req, res) => {
    res.json({ message: 'Token is valid' , valid: true});
});

module.exports = router;
