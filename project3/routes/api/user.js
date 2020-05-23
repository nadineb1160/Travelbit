const router = require("express").Router();
const userController = require("../../controllers/userController");
const countryController = require("../../controllers/countryController");
const stateController = require("../../controllers/stateController");
const cityController = require("../../controllers/cityController");
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
    .post(countryController.create);

// Matches with "api/user/:userId/country"
router.route("/:userId/country")
    .get(countryController.findAll)

// Matches with "api/user/:userId/country/:countryId"
router.route("/:userId/country/:countryId")
    .get(countryController.findById)
    .put(countryController.update)
    .delete(countryController.remove);


// ***** State Routes *****
router.route("/country/state")
    .post(stateController.create);

// Matches with "api/user/:userId/country/:countryId/state"
router.route("/:userId/country/:countryId/state")
    .get(stateController.findAll)

// Matches with "api/user/:userId/country/:countryId/state/:stateId"
router.route("/:userId/country/:countryId/state/:stateId")
    .get(stateController.findById)
    .put(stateController.update)
    .delete(stateController.remove);


// ***** City Routes *****
router.route("/country/state/city")
    .post(cityController.create);

// Matches with "api/user/:userId/country/:countryId/state/:stateId/city"
router.route("/:userId/country/:countryId/state/:stateId/city")
    .get(cityController.findAll)

// Matches with "api/user/:userId/country/:countryId/state/:stateId/city/:cityId"
router.route("/:userId/country/:countryId/state/:stateId/city/:cityId")
    .get(cityController.findById)
    .put(cityController.update)
    .delete(cityController.remove);


module.exports = router;