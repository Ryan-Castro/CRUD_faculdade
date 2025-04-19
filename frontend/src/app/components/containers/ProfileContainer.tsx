import { useEffect, useRef } from "react";


export default function ProfileContainer(props:{containerShow:number}) {


    const refContainer = useRef<HTMLDivElement>(null)

    useEffect(()=>{
    if(props.containerShow == 3){
        refContainer.current?.classList.remove('hidden');
        return;
    };
    refContainer.current?.classList.add('hidden');
    },[props])

    return (
        <div className="w-full h-full flex-col items-center pt-8 px-15 hidden" ref={refContainer}>
            <div className="w-full flex gap-15">
                <div className="w-36 h-36 flex justify-center items-center rounded-full bg-black">
                    image    
                </div>
                <div>
                    <h1 className="text-6xl">nome</h1>
                    <h2>Especificidade - numero do médico</h2>
                </div>
            </div>
            <div className="py-10 w-full flex gap-5 text-black">
                <input type="text" placeholder="Email" className="w-1/3 bg-white pl-6 py-2"/>
                <input type="text" placeholder="celular" className="w-1/3 bg-white pl-6 py-2"/>
            </div>
            <div className="w-full flex justify-between text-black">
                <button className="w-3/7 bg-amber-400 py-4 rounded-2xl">Editar</button>
                <button className="w-3/7 bg-red-400 py-4 rounded-2xl">Apagar</button>
            </div>
        </div>
  );
}