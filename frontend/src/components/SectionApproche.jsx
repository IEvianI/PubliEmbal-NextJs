import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import ChevronUp from './assets/ChevronUp';

const SectionApproche = () => {
    return (
        <div className="w-full bg-white py-20 px-8">
            <div className='flex justify-center text-center'>
            <h1 className="text-5xl font-bold font-secondary text-custom-green mb-8">VOUS EXPLIQUER<br /> NOTRE APPROCHE</h1>
            </div>
            <div className="flex justify-between items-start">
                <div className="w-1/2">
                    <div className="space-y-4">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className="accordeon-custom w-full text-3xl text-left font-primary font-bold bg-white border-2 border-custom-green text-custom-green px-6 py-4 rounded-lg flex justify-between items-center">
                                        <span>Management de la qualité</span>
                                        <ChevronUp
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-black`}
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="p-4 bg-gray-50 border rounded-lg" style={{borderColor: "#"}}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.
                                        </p>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className="accordeon-custom w-full text-3xl text-custom-green text-left font-primary font-bold bg-white border-2 border-custom-green text-black px-6 py-4 rounded-lg flex justify-between items-center">
                                        <span>Les achats responsables</span>
                                        <ChevronUp
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-black`}
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.
                                        </p>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className="accordeon-custom w-full text-3xl text-left text-custom-green font-bold font-primary bg-white border-2 border-custom-green text-black px-6 py-4 rounded-lg flex justify-between items-center">
                                        <span>Nos certifications</span>
                                        <ChevronUp
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-black`}
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.
                                        </p>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className="accordeon-custom w-full text-3xl font-primary font-bold text-custom-green text-left bg-white border-2 border-custom-green text-black px-6 py-4 rounded-lg flex justify-between items-center">
                                        <span>Notre démarche RSE</span>
                                        <ChevronUp
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-black`}
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit.
                                        </p>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
                <div className="w-1/2 pl-8">
                    <img src="Engagements - Image.png" alt="Approach" className="rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default SectionApproche;
