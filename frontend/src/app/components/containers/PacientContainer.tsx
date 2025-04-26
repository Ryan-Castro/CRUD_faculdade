import { useEffect, useRef, useState } from "react";
import PacientCard from "../Cards/PacientCard";
import NewUserModal from "../Modais/NewUserModal";
import { Pacient } from "@/app/@types/PacientTypes";


export default function PacientContainer(props:{containerShow:number}) {

  const refContainer = useRef<HTMLDivElement>(null)
  const [ModalShow, settModalShow] = useState(0)
  const [pacients, settPacients] = useState<Pacient[]>([])

  useEffect(()=>{
    if(props.containerShow == 2){
      refContainer.current?.classList.remove('hidden');
      refContainer.current?.classList.add('flex');
      return;
    };
    refContainer.current?.classList.remove('flex');
    refContainer.current?.classList.add('hidden');
  },[props])

  useEffect(()=>{
    async function getClient() {
      await fetch(`http://localhost:8080/pacient/getAll`, {
        method: "GET",
        credentials: 'include',
      }).then(res => res.json()).then(json => {
        console.log(json)
        settPacients(json)
      })
    }
    getClient()
  },[])


  return (
    <div className="w-full h-full flex-col items-center pt-8 px-15 hidden" ref={refContainer}>
        <div className="w-full h-30 flex justify-between items-center">
          <div>
            <input type="text" placeholder="nome do usuario" className="bg-white text-black pl-6 py-2 rounded-xl mr-5"/>
            <button className="bg-green-400 text-black px-6 py-2 rounded-xl">Pesquisar</button>
          </div>
            <button className="bg-green-400 text-black px-6 py-2 rounded-xl" onClick={()=>{settModalShow(1)}}>Criar Usuário</button>
        </div>
        <div className="w-full bg-white overflow-auto rounded-xl pt-2 shadow">
          {
            pacients.map((Pacint, key)=><PacientCard key={key} pacient={Pacint} handleModalShow={settModalShow}/>)
          }
        </div>
        <NewUserModal modalShow={ModalShow} handleModalShow={settModalShow}/>
    </div>
  );
}
