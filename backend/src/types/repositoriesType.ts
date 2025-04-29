import { Types } from "mongoose";

interface IAppointment {
    date: string, 
    doctorId: string, 
    pacientID: string,
    accomplished?: boolean
}

interface IDoctor {
    name: string,
    login: string
    password: string,
    medicalSpreclty: string,
    medicalRegistration: string,
    email: string,
    phone: string
}

interface IPacient {
    name: string
    birthDate: Date
    email: string
    phone: string
}

interface IPrescription {
    data?: Date,
    appointmentID: string,
    medicine: string,
    dosage: string,
    instruction: string,
    _id?: Types.ObjectId,
    file?: string
}

export {IAppointment, IDoctor, IPacient, IPrescription}