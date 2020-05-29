// Dependencies
const express = require("express");
const routes = require("./routes");

const app = express();
var PORT = process.env.PORT || 3001;

// Define middleware to parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Static Directory
app.use(express.static("public"));

const db = require("./models");


// Routes
app.use(routes);

// Sync Sequelize Models
db.sequelize.sync().then(function () {
    // Starting Express App
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    })
})