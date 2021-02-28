const express = require("express");
const path = require("path");

const getRootPath = require("../util/path");

const router = express.Router();

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  // res.status(200).send(`<h1>${req.body.message}</h1>`);
  res.redirect("/admin/add-product");
});

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(getRootPath, "views", "add-product.html"));
});

module.exports = router;
