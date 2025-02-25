import appointment from "../models/Appointment";
import Appointment from "../models/Appointment"
import IAppointment from "../types/repositoriesType"

const getAllAppointments = async ()=>{
    return await Appointment.find();
}

const getAppointment = async (id: string) =>{
    try {
        return await Appointment.findById(id);
    } catch (error:any) {
        throw new Error(error)
    }
}

const saveAppontment = async ({date, doctorId, pacientID}: IAppointment)=>{
    try {
        const prescription = new Appointment({date, doctorId, pacientID});
        return await prescription.save();
    } catch (error:any) {
        throw new Error(error)
    }
}

const updateAppointment = async(id: string, {date, doctorId, pacientID}: IAppointment)=>{
    try {
        return await appointment.findByIdAndUpdate(id, {date, doctorId, pacientID}, {new: true});
    } catch (error:any) {
        throw new Error(error)
    }
}

const deleteAppointment = async(id: string)=>{
    try {
        return await appointment.findByIdAndDelete(id);
    } catch (error:any) {
        throw new Error(error)
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