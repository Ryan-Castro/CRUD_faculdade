import { Appointment } from "@/app/@types/AppointmentTypes";
import { Pacient } from "@/app/@types/PacientTypes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


export default function AppointmentCard(props:{Appointment: Appointment, handleModalShow: Dispatch<SetStateAction<number>>, handleAppointment: Dispatch<SetStateAction<Appointment>>}) {


  const [pacient, setPacient] = useState<Pacient>()
  function setAppointments(modal:number){
    props.handleAppointment(props.Appointment)
    props.handleModalShow(modal)
  }

  useEffect(()=>{
    async function getPacient() {
      await fetch(`http://localhost:8080/pacient/get/${props.Appointment.pacientId}`, {
        method: "GET",
        credentials: 'include',
      }).then(res => res.json()).then(json => {
        setPacient(json)
      })
    }
    getPacient()
  },[props])


    return (
      <div className="text-black bg-gray-500 mb-2 flex justify-between px-6 py-4">
          <div>
            <h1>{pacient?.name}<span> {pacient?.phone}</span></h1>
            <p>{props.Appointment.data}</p>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-green-400 rounded-2xl px-4 p-1" onClick={()=>{setAppointments(4)}}>Adicionar Prescrição</button>
            <button className="bg-green-400 rounded-2xl px-4 p-1" onClick={()=>{setAppointments(3)}}>Finalizar</button>
            <button className="bg-yellow-400 rounded-2xl px-4 p-1" onClick={()=>{setAppointments(1)}}>Remarcar</button>
            <button className="bg-red-400 rounded-2xl px-4 p-1" onClick={()=>{setAppointments(2)}}>Apagar</button>
          </div>
      </div>
    );
  }
  