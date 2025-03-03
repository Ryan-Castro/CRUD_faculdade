import mongoose from "mongoose";

const Schema = mongoose.Schema

const doctorSchema = new Schema({
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
        require: [true, "Phone number is required"],
        validate: {
            validator: (v: string)=>{
                return /\d{2} 9\d{4}-\d{4}/.test(v)
            },
            message: (props: {value:string})=>
                `${props.value} this is not a valid phone value. Please use the following format 99 91234-5678`
        }
    },   
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const doctor = mongoose.model("Doctor", doctorSchema);

export default doctor