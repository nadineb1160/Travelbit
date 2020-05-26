const router = require("express"). Router();
const userRoutes = require("./user");
const countryRoutes = require("./country");
const stateRoutes = require("./state");
const cityRoutes = require("./city");
const tripRoutes = require("./trip");

// User routes
router.use("/user", userRoutes);

// Country routes
router.use("/country", countryRoutes);

// State routes
router.use("/state", stateRoutes);

// City routes
router.use("/city", cityRoutes);

// Trip routes
router.use("/trip", tripRoutes);


module.exports = router;