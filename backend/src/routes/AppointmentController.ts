import express from "express";
import AppointmentService from "../services/AppointmentServise";
import { IAppointment }  from "../types/repositoriesType";

const router = express.Router()

router.get('/getAll', async(req, res)=>{
    try {
        const appontments = await AppointmentService.getAllAppointments();
        res.send(appontments)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/getAppontment:id', async(req, res)=>{
    try {
        const {id} = req.params
        const appontment = await AppointmentService.getAppointment(id);
        res.send(appontment)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post('/saveAppontment', async(req, res)=>{
    try {
        const {date, doctorId, pacientID}: IAppointment = req.body
        const appontment = await AppointmentService.saveAppontment({date, doctorId, pacientID});
        res.send(appontment)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.put('/updateAppontments/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const {date, doctorId, pacientID, accomplished}: IAppointment = req.body
        const appontment = await AppointmentService.updateAppointment(id, {date, doctorId, pacientID, accomplished});
        res.send(appontment)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.delete('/appontments/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const appontment = await AppointmentService.deleteAppointment(id);
        res.send(appontment)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


export default router