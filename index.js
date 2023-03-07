const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const homeRoutes = require("./routes/home")
const booksRoutes = require("./routes/books")
const addRoutes = require("./routes/add")

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs",
})

app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "views")
app.use(express.urlencoded({extends: true}))
app.use(express.static("public"))

app.use("/" ,homeRoutes)
app.use("/books", booksRoutes)
app.use("/add", addRoutes)

const PORT = process.env.PORT || 3000

app.listen(3000, ()=>{
    console.log(`connect server ${PORT}`);
})