const { Router } = require("express")
const router = Router()

router.get("/", (req, res) =>{
    res.render("books", {title: "Books", isBooks: true})
})

module.exports = router