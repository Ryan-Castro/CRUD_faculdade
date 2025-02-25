import mongoose from "mongoose";

const Schema = mongoose.Schema

const pacientSchema = new Schema({
    name:{
        type: String, 
        require: [true, "Pacient Name is required"]
    },
    birthDate:{
        type: Date, 
        require: [true, "Birth Date is required"]
    },
    emal:{
        type: String, 
        require: [true, "Email is required"],
        unique: true,
    },
    phone:{
        type: String, 
        require: [true, "Phone is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const pacient = mongoose.model("Appointment", pacientSchema);

export default pacient