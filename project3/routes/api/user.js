const router = require("express").Router();
const userController = require("../../controllers/userController");
const countryController = require("../../controllers/countryController");
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


// ***** Country Routes *****

router.route("/country")
    .post(countryController.create)

// Matches with "api/user/:userId/country"
router.route("/:userId/country")
    .get(countryController.findAll)


// countryRoutes);

module.exports = router;