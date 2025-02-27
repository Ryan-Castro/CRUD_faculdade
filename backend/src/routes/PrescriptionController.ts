import express from "express";
import PrescriptionService from "../services/PrescriptionServise";
import { IPrescription }  from "../types/repositoriesType";

const router = express.Router()

router.get('/Prescriptions', async(req, res)=>{
    try {
        const Prescriptions = await PrescriptionService.getAllPrescriptions();
        res.send(Prescriptions)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/getPrescription/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const Prescription = await PrescriptionService.getPrescription(id);
        res.send(Prescription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post('/savePrescription', async(req, res)=>{
    try {
        const {data, appointmentID, medicine, dosage, instruction}: IPrescription = req.body
        const Prescription = await PrescriptionService.savePrescription({data, appointmentID, medicine, dosage, instruction});
        res.send(Prescription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.put('/Prescriptions/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const {data, appointmentID, medicine, dosage, instruction}: IPrescription = req.body
        const Prescription = await PrescriptionService.updatePrescription(id, {data, appointmentID, medicine, dosage, instruction});
        res.send(Prescription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.delete('/Prescriptions/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const Prescription = await PrescriptionService.deletePrescription(id);
        res.send(Prescription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


export default router