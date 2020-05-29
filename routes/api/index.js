const router = require("express"). Router();
const userRoutes = require("./user");
const countryRoutes = require("./country");
const stateRoutes = require("./state");
const cityRoutes = require("./city");
const tripRoutes = require("./trip");

router.use(function(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(403).json({ error: 'No credentials sent!' });
    }
    next();
  })

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