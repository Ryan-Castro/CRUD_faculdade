import PrescriptionRepository from "../repositories/PrescriptionRepository"
import AppointmentService from "./AppointmentServise"
import PacientService from "./PacientServise"
import doctorService from "./DoctorServise"
import { IPrescription } from "../types/repositoriesType"
import fs from 'fs'
import PDFDocument from 'pdfkit'


const getAllPrescriptions = async ()=>{
    return await PrescriptionRepository.getAllPrescriptions()
}

const getPrescription = async (id: string)=>{
    return await PrescriptionRepository.getPrescription(id)
}

const savePrescription = async ({data, appointmentID, medicine, dosage, instruction}: IPrescription)=>{
    return await PrescriptionRepository.savePrescription({data, appointmentID, medicine, dosage, instruction});
}

const updatePrescription = async (id: string, {data, appointmentID, medicine, dosage, instruction, file}: IPrescription)=>{
    return await PrescriptionRepository.updatePrescription(id, {data, appointmentID, medicine, dosage, instruction, file});
} 
const deletePrescription = async (id: string)=>{
    return await PrescriptionRepository.deletePrescription(id);
}

const generatePrescriptionFile = async({data, appointmentID, medicine, dosage, instruction, _id}: IPrescription)=>{
    const appointment = await AppointmentService.getAppointment(appointmentID);
    const pacient = await PacientService.getPacient(appointment!.pacientId!);
    const doctor = await doctorService.getDoctor(appointment!.doctorId!)

    const id = _id
    const document = new PDFDocument({font: "Courier"})
    const filePath = `./src/prescriptions/${id}/.pdf`;

    document.pipe(fs.createWriteStream(filePath));
    document.fontSize(16).text(`Pacient Name: ${pacient?.name}`);
    document.fontSize(16).text(`Doctor Name: ${doctor?.name}`);
    document.fontSize(12).text(`Medicine: ${medicine}`);
    document.fontSize(12).text(`data: ${data}`);
    document.fontSize(12).text(`dosage: ${dosage}`);
    document.fontSize(12).text(`instruction: ${instruction}`);

    document.end()

    return {data, appointmentID, medicine, dosage, instruction, _id}
    
}

const PrescriptionService = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription,
    generatePrescriptionFile
}

export default PrescriptionService