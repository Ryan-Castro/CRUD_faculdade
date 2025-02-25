import express from "express";
import appointmentCrontroller from "./AppointmentController";
import doctorController from "./DoctorController";
import pacientController from "./PacientController";
import prescriptionController from "./PrescriptionController";
const router = express.Router()

router.get("/", (req, res)=>{
    console.log("hi!")
    res.status(200).json({message: "hi!"})
})

router.use('/', appointmentCrontroller);
router.use('/', doctorController);
router.use('/', pacientController);
router.use('/', prescriptionController);


export default router