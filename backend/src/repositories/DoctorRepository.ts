import Doctor from "../models/Doctor";
import { IDoctor } from "../types/repositoriesType";

const getAllDoctors = async ()=>{
    return await Doctor.find();
}

const getDoctor = async (id: string) =>{
    try {
        return await Doctor.findById(id);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const saveDoctor = async ({name, login, password, medicalSpreclty, medicalRegistration, email, phone}: IDoctor)=>{
    try {
        const doctor = new Doctor({name, login, password, medicalSpreclty, medicalRegistration, email, phone});
        return await doctor.save();
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const updateDoctor = async(id: string, {name, login, password, medicalSpreclty, medicalRegistration, email, phone}: IDoctor)=>{
    try {
        return await Doctor.findByIdAndUpdate(id, {name, login, password, medicalSpreclty, medicalRegistration, email, phone}, {new: true});
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const deleteDoctor = async(id: string)=>{
    try {
        return await Doctor.findByIdAndDelete(id);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const doctorRepository = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorRepository