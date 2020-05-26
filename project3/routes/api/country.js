const router = require("express").Router();
const countryController = require("../../controllers/countryController");

// Matches with "/api/country"
// router.use(function(req, res, next) {
//     if (!req.headers.authorization) {
//       return res.status(403).json({ error: 'No credentials sent!' });
//     }
//     next();
//   }).route("/")
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