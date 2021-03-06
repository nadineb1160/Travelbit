const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
    .get(userController.findAll)
    .post(userController.create)

// Matches with "api/user/:userId"
router.route("/:userId")
    // .get(userController.findById)
    .put(userController.update)

// Matches with "api/user/:uid"
router.route("/:uid")
    .get(userController.findByUid)

module.exports = router;