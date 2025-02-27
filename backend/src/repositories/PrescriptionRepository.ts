import Prescription from "../models/Prescription";
import { IPrescription } from "../types/repositoriesType";

const getAllPrescriptions = async ()=>{
    return await Prescription.find();
}

const getPrescription = async (id: string) =>{
    try {
        return await Prescription.findById(id);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const savePrescription = async ({data, appointmentID, medicine, dosage, instruction}: IPrescription)=>{
    try {
        const prescription = new Prescription({data, appointmentID, medicine, dosage, instruction});
        return await prescription.save();
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const updatePrescription = async(id: string, {data, appointmentID, medicine, dosage, instruction}: IPrescription)=>{
    try {
        return await Prescription.findByIdAndUpdate(id, {data, appointmentID, medicine, dosage, instruction}, {new: true});
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const deletePrescription = async(id: string)=>{
    try {
        return await Prescription.findByIdAndDelete(id);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const PrescriptionRepository = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default PrescriptionRepository