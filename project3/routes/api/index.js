const router = require("express"). Router();
const userRoutes = require("./user");
// const countryRoutes = require("./country");
const cityRoutes = require("./city");

// User routes
router.use("/user", userRoutes);

// Country routes
// router.use("/country", countryRoutes);

// City routes
router.use("/city", cityRoutes);


module.exports = router;