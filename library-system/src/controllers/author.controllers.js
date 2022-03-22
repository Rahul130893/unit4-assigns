const express= require("express")

const Author = require("../models/author.model")

const router= express.Router()

router.post("", async(req, res)=>{
    try {
        const author = await Author.create(req.body)
        return res.status(200).send({author})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})


router.get("", async(req, res)=>{
    try {
        const author = await Author.find().lean().exec()
        return res.status(200).send({author})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})
 
module.exports= router