const express= require("express")

const Section = require("../models/section.model")

const router= express.Router()

router.post("", async(req, res)=>{
    try {
        const section = await Section.create(req.body)
        return res.status(200).send({section})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})


router.get("", async(req, res)=>{
    try {
        const section = await Section.find().lean().exec()
        return res.status(200).send({section})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})
 
module.exports= router