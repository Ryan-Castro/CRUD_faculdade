import Appointment from "../models/Appointment";
import { IAppointment } from "../types/repositoriesType";

const getAllAppointments = async ()=>{
    return await Appointment.find();
}

const getAppointment = async (id: string) =>{
    try {
        return await Appointment.findById(id);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const saveAppontment = async ({date, doctorId, pacientID}: IAppointment)=>{
    try {
        const prescription = new Appointment({date, doctorId, pacientID});
        return await prescription.save();
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const updateAppointment = async(id: string, {date, doctorId, pacientID, accomplished}: IAppointment)=>{
    try {
        return await Appointment.findByIdAndUpdate(id, {date, doctorId, pacientID, accomplished}, {new: true});
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}


const deleteAppointment = async(id: string)=>{
    try {
        return await Appointment.findByIdAndDelete(id);
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Ocorreu um erro desconhecido.');
        }
    }
}

const appoinmentRepository = {
    getAllAppointments,
    getAppointment,
    saveAppontment,
    updateAppointment,
    deleteAppointment
}

export default appoinmentRepository