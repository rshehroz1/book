const { Router } = require("express");
const Book = require("../models/book");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", { title: "Add Book", isAdd: true });
});

router.post("/", async (req, res) => {
  const book = new Book(
    req.body.title,
    req.body.price,
    req.body.img,
    req.body.descr
  );
  await book.save();
  res.redirect("/books");
});

module.exports = router;