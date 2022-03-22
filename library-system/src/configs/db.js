const mongoose= require("mongoose")

const connect=()=>{
   return mongoose.connect("mongodb+srv://rahul12345:rahul12345@cluster0.xnru5.mongodb.net/library?retryWrites=true&w=majority")
} 

module.exports= connect