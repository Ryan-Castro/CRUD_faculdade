import AppointmentCard from "../Cards/AppointmentCard";


export default function AppointmentContainer() {


  return (
    <div className="">
        <div>
            <input type="text" placeholder="nome do usuario"/>
            <input type="date" name="" id="" />
            <button>Pesquisar</button>
        </div>
        <div>
            <AppointmentCard />
        </div>
    </div>
  );
}
