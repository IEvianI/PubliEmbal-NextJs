"use client"

import FirstSection from "@/components/FirstSection"
import SectionMetiers from "@/components/SectionMetiers"
import Image from "next/image"


const { default: Navbar } = require("@/components/Navbar")

const Homepage = () => {
    return(
        <>
        <div className="relative w-full h-full">
        <Image src="/fond-section-1.png" layout="fill" 
        objectFit="cover" 
        quality={100}
        alt="Background image"
        style={{zIndex: -1}}
         />
        <Navbar />
        <FirstSection />
        </div>
        <SectionMetiers />
        </>
    )
}

export default Homepage