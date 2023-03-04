const express = require("express")
const app = express()
const exphbs = require("express-handlebars")

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs",
})

app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "views")

app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.render("index", {title: "Main page", isHome: true})
})

app.get("/books", (req, res) =>{
    res.render("books", {title: "Books", isBooks: true})
})

app.get("/add", (req, res)=>{
    res.render("add", {title: "Add books", isAdd: true})
})

const PORT = process.env.PORT || 3000

app.listen(3000, ()=>{
    console.log(`connect server ${PORT}`);
})