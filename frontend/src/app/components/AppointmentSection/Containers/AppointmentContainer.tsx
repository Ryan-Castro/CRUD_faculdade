import { useEffect, useRef, useState } from "react";
import AppointmentCard from "../Cards/AppointmentCard";
import { Doctor } from "@/app/@types/DoctorTypes";
import CreateAppointmentModal from "../Modais/CreateAppointmentModal";
import { Appointment } from "@/app/@types/AppointmentTypes";


export default function AppointmentContainer(props:{containerShow:number, Doctor: Doctor}) {

  const refContainer = useRef<HTMLDivElement>(null)
  const [ModalShow, settModalShow] = useState(0)
  const [appointments, settAppointments] = useState<Appointment[]>([])

  useEffect(()=>{
    if(props.containerShow == 1){
      refContainer.current?.classList.remove('hidden');
      refContainer.current?.classList.add('flex');
      return;
    };
    refContainer.current?.classList.remove('flex');
    refContainer.current?.classList.add('hidden');
  },[props])

  useEffect(()=>{
    async function getAppointment() {
      await fetch(`http://localhost:8080/pacient/getAll`, {
        method: "GET",
        credentials: 'include',
      }).then(res => res.json()).then(json => {
        settAppointments(json)
      })
    }
    getAppointment()
  },[])

  return (
    <div className="w-full h-full flex flex-col items-center pt-8 px-15" ref={refContainer}>
        <div className="w-full h-30 flex justify-between items-center">
            <input type="text" placeholder="nome do usuario" className="bg-white text-black pl-6 py-2 rounded-xl"/>
            <input type="date" name="" id="" className="bg-white text-black px-6 py-2 rounded-xl"/>
            <button className="bg-green-400 text-black px-6 py-2 rounded-xl">Pesquisar</button>
            <button className="bg-green-400 text-black px-6 py-2 rounded-xl" onClick={()=>{settModalShow(1)}}>Nova Consulta</button>
        </div>
        <div className="w-full bg-white overflow-auto rounded-xl">
          {appointments.map((appointment, key)=> <AppointmentCard key={key}/>)}
        </div>
        <CreateAppointmentModal Doctor={props.Doctor} handleModalShow={settModalShow} modalShow={ModalShow}/>
    </div>
  );
}
