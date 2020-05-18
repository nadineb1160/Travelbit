const router = require("express").Router();
const cityController = require("../../controllers/cityController");

// Matcher with "/api/city"
router.route("/")
    .get(cityController.findAll)
    .post(cityController.create);

// Matches with "api/city/:id"
router.route("/:id")
    .get(cityController.findById)
    .put(cityController.update)
    .delete(cityController.remove);

module.exports = router;