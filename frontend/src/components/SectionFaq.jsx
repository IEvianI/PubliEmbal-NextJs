import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import ChevronUp from '../components/assets/ChevronUp';

const SectionFaq = () => {
    const faqs = [
        { question: "Distributeur d'emballages à destination des grossistes", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue." },
        { question: "Des produits conformes aux dernières lois en vigueur", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue." },
        { question: "Publi, une division commerciale de Sphere Distribution", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue." },
        { question: "Des gammes de produits pour les métiers de bouche...", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue." },
    ];

    return (
        <section className="section-faq py-20">
            <div className="w-11/12 mx-auto px-4">
                <h2 className="text-6xl font-bold text-custom-green -mb-24 max-[767px]:text-4xl font-secondary text-center" style={{fontWeight: '900'}}>CECI EST UN TITRE<br></br> POUR LE SEO</h2>
                <img src="arrow-faq.svg" className='arrow-faq-mobile' alt="" style={{transform: 'translateY(2rem) translateX(26rem)'}} />
                <div className="flex justify-between items-center mb-8">
                    <img src="pot-2-faq.png" alt="Left Image" className="hidden md:block" style={{transform: 'translateX(10rem)'}} />
                    <div className="w-full">
                        {faqs.map((faq, index) => (
                            <Disclosure key={index}>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex justify-between max-[767px]:px-6 max-[767px]:text-2xl w-full px-12 py-4 text-3xl font-primary font-bold text-left text-custom-green bg-white border-2 border-custom-green rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mb-4">
                                            <span>{faq.question}</span>
                                            <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-10 h-10 text-custom-green`} />
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-gray-50 border-2 border-t-0 border-custom-green rounded-lg mb-4">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                    <img src="pot-faq.png" alt="Right Image" className="hidden md:block" style={{transform: 'translate(-10rem, -10rem)', zIndex: -1 }} />
                </div>
            </div>
        </section>
    );
};

export default SectionFaq;
