import express from "express";



const router = express.Router()

router.get("/", (req, res)=>{
    console.log("hi!")
    res.status(200).json({message: "hi!"})
})

export default router