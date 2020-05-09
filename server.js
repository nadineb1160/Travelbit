// Dependencies
const express = require("express");

const app = express();
var PORT = process.env.PORT || 3000;

// Static Directory
app.use(express.static("public"));

var db = require("./models");

// Parse Request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

// Sync Sequelize Models
db.sequelize.sync().then(function () {
    // Starting Express App
    app.listen(PORT, function () {
        console.log("Server listening at localhost:" + PORT);
    })
})