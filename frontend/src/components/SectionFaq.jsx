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
            <div className="2xl:w-11/12 mx-auto 2xl:px-4">
                <h2 className="text-6xl font-bold text-custom-green -mb-24 max-[767px]:text-4xl font-secondary text-center" style={{fontWeight: '900'}}>CECI EST UN TITRE<br></br> POUR LE SEO</h2>
                <img src="arrow-faq.svg" className='arrow-faq-mobile' alt="" style={{transform: 'translateY(2rem) translateX(26rem)'}} />
                <div className="flex justify-between items-center mb-8">
                    <img src="pot-2-faq.png" alt="Left Image" className="hidden md:block" style={{transform: 'translateX(10rem)', zIndex: 1}} />
                    <div className="w-full">
                        {faqs.map((faq, index) => (
                            <Disclosure key={index}>
                                {({ open }) => (
                                    <div className='disclosure-custom'>
                                        <DisclosureButton className={`accordeon-custom text-custom-green mb-4 w-full text-3xl text-left font-primary font-bold bg-white border-2 border-custom-green ${open ? 'rounded-t-lg' : 'rounded-lg'} px-6 py-4 flex justify-between items-center`}>
                                            <span>{faq.question}</span>
                                            <ChevronUp className={`${open ? 'transform rotate-180' : ''} w-10 h-10 text-custom-green`} />
                                        </DisclosureButton>
                                        <DisclosurePanel className="panel-custom p-8 bg-gray-50 mb-4 -mt-4 border-2 border-custom-green border-t-0 rounded-b-lg">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </div>
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
