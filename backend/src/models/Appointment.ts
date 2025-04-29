import mongoose from "mongoose";
import Doctor from "./Doctor";
import Pacient from "./Pacient";

const Schema = mongoose.Schema

const appoinmentSchema = new Schema({
    data:{
        type: Date, 
        require: [true, "Appointment Date is required"]
    },
    doctorId:{
        type: String, 
        require: [true, "DoctorID is required"],
        validate: {
            validator: (v:string)=>{
                const id = new mongoose.Types.ObjectId(v);
                return Doctor.exists({_id: id})
            },
            message: (props: {value:string}) =>
                `DoctorID ${props.value} not found.`
        }
        
    },
    pacientId:{
        type: String, 
        require: [true, "PacientID is required"],
        validate: {
            validator: (v:string)=>{
                const id = new mongoose.Types.ObjectId(v);
                return Pacient.exists({_id: id})
            },
            message: (props: {value:string}) =>
                `PacientID ${props.value} not found.`
        }
    },
    accomplished:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const appointment = mongoose.model("Appointment", appoinmentSchema);

export default appointment