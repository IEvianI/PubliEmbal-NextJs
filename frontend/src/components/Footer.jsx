import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-custom-green text-white py-12">
            <div className="flex flex-row container justify-center mx-auto md:grid-cols-4 gap-72">
                <div>
                    <h3 className="text-lg font-bold mb-4">Nos solutions d'emballages</h3>
                    <div className='flex gap-12 flex-row'>
                    <ul className="space-y-2 flex flex-col">
                        <li>Nos incontournables</li>
                        <li>Boucherie Charcuterie</li>
                        <li>Traiteur laboratoire</li>
                        <li>Sortie de caisse</li>
                        <li>Boulangerie</li>
                        </ul>
                        <ul className='space-y-2 flex flex-col'>
                        <li>Pâtisserie</li>
                        <li>Fruits & légumes</li>
                        <li>Gestion des déchets</li>
                        <li>Grand Public</li>
                        </ul>
                        </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Nos services</h3>
                    <ul className="space-y-2">
                        <li>Que dit la loi ?</li>
                        <li>Notre offre de personnalisation</li>
                        <li>Nos solutions responsables</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Informations</h3>
                    <ul className="space-y-2">
                        <li>Contact</li>
                        <li>Mentions légales</li>
                        <li>Politique de confidentialité</li>
                        <li>Gestion des cookies</li>
                    </ul>
                </div>
            </div>
            <div className="bg-white ml-32 mr-32 rounded-lg text-black py-6 mt-8 flex justify-between items-center px-12">
            <div className="flex items-center">
                        <img src="logo-pub.svg" alt="Publi Embal" className="h-12 mr-4" />
                        <div>
                            <p className="font-bold">Publi Embal</p>
                            <p>Division commerciale de SPHERE DISTRIBUTION</p>
                            <p>06 06 06 06 06</p>
                            <p>6 rue Jack London, 44400 Rezé, France</p>
                        </div>
                        </div>
                <p className='font-secondary text-custom-green uppercase text-3xl' style={{fontWeight: '900'}}>ENSEMBLE, ADOPTONS<br></br> LES GESTES RESPONSABLES !</p>
                <div className='w-[20%] flex items-center gap-4 xl:gap-8 justify-end'>
                <div className="hidden xl:flex p-2 border-2 items-center rounded-md" style={{borderColor: "#5CBDEC"}}>
                    <Image src="/search.svg" alt="" width={18} height={18} />
                </div>
                        <button className="p-2 rounded-md pl-10 pr-10 font-primary font-bold hidden md:block" style={{backgroundColor: "#5CBDEC", color: "white"}}>Bouton</button>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
