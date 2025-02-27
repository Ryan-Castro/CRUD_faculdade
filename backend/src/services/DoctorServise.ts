import DoctorRepository from "../repositories/DoctorRepository"
import { IDoctor } from "../types/repositoriesType"

const getAllDoctors = async ()=>{
    return await DoctorRepository.getAllDoctors()
}

const getDoctor = async (id: string)=>{
    return await DoctorRepository.getDoctor(id)
}

const saveDoctor = async ({name, login, password, medicalSpreclty, medicalRegistration, email, phone}: IDoctor)=>{
    return await DoctorRepository.saveDoctor({name, login, password, medicalSpreclty, medicalRegistration, email, phone});
}

const updateDoctor = async (id: string, {name, login, password, medicalSpreclty, medicalRegistration, email, phone}: IDoctor)=>{
    return await DoctorRepository.updateDoctor(id, {name, login, password, medicalSpreclty, medicalRegistration, email, phone});
} 
const deleteDoctor = async (id: string)=>{
    return await DoctorRepository.deleteDoctor(id);
}

const doctorService = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorService