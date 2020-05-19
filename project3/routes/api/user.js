const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matcher with "/api/user"
router.route("/")
    // .get(userController.findAll)
    .post(userController.create);

// Matches with "api/user/:id"
router.route("/:id")
    .get(userController.findById)
    .put(userController.update)

module.exports = router;