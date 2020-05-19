const router = require("express").Router();
const cityController = require("../../controllers/cityController");

 // Matches with "/api/country/:id/city"
 router.use(function(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(403).json({ error: 'No credentials sent!' });
    }
    next();
  }).route("/:id/city")
    .get(cityController.findAll)
    .post(cityController.create);

// Matches with "api/country/:id/city/:id"
router.route("/:id/city/:id")
    .get(cityController.findById)
    .put(cityController.update)
    .delete(cityController.remove);


module.exports = router;