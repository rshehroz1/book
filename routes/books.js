const { Router } = require("express")
const Book = require("../models/book")
const router = Router()

router.get("/", async (req, res) =>{
    const books = await Book.getAll()
    res.render("books", {title: "Books", isBooks: true, books})
})

module.exports = router