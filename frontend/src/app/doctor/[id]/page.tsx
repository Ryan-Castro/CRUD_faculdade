"use client"

import AppointmentContainer from "@/app/components/containers/AppointmentContainer";
import PacientContainer from "@/app/components/containers/PacientContainer";
import ProfileContainer from "@/app/components/containers/ProfileContainer";
import { use, useEffect, useRef, useState } from "react";

export default function Doctor({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const [containerShow, setContainerShow] = useState(1)
  const navbarRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    async function searchData() {
      await fetch(`http://localhost:8080/doctor/getdoctor/${id}`, {
        method: "get",
        credentials: 'include'
      }).then(res => res.json()).then(json => {
        console.log(json)
      })
    }
    if (id) {
      searchData()
    }
  }, [id])

  function setNavItem(navItem:number){
    for(const item of navbarRef.current!.children){
      item.classList.remove("bg-emerald-600")
      item.classList.add("bg-emerald-700")
    }
    navbarRef.current?.children[navItem].classList.remove("bg-emerald-700")
    navbarRef.current?.children[navItem].classList.add("bg-emerald-600")
  }

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="w-screen h-11/12 flex">
        <div className="w-1/6 h-screen bg-emerald-400 flex flex-col items-center text-black  pt-12 gap-4">
          <div className="w-40 h-40 rounded-full bg-black">
          </div>
          <ul className="w-full flex flex-col text-white gap-1" ref={navbarRef}>
            <li className="w-full bg-emerald-600 pl-4 py-4" onClick={()=>{setContainerShow(1); setNavItem(0)}}>Consultas</li>
            <li className="w-full bg-emerald-700 pl-4 py-4" onClick={()=>{setContainerShow(2); setNavItem(1)}}>Pacientes</li>
            <li className="w-full bg-emerald-700 pl-4 py-4" onClick={()=>{setContainerShow(3); setNavItem(2)}}>Minha conta</li>
          </ul>
        </div>
        <div className="w-5/6 h-screen bg-gray-400">
          <AppointmentContainer containerShow={containerShow}/>
          <PacientContainer containerShow={containerShow}/>
          <ProfileContainer containerShow={containerShow}/>
        </div>
      </div>
    </div>
  );
}
