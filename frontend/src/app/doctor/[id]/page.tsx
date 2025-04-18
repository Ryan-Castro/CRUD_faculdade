"use client"

import AppointmentContainer from "@/components/containers/AppointmentContainer";
import Image from "next/image";
import { use, useEffect } from "react";

export default function Doctor({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

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


  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="w-screen h-11/12 flex">
        <div className="w-1/6 h-screen bg-emerald-400 flex flex-col items-center text-black  pt-12 gap-4">
          <div className="w-40 h-40 rounded-full bg-black">
            <Image src="" alt=""></Image>
          </div>
          <ul className="w-full flex flex-col text-white gap-1">
            <li className="w-full bg-emerald-600 pl-4 py-4">Consultas</li>
            <li className="w-full bg-emerald-700 pl-4 py-4">Pacientes</li>
            <li className="w-full bg-emerald-700 pl-4 py-4">Minha conta</li>
          </ul>
        </div>
        <div className="w-5/6 h-screen bg-gray-400">
          <AppointmentContainer />
        </div>
      </div>
    </div>
  );
}
