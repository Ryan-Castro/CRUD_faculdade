import express from "express";
import DoctorService from "../services/DoctorServise";
import { IDoctor }  from "../types/repositoriesType";

const router = express.Router()

router.get('/doctors', async(req, res)=>{
    try {
        const doctors = await DoctorService.getAllDoctors();
        res.send(doctors)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/getdoctor/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const doctor = await DoctorService.getDoctor(id);
        res.send(doctor)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post('/savedoctor', async(req, res)=>{
    try {
        const {name, login, password, medicalSpreclty, medicalRegistration, email, phone}: IDoctor = req.body
        const doctor = await DoctorService.saveDoctor({name, login, password, medicalSpreclty, medicalRegistration, email, phone});
        res.send(doctor)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.put('/doctors/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const {name, login, password, medicalSpreclty, medicalRegistration, email, phone}: IDoctor = req.body
        const doctor = await DoctorService.updateDoctor(id, {name, login, password, medicalSpreclty, medicalRegistration, email, phone});
        res.send(doctor)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.delete('/doctors/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const doctor = await DoctorService.deleteDoctor(id);
        res.send(doctor)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


export default router