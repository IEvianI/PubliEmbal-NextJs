"use client"

import Link from "next/link"
import { useState } from "react"

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="md:hidden">
            <div className="flex flex-col gap-[4.5px] cursor-pointer z-20" onClick={() => setIsOpen((prev) => !prev)}>
                {isOpen ? (
                    // Icône de fermeture
                    <div className="flex flex-col gap-[4.5px] cursor-pointer z-20">
                        <div className={`w-6 h-1 bg-custom-green rounded-sm rotate-45 origin-left ease-in-out duration-500`} />
                        <div className={`w-6 h-1 bg-custom-green rounded-sm -rotate-45 origin-left ease-in-out duration-500`} />
                    </div>
                ) : (
                    // Icône de menu hamburger
                    <div className="flex flex-col gap-[4.5px] cursor-pointer z-20">
                        <div className={`w-6 h-1 bg-custom-green rounded-sm ease-in-out duration-500`} />
                        <div className={`w-6 h-1 bg-custom-green rounded-sm ease-in-out duration-500`} />
                        <div className={`w-6 h-1 bg-custom-green rounded-sm ease-in-out duration-500`} />
                    </div>
                )}
            </div>
            {isOpen && (
                <div className="absolute left-0 top-24 w-full h-96 bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-custom-green font-primary">{`Nos solutions d'emballages`}</Link>
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-custom-green font-primary">Nos services</Link>
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-custom-green font-primary">Notre société</Link>
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-custom-green font-primary">Nos engagements</Link>
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-custom-green font-primary">Nos actualités</Link>
                </div>
            )}
        </div>
    )
}

export default MobileMenu
