import { Appointment } from "@/app/@types/AppointmentTypes";
import { Doctor } from "@/app/@types/DoctorTypes";
import { Pacient } from "@/app/@types/PacientTypes";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react";


export default function CreateAppointmentModal(props:{modalShow:number, handleModalShow: Dispatch<SetStateAction<number>>, Doctor:Doctor, Appointment: Appointment}) {

  const refModal = useRef<HTMLDivElement>(null)
  const dateInput = useRef<HTMLInputElement>(null)
  const [searchTerm, setSearchTerm] = useState('');
  const [idPacient, setIdPacient] = useState('');
  const [allPacient, setAllPacient] = useState<Pacient[]>([]);
  const [suggestions, setSuggestions] = useState<Pacient[]>([]);

  useEffect(()=>{
    if(props.modalShow == 1){
        refModal.current?.classList.remove('hidden');
        refModal.current?.classList.add('flex');
      return;
    };
    refModal.current?.classList.remove('flex');
    refModal.current?.classList.add('hidden');
    dateInput.current!.value = props.Appointment.data
    setIdPacient(props.Appointment.pacientId);   

    async function getPacient() {
        await fetch(`http://localhost:8080/pacient/getAll`, {
          method: "GET",
          credentials: 'include',
        }).then(res => res.json()).then(json => {
          json.forEach((pacient: Pacient) => {
            if(props.Appointment.pacientId == pacient._id){
              setSearchTerm(pacient.name)
            }
          });
          setAllPacient(json)
        })
      }
      getPacient()
  },[props])

  async function createAppointment(){
    const date = dateInput.current!.value;
    if(idPacient == "" || date == ""){
        //criar mensagem de erro
        return
    }
    const formData = {
        pacientID: idPacient, 
        doctorId: props.Doctor._id,
        date, 
    }
    await fetch(`http://localhost:8080/appointment/saveAppontment`, {
      method: "PUT",
      credentials: 'include',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(formData)
    }).then(res => res.json()).then(() => {
      props.handleModalShow(0)
      return
    })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(value); 
  };

  const handleSearch = (term:string) => {
    setSearchTerm(term);
    const filteredUsers = allPacient.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setSuggestions(filteredUsers);
  };

  return (
    <div className="modalContainer hidden" ref={refModal}>
        <div className="modalContent flex flex-col">
            <div>
                <input type="text" className="bg-gray-500" placeholder="Nome" value={searchTerm} onChange={handleChange}/>
                {searchTerm && suggestions.length > 0 && (
                    <ul>
                    {suggestions.map(user => (
                        <li key={user._id} onClick={()=>{setIdPacient(user._id); setSearchTerm(user.name); setSuggestions([])}}>{user.name}</li>
                    ))}
                    </ul>
                )}
            </div>
            <input type="date" className="bg-gray-500" placeholder="Data de nascimento" ref={dateInput}/>
            <input type="button" className="bg-green-500" value="Criar" onClick={createAppointment}/>
            <input type="button" className="bg-red-500" value="Cancelar" onClick={()=>{props.handleModalShow(0)}}/>
        </div>
    </div>
  );
}
