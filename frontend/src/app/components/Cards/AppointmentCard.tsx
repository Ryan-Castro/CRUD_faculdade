

export default function AppointmentCard() {


    return (
      <div className="text-black bg-gray-500 mb-2 flex justify-between px-6 py-4">
          <div>
            <h1>nome do usuario<span> telefone</span></h1>
            <p>data da consulta</p>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-green-400 rounded-2xl px-4 p-1">Finalizar</button>
            <button className="bg-yellow-400 rounded-2xl px-4 p-1">Editar</button>
            <button className="bg-red-400 rounded-2xl px-4 p-1">Apagar</button>
          </div>
      </div>
    );
  }
  