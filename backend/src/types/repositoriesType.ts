interface IAppointment {
    date: string, 
    doctorId: string, 
    pacientID: string
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
    emal: string
    phone: string
}

interface IPrescription {
    data: Date,
    appointmentID: number,
    medicine: string,
    dosage: string,
    instruction: string,
}

export {IAppointment, IDoctor, IPacient, IPrescription}