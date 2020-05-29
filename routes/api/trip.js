const router = require("express").Router();
const tripController = require("../../controllers/tripController");

  // Matches with "/api/trip"
  router.route("/")
    .post(tripController.create);

  // Matches with "api/trip/byCity/:cityId"  
  router.route("/byCity/:cityId")
  .get(tripController.findAll)
  

  // Matches with "api/trip/:tripId"
  router.route("/:tripId")
  .get(tripController.findById)
  .put(tripController.update)
  .delete(tripController.remove);
  

module.exports = router;