const express = require("express");

const router = express.Router();

router.get("/",(req , res, next) => {
    res.send(`<h1>404</h1>`)
    // next();
})

module.exports = router;