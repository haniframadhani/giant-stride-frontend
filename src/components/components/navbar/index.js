import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default function Navbar() {
  let links = [
    { name: "home", link: "/" },
    { name: "about", link: "/contact#about" },
    { name: "contact me", link: "/contact#contact" },
  ]
  let [open, setOpen] = useState(false)
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="md:flex items-center justify-between bg-cyan-blue text-white py-4 md:px-10 px-7">
        <a href="/"><h1 className="cursor-pointer uppercase font-bold text-2xl text-center">giant<br />spot</h1></a>
        <div onClick={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden">
          {!open ? <Bars2Icon className="w-12 h-12" /> : <XMarkIcon className="w-12 h-12" />}
        </div>
        <ul className={`md:flex md:items-center pb-12 md:pb-0 absolute bg-cyan-blue md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'} `}>
          {
            links.map(link => <li key={link?.name} className="md:ml-8 text-xl my-7 md:my-0"><a href={link?.link} className="capitalize hover:underline duration-100">{link?.name}</a></li>)
          }
        </ul>
      </div>
    </header>
  )
}