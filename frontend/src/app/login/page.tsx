import Image from "next/image";

export default function LogIn() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="w-screen h-11/12 flex">
        <Image alt="" src="" className="w-4/6 h-screen"></Image>
        <div className="w-2/6 h-screen bg-white flex flex-col text-black p-12 pt-60 gap-4">
          <h1 className="text-3xl">Faça seu login</h1>
          <input type="text" className="border border-gray-400 pl-3 py-2" placeholder="Usuario"/>
          <input type="password" className="border border-gray-400 pl-3 py-2" placeholder="Senha"/>
          <input type="button" value="Login" className="bg-green-600 text-white pl-3 py-2 rounded-xl text-3xl" />
        </div>
      </div>
    </div>
  );
}
