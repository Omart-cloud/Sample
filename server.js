/* 
* This is the application server
*/

const express = require("express");
const app = express();

/*
Default Get route
*/
app.get("/", (req, res) => {res.send("Welcome home!")});

/*
server host name and port
*/

const HOST = "Localhost"
const PORT = 3000

/*
Log statement to confirm server operation
*/

app.listen(PORT, () => {
    console.log(`trial app listening on ${HOST}:${PORT}`)
})
