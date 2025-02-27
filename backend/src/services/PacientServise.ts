import PacientRepository from "../repositories/PacientRepository"
import { IPacient } from "../types/repositoriesType"

const getAllPacients = async ()=>{
    return await PacientRepository.getAllPacients()
}

const getPacient = async (id: string)=>{
    return await PacientRepository.getPacient(id)
}

const savePacient = async ({name, birthDate, emal, phone}: IPacient)=>{
    return await PacientRepository.savePacient({name, birthDate, emal, phone});
}

const updatePacient = async (id: string, {name, birthDate, emal, phone}: IPacient)=>{
    return await PacientRepository.updatePacient(id, {name, birthDate, emal, phone});
} 
const deletePacient = async (id: string)=>{
    return await PacientRepository.deletePacient(id);
}

const PacientService = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default PacientService