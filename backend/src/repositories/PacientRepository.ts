import Pacient from "../models/Pacient";
import { IPacient } from "../types/repositoriesType";

const getAllPacients = async ()=>{
    return await Pacient.find();
}

const getPacient = async (id: string) =>{
    try {
        return await Pacient.findById(id);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const savePacient = async ({name,birthDate,email,phone}: IPacient)=>{
    try {
        const pacient = new Pacient({name, birthDate, email, phone});
        return await pacient.save();
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const updatePacient = async(id: string, {name, birthDate, email, phone}: IPacient)=>{
    try {
        return await Pacient.findByIdAndUpdate(id, {name, birthDate, email, phone}, {new: true});
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const deletePacient = async(id: string)=>{
    try {
        return await Pacient.findByIdAndDelete(id);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const PacientRepository = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default PacientRepository