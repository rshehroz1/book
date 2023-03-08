const { Router } = require("express")
const router = Router()

router.get("/", (req, res)=>{
    res.render("add", {title: "Add books", isAdd: true})
})

router.post("/", (req, res)=>{
    res.redirect("/books")
})

module.exports = router