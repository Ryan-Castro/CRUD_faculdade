import AppoinmentRepository from "../repositories/AppointmentRepository"
import IAppointment from "../types/repositoriesType"

const getAllAppointments = async ()=>{
    return await AppoinmentRepository.getAllAppointments()
}

const getAppointment = async (id: string)=>{
    return await AppoinmentRepository.getAppointment(id)
}

const saveAppontment = async ({date, doctorId, pacientID}: IAppointment)=>{
    return await AppoinmentRepository.saveAppontment({date, doctorId, pacientID});
}

const updateAppointment = async (id: string, {date, doctorId, pacientID}: IAppointment)=>{
    return await AppoinmentRepository.updateAppointment(id, {date, doctorId, pacientID});
} 
const deleteAppointment = async (id: string)=>{
    return await AppoinmentRepository.deleteAppointment(id);
}

const appointmentService = {
    getAllAppointments,
    getAppointment,
    saveAppontment,
    updateAppointment,
    deleteAppointment
}

export default appointmentService