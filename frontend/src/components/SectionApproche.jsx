import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import ChevronUp from './assets/ChevronUp';

const SectionApproche = () => {
    return (
        <div className="w-full bg-white max-[767px]:pl-4 max-[767px]:pr-4 py-20 max-[767px]:pb-0 pl-8">
            <div className='flex justify-center text-center'>
                <h1 style={{fontWeight: '900'}} className="text-6xl max-[767px]:text-4xl font-bold font-secondary text-custom-green mb-16">VOUS EXPLIQUER<br /> NOTRE APPROCHE</h1>
            </div>
            <div className="flex max-[767px]:flex-col justify-between items-start">
                <div className="w-1/2 max-[767px]:w-full">
                    <div className="">
                        <Disclosure>
                            {({ open }) => (
                                <div className='disclosure-custom'>
                                    <DisclosureButton className={`accordeon-custom text-custom-green mb-4 w-full text-3xl text-left font-primary font-bold bg-white border-2 border-custom-green ${open ? 'rounded-t-lg' : 'rounded-lg'} px-6 py-4 flex gap-2 items-center`}>
                                    <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-black`} />
                                        <span>Management de la qualité</span>
                                    </DisclosureButton>
                                    <DisclosurePanel className="panel-custom p-8 bg-gray-50 mb-4 -mt-4 border-2 border-custom-green border-t-0 rounded-b-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.</p>
                                    </DisclosurePanel>
                                </div>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <div className='disclosure-custom'>
                                    <DisclosureButton className={`accordeon-custom text-custom-green text-custom mb-4 w-full text-3xl text-left font-primary font-bold bg-white border-2 border-custom-green ${open ? 'rounded-t-lg' : 'rounded-lg'} px-6 py-4 flex gap-2 items-center`}>
                                    <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-black`} />
                                        <span>Les achats responsables</span>
                                    </DisclosureButton>
                                    <DisclosurePanel className="panel-custom p-8 bg-gray-50 mb-4 -mt-4 border-2 border-custom-green border-t-0 rounded-b-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.</p>
                                    </DisclosurePanel>
                                </div>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <div className='disclosure-custom'>
                                    <DisclosureButton className={`accordeon-custom text-custom-green mb-4 w-full text-3xl text-left font-primary font-bold bg-white border-2 border-custom-green ${open ? 'rounded-t-lg' : 'rounded-lg'} px-6 py-4 flex gap-2 items-center`}>
                                    <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-black`} />
                                        <span>Nos certifications</span>
                                    </DisclosureButton>
                                    <DisclosurePanel className="panel-custom p-8 bg-gray-50 mb-4 -mt-4 border-2 border-custom-green border-t-0 rounded-b-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.</p>
                                    </DisclosurePanel>
                                </div>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <div className='disclosure-custom'>
                                    <DisclosureButton className={`accordeon-custom w-full text-custom-green text-3xl text-left font-primary font-bold bg-white border-2 border-custom-green ${open ? 'rounded-t-lg' : 'rounded-lg'} px-6 py-4 flex gap-2 items-center`}>
                                    <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-black`} />
                                        <span>Notre démarche RSE</span>
                                    </DisclosureButton>
                                    <DisclosurePanel className="panel-custom p-8 bg-gray-50 border-2 border-custom-green border-t-0 rounded-b-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.</p>
                                    </DisclosurePanel>
                                </div>
                            )}
                        </Disclosure>
                    </div>
                </div>
                <div className="w-1/2 max-[767px]:w-full max-[767px]:pl-0 max-[767px]:mt-16 pl-8">
                    <img src="Engagements - Image.png" alt="Approach" className="rounded-lg" style={{borderTopRightRadius: '0px', borderBottomRightRadius: '0px', borderBottomLeftRadius: '40px'}} />
                    <div className='max-[767px]:ml-8 ml-96 mt-4'>
                    <img src="arrow-approche.svg" alt="" />
                    <p className='font-third max-[767px]:mb-36 ' style={{fontSize: '32px', opacity: '20%'}}>Ceci est notre approche</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionApproche;
