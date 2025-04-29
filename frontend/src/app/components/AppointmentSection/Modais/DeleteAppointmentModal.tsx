import { Appointment } from "@/app/@types/AppointmentTypes";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";


export default function DeletePacientModal(props:{modalShow:number, handleModalShow: Dispatch<SetStateAction<number>>, Appointment:Appointment}) {

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

  async function DeletePacient(){
    await fetch(`http://localhost:8080/Appointment/delete/${props.Appointment._id}`, {
      method: "DELETE",
      credentials: 'include',
    }).then(res => res.json()).then(() => {
      props.handleModalShow(0)
      return
    })
  }
  return (
    <div className="modalContainer hidden" ref={refModal}>
        <div className="modalContent flex flex-col">
            <h2>Deseja deletar a consulta do dia {props.Appointment.data}</h2>
            <input type="button" className="bg-yellow-500" value="Deletar" onClick={DeletePacient}/>
            <input type="button" className="bg-red-500" value="Cancelar" onClick={()=>{props.handleModalShow(0)}}/>
        </div>
    </div>
  );
}
