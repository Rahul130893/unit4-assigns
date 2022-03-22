const express= require("express")

const BookAuthor = require("../models/book_author.model")

const router= express.Router()

router.post("", async(req, res)=>{
    try {
        const bookauthor = await BookAuthor.create(req.body)
        return res.status(200).send({bookauthor})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get("", async(req, res)=>{
    try {
        const bookauthor = await BookAuthor.find().populate("authorId").populate("bookId").lean().exec()
        return res.status(200).send({bookauthor})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get("/:id", async (req, res)=>{  
    try {
        const bookbyauth= await BookAuthor.find({authorId:req.params.id}).populate("bookId").lean().exec()
        return res.send({bookbyauth})
    } catch (error) {
        return res.status(500).send({message: error.message})

    }
})
 
module.exports= router  