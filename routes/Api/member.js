const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router
  .route("/")
  .get(memberController.findAll)
  .post(memberController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(memberController.findById)
  .put(memberController.update)
  .delete(memberController.remove);
