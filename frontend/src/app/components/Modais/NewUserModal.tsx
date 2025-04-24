import { Dispatch, SetStateAction, useEffect, useRef } from "react";


export default function NewUserModal(props:{modalShow:number, handleModalShow: Dispatch<SetStateAction<number>>}) {

  const refModal = useRef<HTMLDivElement>(null)
  const nameInput = useRef<HTMLInputElement>(null)
  const dateInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(props.modalShow == 1){
        refModal.current?.classList.remove('hidden');
        refModal.current?.classList.add('flex');
      return;
    };
    refModal.current?.classList.remove('flex');
    refModal.current?.classList.add('hidden');
  },[props])

  async function createNewUser(){
    const name = nameInput.current!.value;
    const birthDate = dateInput.current!.value;
    const email = emailInput.current!.value;
    const phone = phoneInput.current!.value;
    if(name == "" || birthDate == "" || email == "" || phone == ""){
        //criar mensagem de erro
        return
    }
    const formData = {
        name, 
        birthDate, 
        email, 
        phone
    }
    await fetch(`http://localhost:8080/pacient/savePacient`, {
            method: "Post",
            credentials: 'include',
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(json => {
            console.log(json)
        })
    }
  return (
    <div className="modalContainer hidden" ref={refModal}>
        <div className="modalContent flex flex-col">
            <input type="text" className="bg-gray-500" placeholder="Nome" ref={nameInput}/>
            <input type="date" className="bg-gray-500" placeholder="Data de nascimento" ref={dateInput}/>
            <input type="email" className="bg-gray-500" placeholder="E-mail" ref={emailInput}/>
            <input type="text" className="bg-gray-500" placeholder="Telefone" ref={phoneInput}/>
            <input type="button" className="bg-green-500" value="Criar" onClick={createNewUser}/>
        </div>
    </div>
  );
}
