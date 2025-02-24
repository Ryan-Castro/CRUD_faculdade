import mongoose from "mongoose";

const Schema = mongoose.Schema

const appoinmentSchema = new Schema({
    data:{
        type: Date, 
        require: [true, "Appointment Date is required"]
    },
    doctorId:{
        type: String, 
        require: [true, "DoctorID is required"]
    },
    pacientId:{
        type: String, 
        require: [true, "PacientID is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const appointment = mongoose.model("Appointment", appoinmentSchema);

export default appointment