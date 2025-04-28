import { Appointment } from "@/app/@types/AppointmentTypes";
import { Prescription } from "@/app/@types/PrescriptionTypes";
import { useEffect, useRef, useState } from "react";

export default function AppointmentCard(props:{Appointment:Appointment}) {

    const [prescription, setPrescription] = useState<Prescription>()
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(()=>{
        async function getAppontment(){
            await fetch(`http://localhost:8080/prescription/getAll`, {
                method: "GET",
                credentials: 'include',
            }).then(res => res.json()).then(json => {
                json.map((prescription: Prescription) => {
                if(prescription.appointmentID == props.Appointment._id){
                    buttonRef.current!.classList.add("bg-green-400");
                    buttonRef.current!.classList.remove("bg-zinc-400");
                    setPrescription(prescription)
                }
                })
            })
            }
            getAppontment()
    },[props])


    return (
      <div className="text-black bg-gray-500 mb-2 flex justify-between px-6 py-4">
        <h1>{props.Appointment.data}</h1>
        <button className="bg-zinc-400" ref={buttonRef}>Ver prescrição</button>
      </div>
    );
  }
  