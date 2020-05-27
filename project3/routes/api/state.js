const router = require("express").Router();
const stateController = require("../../controllers/stateController");

// Matches with "/api/state"
router.route("/")
    .post(stateController.create);

// Matches with "/api/state/byCountry/:countryId"
router.route("/byCountry/:countryId")
    .get(stateController.findAll)

// Matches with "api/state/:stateId"
router.route("/:stateId")
    .get(stateController.findById)
    .put(stateController.update)
    .delete(stateController.remove);

module.exports = router;