const router = require("express").Router();
const cityController = require("../../controllers/cityController");

  //  Matches with "/api/city"
  router.route("/")
    .post(cityController.create);

  // Matches with "api/city/byCountry/:countryId"  
  router.route("/byCountry/:countryId")
    .get(cityController.findAllByCountry);
  
  // Matches with "api/city/byState/:stateId"  
  router.route("/byState/:stateId")
    .get(cityController.findAllByState);

  // Matches with "api/city/:cityId"
  router.route("/:cityId")
    .get(cityController.findById)
    .put(cityController.update)
    .delete(cityController.remove);
    

module.exports = router;