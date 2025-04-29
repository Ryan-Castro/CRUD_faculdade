import { Appointment } from "@/app/@types/AppointmentTypes";
import { Doctor } from "@/app/@types/DoctorTypes";
import { Pacient } from "@/app/@types/PacientTypes";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import AppointmentCard from "../Cards/AppointmentCard";


export default function ApponitmentModal(props:{modalShow:number, handleModalShow: Dispatch<SetStateAction<number>>, Pacient:Pacient, Doctor:Doctor}) {

  const refModal = useRef<HTMLDivElement>(null)
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(()=>{
    if(props.modalShow == 2){
        refModal.current?.classList.remove('hidden');
        refModal.current?.classList.add('flex');
      return;
    };
    refModal.current?.classList.remove('flex');
    refModal.current?.classList.add('hidden');
    async function getAppontment(){
      await fetch(`http://localhost:8080/appontment/getAll`, {
        method: "GET",
        credentials: 'include',
      }).then(res => res.json()).then(json => {
        const Appointments: Appointment[] = []
        json.map((Appointment: Appointment) => {
          if(Appointment.doctorId == props.Doctor._id && Appointment.pacientId == props.Pacient._id){
            Appointments.push(Appointment)
          }
        })
        setAppointments(Appointments)
      })
    }
    getAppontment()
  },[props])

  return (
    <div className="modalContainer hidden" ref={refModal}>
        <div className="modalContent flex flex-col">
          <h1>Consultas</h1>
          <div>
            {
              appointments.map((appointment, key) => <AppointmentCard key={key} Appointment={appointment}/>)
            }
          </div>
        </div>
    </div>
  );
}
