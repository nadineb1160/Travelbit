const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes 
router.use("/api", apiRoutes);

// If no API routes hit -> send React app
router.use(function(req, res) {
    // build or public?
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;