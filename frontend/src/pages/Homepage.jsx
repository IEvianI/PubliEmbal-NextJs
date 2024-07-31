"use client"

import FirstSection from "@/components/FirstSection"
import Footer from "@/components/Footer"
import SectionApproche from "@/components/SectionApproche"
import SectionLois from "@/components/SectionLois"
import SectionNouveautes from "@/components/SectionNouveautes"
import SectionMetiers from "@/components/SectionMetiers"
import SectionServiceClient from "@/components/SectionServiceClient"
import Image from "next/image"
import SectionMatieres from "@/components/SectionMatieres"
import SectionFaq from "@/components/SectionFaq"


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
        <div className="relative w-full h-full">
        <Image src="/fond-section-lois.jpg" layout="fill" 
        objectFit="cover" 
        quality={100}
        alt="Background image"
        style={{zIndex: -1}}
         />
         <SectionLois />
         </div>
         <div className="relative w-full h-full">
         <SectionServiceClient />
         </div>
         <SectionApproche />
         <div className="relative w-full h-full">
        <Image src="/fond-section-news.png" layout="fill" 
        objectFit="cover" 
        quality={100}
        alt="Background image"
        style={{zIndex: -1}}
         />
         <SectionNouveautes />
         </div>
         <div className="relative w-full h-full">
        <Image src="/fond-section-matieres.png" layout="fill" 
        objectFit="cover" 
        quality={100}
        alt="Background image"
        style={{zIndex: -1}}
         />
         <SectionMatieres />
         </div>
         <SectionFaq />
         <Footer />
        </>
    )
}

export default Homepage