const express= require("express")

const connect= require("./configs/db")

const app= express()

app.use(express.json())


const sectionController= require("./controllers/section.controllers")
const bookController= require("./controllers/book.controllers")
const authorController= require("./controllers/author.controllers")
const bookauthorController= require("./controllers/book_author.controllers")


app.use("/section", sectionController)

app.use("/book", bookController)

app.use("/author", authorController)

app.use("/bookauthor", bookauthorController)

 app.use("/bookByAuthor", bookauthorController )
 

 app.use("/bookInSection", bookController)

 app.listen(5000, async(req, res)=>{
     try {
         await connect()
         console.log("listening at 5000")
         
     } catch (error) {
         console.log(error)
     }
 })