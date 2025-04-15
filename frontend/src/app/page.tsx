import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <nav className="w-screen h-1/12 bg-cyan-700 flex justify-end items-center p-7">
        <ul className="flex gap-4">
          <Link href="./login"><li className="px-4 py-1">logIn</li></Link>
          <Link href="*"><li className="bg-cyan-600 px-4 py-1 rounded-xl shadow-cyan-400 shadow-sm">signup</li></Link>
        </ul>
      </nav>
      <div className="w-screen h-11/12 flex">
        <div className="w-4/6 h-screen"></div>
        <div className="w-2/6 h-screen bg-white flex flex-col text-black p-12 pt-60 gap-4">
          <h1 className="text-3xl">Lorem, ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum maxime perspiciatis corrupti eum quo adipisci fugit quibusdam 
            exercitationem ullam? Voluptate, harum maxime inventore quisquam earum adipisci culpa voluptatum consequuntur.
          </p>
        </div>
      </div>
    </div>
  );
}
