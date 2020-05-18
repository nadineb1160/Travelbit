const router = require("express").Router();
const countryController = require("../../controllers/countryController");

// Matcher with "/api/country"
router.route("/")
    .get(countryController.findAll)
    .post(countryController.create);

// Matches with "api/country/:id"
router.route("/:id")
    .get(countryController.findById)
    .put(countryController.update)
    .delete(countryController.remove);

module.exports = router;