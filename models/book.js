const { v4: uuidv4 } = require("uuid")
const fs = require("fs")
const path = require("path")


class Book{
    constructor(title, price, img){
        this.title = title,
        this.price = price,
        this.img = img,
        this.id = uuidv4()
    }

    toJSON(){
        return JSON.stringify({
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id,
        })
    }

    async save(){
        const books = await Book.getAll()
        books.push(this.toJSON())
        console.log("book", books);
        // do something with books here
    }

    static getAll(){
        return new Promise((resolve, reject)=>{
            fs.readFile(
                path.join(__dirname, "..", "data", "books.json"),
                "utf-8",
                (err, content) => {
                    if(err) {
                        reject(err)
                    }else{
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }
}

module.exports = Book