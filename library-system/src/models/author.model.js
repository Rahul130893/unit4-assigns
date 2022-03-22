const mongoose= require("mongoose")

const authorSchema= new mongoose.Schema({
    Authorname:{type:String, required:true},
  
},{
    versionKey: false,
    timestamps:true
})

module.exports= mongoose.model("author", authorSchema)