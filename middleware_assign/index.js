const express = require("express")

const app= express()

app.get("/books", allBooks("middle"), (req, res)=>{
    return res.send("Fetching All books")
})

app.get("/books/:name", singleBook("middle2"), (req, res)=>{
    return res.send({bookName:req.name})
})


function allBooks(){
    return function middle(req, res,next){
         console.log("Fetching All books")
          next()
    }
    
}
function singleBook(middle2){
    return function middle2(req, res, next){    
         req.name=req.params.name
         next()
    }
  
}

app.listen(5500, (req, res)=>{
    console.log("listening at 5500")
})