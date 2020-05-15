const router = require("express"). Router();
const countryRoutes = require("./country");

// Country routes
router.use("/country", countryRoutes);

// City routes



module.exports = router;