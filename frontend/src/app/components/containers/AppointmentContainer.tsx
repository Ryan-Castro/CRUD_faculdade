import { useEffect, useRef } from "react";
import AppointmentCard from "../Cards/AppointmentCard";


export default function AppointmentContainer(props:{containerShow:number}) {

  const refContainer = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(props.containerShow == 1){
      refContainer.current?.classList.remove('hidden');
      refContainer.current?.classList.add('flex');
      return;
    };
    refContainer.current?.classList.remove('flex');
    refContainer.current?.classList.add('hidden');
  },[props])

  return (
    <div className="w-full h-full flex flex-col items-center pt-8 px-15" ref={refContainer}>
        <div className="w-full h-30 flex justify-between items-center">
            <input type="text" placeholder="nome do usuario" className="bg-white text-black pl-6 py-2 rounded-xl"/>
            <input type="date" name="" id="" className="bg-white text-black px-6 py-2 rounded-xl"/>
            <button className="bg-green-400 text-black px-6 py-2 rounded-xl">Pesquisar</button>
        </div>
        <div className="w-full bg-white overflow-auto rounded-xl">
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
        </div>
    </div>
  );
}
