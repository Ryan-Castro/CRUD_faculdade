import express from "express";
import PrescriptionService from "../services/PrescriptionServise";
import { IPrescription }  from "../types/repositoriesType";
import multer from 'multer'
import { Request } from 'express';
import process from "process";
import path from "path";

const router = express.Router()

const storage = multer.diskStorage({
    destination:(req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void)=>{
        cb(null, './src/prescriptions/')
    },
    filename:(req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void)=>{
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

router.post('/uploadPrescription/:id', upload.single('file'), async (req, res)=>{
    try {
        const { id } = req.params;
        let prescription = await PrescriptionService.getPrescription(id);
        
        const file = `./src/prescriptions/${req.file?.originalname}`
        prescription = await PrescriptionService.updatePrescription(id, {
            data: prescription!.data!, 
            appointmentID: prescription!.appointmentID!, 
            medicine: prescription!.medicine!, 
            dosage: prescription!.dosage!, 
            instruction: prescription!.instruction!,
            _id: prescription!._id,
            file: file
        })

        res.status(200).send(prescription)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/readPrescription/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const prescription = await PrescriptionService.getPrescription(id);
        const filePath = path.resolve(process.cwd()+"/../"+prescription!.file)
        res.status(200).sendFile(filePath)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

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

router.get('/generatePrescription/:id', async(req, res)=>{
    const {id} = req.params
    try {
        const prescription = await PrescriptionService.getPrescription(id);

        const generatePrescription = await PrescriptionService.generatePrescriptionFile({
            data: prescription!.data!, 
            appointmentID: prescription!.appointmentID!, 
            medicine: prescription!.medicine!, 
            dosage: prescription!.dosage!, 
            instruction: prescription!.instruction!,
            _id: prescription!._id
        });
        res.send(generatePrescription)    
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


export default router