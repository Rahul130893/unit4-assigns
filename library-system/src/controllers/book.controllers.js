const express= require("express")

const Book = require("../models/book.model")

const router= express.Router()

router.post("", async(req, res)=>{
    try {
        const book = await Book.create(req.body)
        return res.status(200).send({book})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get("", async(req, res)=>{
    try {
        const book = await Book.find().populate("sectionId").lean().exec()
        return res.status(200).send({book})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get("/:id", async (req, res)=>{  
    try {
        const bookInSec= await Book.find({sectionId:req.params.id}).populate("sectionId").lean().exec()
        return res.send({bookInSec})
    } catch (error) {
        return res.status(500).send({message: error.message})

    }
})
 
module.exports= router  