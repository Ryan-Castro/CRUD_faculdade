import PacientCard from "../Cards/PacientCard";


export default function PacientContainer() {


  return (
    <div className="">
        <div>
            <input type="text" placeholder="nome do usuario"/>
            <button>Pesquisar</button>
        </div>
        <div>
            <PacientCard />
        </div>
    </div>
  );
}
