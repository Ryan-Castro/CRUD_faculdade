import { Pacient } from "@/app/@types/PacientTypes";
import { Dispatch, SetStateAction } from "react";


export default function PacientCard(props:{pacient: Pacient, handleModalShow: Dispatch<SetStateAction<number>>, handlePacient: Dispatch<SetStateAction<Pacient>>}) {

    function setPacient(modal:number){
      props.handlePacient(props.pacient)
      props.handleModalShow(modal)
    }

    return (
      <div className="text-black bg-gray-400 mb-2 flex justify-between px-6 py-4">
          <div>
            <h1>{props.pacient.name} <span> {props.pacient.phone}</span></h1>
            <p>{props.pacient.email}</p>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-green-400 rounded-2xl px-4 p-1" onClick={()=>{props.handleModalShow(2)}}>Consultas</button>
            <button className="bg-yellow-400 rounded-2xl px-4 p-1" onClick={()=>{setPacient(1)}}>Editar</button>
            <button className="bg-red-400 rounded-2xl px-4 p-1" onClick={()=>{setPacient(3)}}>Apagar</button>
          </div>
      </div>
    );
  }
  