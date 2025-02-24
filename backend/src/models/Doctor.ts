import mongoose from "mongoose";

const Schema = mongoose.Schema

const doctorSchema = new Schema({
    doctorId:{
        type: String, 
        require: [true, "DoctorID is required"]
    },
    name:{
        type: String, 
        require: [true, "Doctor name is required"]
    },
    login:{
        type: String, 
        require: [true, "Login is required"],
        unique: true,
    },
    password:{
        type: String, 
        require: [true, "Password is required"]
    },
    medicalSpreclty:{
        type: String, 
        require: [true, "Medical Spreclty is required"]
    },
    medicalRegistration:{
        type: String, 
        require: [true, "Medical Registration is required"],
        unique: true
    },  
    email:{
        type: String, 
        require: [true, "E-mail contact is required"]
    }, 
    phone:{
        type: String, 
        require: [true, "Phone number is required"]
    },   
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const doctor = mongoose.model("Doctor", doctorSchema);

export default doctor