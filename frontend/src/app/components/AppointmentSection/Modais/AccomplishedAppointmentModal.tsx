import { Appointment } from "@/app/@types/AppointmentTypes";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";


export default function AccomplishedAppointmentModal(props:{modalShow:number, handleModalShow: Dispatch<SetStateAction<number>>, Appointment:Appointment}) {

  const refModal = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(props.modalShow == 3){
        refModal.current?.classList.remove('hidden');
        refModal.current?.classList.add('flex');
      return;
    };
    refModal.current?.classList.remove('flex');
    refModal.current?.classList.add('hidden');
  },[props])

  async function AccomplishedAppointment(){
    const formData: Appointment = {
        _id: props.Appointment._id,
        data: props.Appointment.data,
        doctorId: props.Appointment.doctorId,
        pacientId: props.Appointment.pacientId,
        accomplished: true
    }
    await fetch(`http://localhost:8080/appointment/update/${props.Appointment._id}`, {
        method: "PUT",
        credentials: 'include',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(formData)
    }).then(res => res.json()).then(() => {
        props.handleModalShow(0)
        return
    })
  }
  return (
    <div className="modalContainer hidden" ref={refModal}>
        <div className="modalContent flex flex-col">
            <h2>Deseja Finalizar a consulta do dia {props.Appointment.data}</h2>
            <input type="button" className="bg-yellow-500" value="Deletar" onClick={AccomplishedAppointment}/>
            <input type="button" className="bg-red-500" value="Cancelar" onClick={()=>{props.handleModalShow(0)}}/>
        </div>
    </div>
  );
}
