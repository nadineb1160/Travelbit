const router = require("express").Router();
const cityController = require("../../controllers/cityController");

 // Matches with "/api/user/:userId/country/:countryId/city"
 router.use(function(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(403).json({ error: 'No credentials sent!' });
    }
    next();
  }).route("/:countryId/city")
    .get(cityController.findAll)
    .post(cityController.create);

// Matches with "api/user/:userId/country/:countryId/city/:cityId"
router.route("/:countryId/city/:cityId")
    .get(cityController.findById)
    .put(cityController.update)
    .delete(cityController.remove);


module.exports = router;