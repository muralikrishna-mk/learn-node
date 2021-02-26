const express = require("express");

const router = express.Router();

router.post("/message",(req, res, next) => {
    console.log(req.body)
    // res.status(200).send(`<h1>${req.body.message}</h1>`);
    res.redirect("/add-product")
})

router.get("/add-product",(req, res ,next) => {
    res.send(
        `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Send</button></form>
            </body>
            </html>
        `
    );
})

module.exports = router;