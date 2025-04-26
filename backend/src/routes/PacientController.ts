import express from "express";
import PacientService from "../services/PacientServise";
import { IPacient }  from "../types/repositoriesType";

const router = express.Router()

router.get('/getAll', async(req, res)=>{
    try {
        const Pacients = await PacientService.getAllPacients();
        res.send(Pacients)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/getPacient/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const Pacient = await PacientService.getPacient(id);
        res.send(Pacient)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post('/savePacient', async(req, res)=>{
    try {
        const {name, birthDate, email, phone}: IPacient = req.body
        const Pacient = await PacientService.savePacient({name, birthDate, email, phone});
        res.send(Pacient)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.put('/Pacients/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const {name, birthDate, email, phone}: IPacient = req.body
        const Pacient = await PacientService.updatePacient(id, {name, birthDate, email, phone});
        res.send(Pacient)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.delete('/Pacients/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const Pacient = await PacientService.deletePacient(id);
        res.send(Pacient)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


export default router