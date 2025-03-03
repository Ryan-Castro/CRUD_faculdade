import express from "express";
import appointmentCrontroller from "./AppointmentController";
import doctorController from "./DoctorController";
import pacientController from "./PacientController";
import prescriptionController from "./PrescriptionController";
import DoctorService from "../services/DoctorServise";
import bcrypt from 'bcrypt';
import  Jwt  from "jsonwebtoken"; 
import verifyToken from "../middleware/authMiddleware";


const router = express.Router()

router.get("/", (req, res)=>{
    console.log("hi!")
    res.status(200).json({message: "hi!"})
})

router.post('/login', async (req, res)=>{
    try {
        const {login, password} = req.body;
        const doctor = await DoctorService.getDoctorByLogin(login);
        if(!doctor){
            res.status(401).json({error: 'Authentication failed!'});
        }
        const passwordMatch = await bcrypt.compare(password, doctor!.password!)
        if(!passwordMatch){
            res.status(401).json({error: 'Authentication failed!'});
        }

        const token = Jwt.sign({doctorID: doctor!._id}, 'you-secret-key', {
            expiresIn: '1h',
        })
        res.status(200).json({token})
    } catch (error) {
        console.log(error)
        res.status(500).json({'error': 'Login  failed!'})
    }
})

router.use('/', verifyToken, appointmentCrontroller);
router.use('/', verifyToken, doctorController);
router.use('/', verifyToken, pacientController);
router.use('/', verifyToken, prescriptionController);


export default router