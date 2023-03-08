const uuid = require("uuid/dist/v4")
const fs = require("fs")
const path = require("path")
const { resolve } = require("path")

class Book{
    constructor(title, price, img){
        this.title = title,
        this.price = price,
        this.img = img,
        this.id = uuid()
    }

    async save(){
        const books = await Book.getAll()
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