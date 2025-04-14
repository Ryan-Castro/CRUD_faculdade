import mongoose from "mongoose";

const Schema = mongoose.Schema

const prescriptionSchema = new Schema({
    data:{
        type: Date, 
    },
    appointmentID:{
        type: String, 
        require: [true, "Appointment ID is required"]
    },
    medicine:{
        type: String, 
        require: [true, "Medicine is required"]
    },
    dosage:{
        type: String, 
        require: [true, "Dosage is required"]
    },
    instruction:{
        type: String, 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    file: {
        type: String
    }
})

const prescription = mongoose.model("Prescription", prescriptionSchema);

export default prescription