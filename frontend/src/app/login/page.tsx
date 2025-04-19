"use client"

import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function LogIn() {

  const router = useRouter();
  const InputUsername = useRef<HTMLInputElement>(null) 
  const Inputpassword = useRef<HTMLInputElement>(null) 

  async function login(){

    const formData = {
      login: InputUsername.current?.value,
      password: Inputpassword.current?.value
    }
    try { 
      await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
      },
        body: JSON.stringify(formData)
        }).then(res=>res.json()).then(json=>{
          router.push(`/doctor/${json.id}`);
        })
      } catch (error) {
       console.log(error) 
      }
  }

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="w-screen h-11/12 flex">
        <div className="w-4/6 h-screen"></div>
        <div className="w-2/6 h-screen bg-white flex flex-col text-black p-12 pt-60 gap-4">
          <h1 className="text-3xl">Faça seu login</h1>
          <input type="text" className="border border-gray-400 pl-3 py-2" placeholder="Usuario" ref={InputUsername}/>
          <input type="password" className="border border-gray-400 pl-3 py-2" placeholder="Senha" ref={Inputpassword}/>
          <input type="button" value="Login" className="bg-green-600 text-white pl-3 py-2 rounded-xl text-3xl" onClick={login}/>
        </div>
      </div>
    </div>
  );
}
