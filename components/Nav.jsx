import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Nav() {
    const [toggleMenu, enableToggleMenu] = useState(false);

    const handleMenu = () => enableToggleMenu(!toggleMenu);

    return (
    <div className='relative'>
        <div className="flex justify-between md:items-center items-start max-w-5xl mx-auto md:py-3">
            <div className="flex items-center pt-4 pl-4 md:pt-0 md:pl-0">
                <h3 className="bg-yellow-500 w-12 h-12 rounded-full text-center text-4xl font-bold p-1 mr-1.5">B</h3>
                <h3 className="text-xl"><span className="font-semibold">Belinda</span> Marion</h3>
            </div>
            <div className={`bg-black h-screen w-80 md:w-auto md:h-auto md:bg-transparent ${!toggleMenu && "hidden"} md:block transition ease-out duration-75`}>
                <ul className="flex flex-col flex-grow mt-24 md:flex-row md:mt-0">
                    <li className="mx-5 text-gray-500 cursor-pointer hover:text-yellow-500 text-2xl mb-6 md:text-base md:mb-0">About Me</li>
                    <li className="mx-5 text-gray-500 cursor-pointer hover:text-yellow-500 text-2xl mb-6 md:text-base md:mb-0">Resume</li>
                    <li className="mx-5 text-gray-500 cursor-pointer hover:text-yellow-500 text-2xl mb-6 md:text-base md:mb-0">Portfolio</li>
                    <li className="mx-5 text-gray-500 cursor-pointer hover:text-yellow-500 text-2xl mb-6 md:text-base md:mb-0">Blog</li>
                    <li className="mx-5 text-gray-500 cursor-pointer hover:text-yellow-500 text-2xl mb-6 md:text-base md:mb-0">Contact</li>
                </ul>
            </div>
        </div>
        
        <Bars3Icon onClick={handleMenu} className={`md:hidden sm:block w-7 absolute top-7 right-4 ${toggleMenu ? "text-white" : "text-black"} z-10`} />
    </div>
  )
}