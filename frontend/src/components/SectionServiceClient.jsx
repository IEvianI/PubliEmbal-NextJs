import React from 'react';

const SectionServiceClient = () => {
    return (
        <div className="mobile-section-sc relative w-full bg-custom-green flex justify-center items-center" style={{ height: "523px" }}>
            <div className="relative flex justify-between items-center max-[767px]:w-full w-3/4">
                <div className="relative w-1/4" style={{ top: "-150px", right: "150px" }}>
                    <img src="AMBIANCE-POTS-MULTIFOOD 1 20.png" alt="Left Image" className="rounded-lg" />
                </div>
                <div className="w-1/2 text-center text-white">
                    <h1 style={{fontWeight: '900'}} className="text-6xl max-[767px]:text-4xl font-secondary font-bold mb-4">VOUS APPORTER<br></br> DES REPONSES</h1>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu mattis augue. Pellentesque ultricies tempor mi, eget pulvinar elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="mt-4 pl-10 pr-10 border-2 bg-white text-custom-blue px-4 py-2 rounded" style={{ color: "#5CBDEC", borderColor: "#5CBDEC" }}>Bouton</button>
                    <div className='arrow-container-sc'>
                    <img src="arrow-sc.svg" alt="" className='arrow-image-sc' />
                    <p className="text-white font-third w-64 italic" style={{fontSize: '32px'}}>On a un super service client !</p>   </div>             </div>
                <div className="image-mobile-sc relative w-1/4 text-center" style={{ bottom: "-150px", left: "150px" }}>
                    <img src="AMBIANCE-POTS-MULTIFOOD 1 21.png" alt="Right Image" className="rounded-lg mb-2" />
                </div>
            </div>
        </div>
    );
};

export default SectionServiceClient;
