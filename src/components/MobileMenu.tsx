'use client'

import Link from "next/link"
import { useState } from "react"

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="md:hidden">
      <div onClick={() => setIsOpen(prev => !prev)} className="flex flex-col min-h-7 gap-y-[4.5px] cursor-pointer">
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`} />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""} ease-in-out duration-500`} />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`} />
      </div>
      {isOpen && (
          <div className="absolute gap-8 font-medium text-xl z-10 left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center">
            <Link href='/'>Home</Link>
            <Link href='/'>Friends</Link>
            <Link href='/'>Groups</Link>
            <Link href='/'>Stories</Link>
            <Link href='/'>Login</Link>
          </div>
      )}
    </div>
  )
}

export default MobileMenu
