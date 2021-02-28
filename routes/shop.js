const express = require("express");
const path = require("path");

const getRootPath = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(path.dirname(process.mainModule.filename));
  res.sendFile(path.join(getRootPath, "views", "shop.html"));
});

module.exports = router;
