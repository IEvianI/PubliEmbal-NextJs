import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import ChevronUp from './assets/ChevronUp';

const SectionApproche = () => {
    return (
        <div className="w-full bg-white py-20 pl-8">
            <div className='flex justify-center text-center'>
                <h1 style={{fontWeight: '900'}} className="text-6xl max-[767px]:text-4xl font-bold font-secondary text-custom-green mb-16">VOUS EXPLIQUER<br /> NOTRE APPROCHE</h1>
            </div>
            <div className="flex max-[767px]:flex-col justify-between items-start">
                <div className="w-1/2 max-[767px]:w-full">
                    <div className="">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className={`accordeon-custom text-custom-green mb-4 w-full text-3xl text-left font-primary font-bold bg-white border-2 border-custom-green ${open ? 'rounded-t-lg' : 'rounded-lg'} px-6 py-4 flex justify-between items-center`}>
                                        <span>Management de la qualité</span>
                                        <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-black`} />
                                    </DisclosureButton>
                                    <DisclosurePanel className="panel-custom p-4 bg-gray-50 mb-4 -mt-4 border-2 border-custom-green border-t-0 rounded-b-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.</p>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className={`accordeon-custom text-custom-green text-custom mb-4 w-full text-3xl text-left font-primary font-bold bg-white border-2 border-custom-green ${open ? 'rounded-t-lg' : 'rounded-lg'} px-6 py-4 flex justify-between items-center`}>
                                        <span>Les achats responsables</span>
                                        <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-black`} />
                                    </DisclosureButton>
                                    <DisclosurePanel className="panel-custom p-4 bg-gray-50 mb-4 -mt-4 border-2 border-custom-green border-t-0 rounded-b-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.</p>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className={`accordeon-custom text-custom-green mb-4 w-full text-3xl text-left font-primary font-bold bg-white border-2 border-custom-green ${open ? 'rounded-t-lg' : 'rounded-lg'} px-6 py-4 flex justify-between items-center`}>
                                        <span>Nos certifications</span>
                                        <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-black`} />
                                    </DisclosureButton>
                                    <DisclosurePanel className="panel-custom p-4 bg-gray-50 mb-4 -mt-4 border-2 border-custom-green border-t-0 rounded-b-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.</p>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className={`accordeon-custom w-full text-custom-green text-3xl text-left font-primary font-bold bg-white border-2 border-custom-green ${open ? 'rounded-t-lg' : 'rounded-lg'} px-6 py-4 flex justify-between items-center`}>
                                        <span>Notre démarche RSE</span>
                                        <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-black`} />
                                    </DisclosureButton>
                                    <DisclosurePanel className="panel-custom p-4 bg-gray-50 border-2 border-custom-green border-t-0 rounded-b-lg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.</p>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
                <div className="w-1/2 max-[767px]:w-full max-[767px]:pl-0 max-[767px]:mt-16 pl-8">
                    <img src="Engagements - Image.png" alt="Approach" className="rounded-lg" style={{borderTopRightRadius: '0px', borderBottomRightRadius: '0px', borderBottomLeftRadius: '40px'}} />
                    <div className='ml-96 mt-4'>
                    <img src="arrow-approche.svg" alt="" />
                    <p className='font-third' style={{fontSize: '32px', opacity: '20%'}}>Ceci est notre approche</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionApproche;
