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
    email:{
        type: String, 
        require: [true, "Email is required"],
        unique: true,
    },
    phone:{
        type: String, 
        require: [true, "Phone is required"],
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

const pacient = mongoose.model("Pacient", pacientSchema);

export default pacient