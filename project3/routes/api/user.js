const router = require("express").Router();
const userController = require("../../controllers/userController");
const countryRoutes = require("./country");

// Matcher with "/api/user"
router.route("/")
    .get(userController.findAll)
    .post(userController.create)
    // .post(userController.checkExisting)

// Matches with "api/user/:userId"
router.route("/:userId")
    // .get(userController.findById)
    .put(userController.update)
    
// Matches with "api/user/:uid"
router.route("/:uid")
    .get(userController.findByUid)

// Matches with "api/user/:userId"
router.use("/:userId/country", countryRoutes);

module.exports = router;