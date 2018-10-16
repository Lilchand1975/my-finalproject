const router = require("express").Router();
const bookRoutes = require("./member");

// Book routes
router.use("/member", memberRoutes);

module.exports = router;
