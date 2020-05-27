const router = require("express").Router();
const countryController = require("../../controllers/countryController");

// Matches with "/api/country"
router.route("/")
    .post(countryController.create);

// Matches with "/api/country/byUser/:userId"
router.route("/byUser/:userId")
    .get(countryController.findAll)

// Matches with "api/country/:countryId"
router.route("/:countryId")
    .get(countryController.findById)
    .put(countryController.update)
    .delete(countryController.remove);

module.exports = router;