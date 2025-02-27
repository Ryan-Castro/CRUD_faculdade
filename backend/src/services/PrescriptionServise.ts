import PrescriptionRepository from "../repositories/PrescriptionRepository"
import { IPrescription } from "../types/repositoriesType"

const getAllPrescriptions = async ()=>{
    return await PrescriptionRepository.getAllPrescriptions()
}

const getPrescription = async (id: string)=>{
    return await PrescriptionRepository.getPrescription(id)
}

const savePrescription = async ({data, appointmentID, medicine, dosage, instruction}: IPrescription)=>{
    return await PrescriptionRepository.savePrescription({data, appointmentID, medicine, dosage, instruction});
}

const updatePrescription = async (id: string, {data, appointmentID, medicine, dosage, instruction}: IPrescription)=>{
    return await PrescriptionRepository.updatePrescription(id, {data, appointmentID, medicine, dosage, instruction});
} 
const deletePrescription = async (id: string)=>{
    return await PrescriptionRepository.deletePrescription(id);
}

const PrescriptionService = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default PrescriptionService