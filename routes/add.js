const { Router } = require("express")
const Books = require("../models/books")
const router = Router()

router.get("/", (req, res)=>{
    res.render("add", {title: "Add books", isAdd: true})
})

router.post("/", (req, res)=>{
    const books = new Books
    res.redirect("/books")
})

module.exports = router