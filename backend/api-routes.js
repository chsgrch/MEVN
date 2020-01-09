// api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome!"
  });
});
// Import contact controller
var contactController = require("./controllers/contactController");
var jobsController = require("./controllers/jobsController");
var upload = require("./mail/upload");
var register = require("./login/registerUsersInBase");
var auth = require("./login/autentificateUser");
var deleteUser = require("./login/deleteUser");

// --- Contact routes ---
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("/contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

// --- Jobs router ---
router
  .route("/jobs")
  .get(jobsController.index)
  .post(jobsController.new);

router
  .route("/jobs/:job_id")
  .get(jobsController.view)
  .patch(jobsController.update)
  .put(jobsController.update)
  .delete(jobsController.delete);

// --- upload file ---
router.route("/upload").post(upload.save);

//register user
router.route("/register").post(register.registerUserInBase);

//Authentificate user
router.route("/auth").post(auth.autentificateUser);

router.route("/deleteuser").delete(deleteUser.delete);
// Export API routes
module.exports = router;
