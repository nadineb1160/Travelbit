const router = require("express").Router();
const countryController = require("../../controllers/countryController");


// Matches with "/api/country"
router.use(function(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(403).json({ error: 'No credentials sent!' });
    }
    next();
  }).route("/")
    .get(countryController.findAll)
    .post(countryController.create);

// Matches with "api/country/:id"
router.route("/:id")
    .get(countryController.findById)
    .put(countryController.update)
    .delete(countryController.remove);

module.exports = router;