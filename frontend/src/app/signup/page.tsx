"use client"

import { useRef } from "react";

export default function SingUp() {

  const InputName = useRef<HTMLInputElement>(null)
  const InputLogn = useRef<HTMLInputElement>(null)
  const InputPassword = useRef<HTMLInputElement>(null)
  const InputMedicalSpreclty = useRef<HTMLInputElement>(null)
  const InputMedicalRegistration = useRef<HTMLInputElement>(null)
  const InputEmail = useRef<HTMLInputElement>(null)
  const InputPhone = useRef<HTMLInputElement>(null)

  const formData = {
    name: InputName.current?.value,
    login: InputLogn.current?.value,
    password: InputPassword.current?.value,
    medicalSpreclty: InputMedicalSpreclty.current?.value,
    medicalRegistration: InputMedicalRegistration.current?.value,
    email: InputEmail.current?.value,
    phone: InputPhone.current?.value
  }

  async function SingUp() {
    try {
      await fetch("http://localhost:8080/savedoctor", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'login'
        },
        body: JSON.stringify(formData)
      }).then(res => res.json()).then(json => {
        console.log(json)
      })
    } catch (error) {
      console.log(error)
    }
  }

  //{name, login, password, medicalSpreclty, medicalRegistration, email, phone}
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="w-screen h-11/12 flex">
        <div className="w-4/6 h-screen"></div>
        <div className="w-2/6 h-screen bg-white flex flex-col text-black p-12 pt-60 gap-4">
          <h1 className="text-3xl">Faça seu login</h1>
          <input type="text" className="border border-gray-400 pl-3 py-2" placeholder="Nome" ref={InputName} />
          <input type="text" className="border border-gray-400 pl-3 py-2" placeholder="Login" ref={InputLogn} />
          <input type="password" className="border border-gray-400 pl-3 py-2" placeholder="Senha" ref={InputPassword} />
          <input type="text" className="border border-gray-400 pl-3 py-2" placeholder="Área de atiação" ref={InputMedicalSpreclty} />
          <input type="text" className="border border-gray-400 pl-3 py-2" placeholder="Registro medico" ref={InputMedicalRegistration} />
          <input type="text" className="border border-gray-400 pl-3 py-2" placeholder="email" ref={InputEmail} />
          <input type="text" className="border border-gray-400 pl-3 py-2" placeholder="Telefone" ref={InputPhone} />

          <input type="button" value="Login" className="bg-green-600 text-white pl-3 py-2 rounded-xl text-3xl" onClick={SingUp} />
        </div>
      </div>
    </div>
  );
}
