import React, { useState } from 'react';

const SectionNouveautes = () => {
    const [activeTab, setActiveTab] = useState('produits');

    return (
        <>
        <div className="relative bottom-32 w-full">
                <img src="Gobelets Dessin PUB 3.png" alt="Gobelet" className="absolute -top-10 left-20 max-[767px]:w-36 max-[767px]:top-0" />
            </div>
        <div className="w-11/12 justify-center items-center mx-auto py-20 pb-32">
            <div className="flex justify-center text-center">
                <h1 style={{ fontWeight: '900' }} className="text-6xl max-[767px]:text-4xl font-bold font-secondary text-custom-green mb-16">
                    VOUS FAIRE DECOUVRIR<br /> NOS NOUVEAUTES
                </h1>
            </div>
            <div className="colonne flex max-[767px]:flex-col justify-between items-start">
                <div className="mr-24 max-[1500px]:mr-4 max-[767px]:w-full">
                    <div className="flex flex-row p-20 rounded-lg mb-4" style={{backgroundImage: 'url(/border-nouveautes.png)', backgroundSize: 'contain',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat'}}>
                        <div className='items-center mr-4'>
                        <button className="bg-white border-2 border-custom-blue font-bold text-custom-blue text-2xl px-4 py-2 rounded mb-16">PRODUITS</button>
                        <p className="text-4xl font-bold text-custom-green max-[767px]:mb-12 mb-16" style={{fontSize: '38px'}}>De nouvelles boîtes en inox réemployables avec couvercles à clipser !</p>
                        <div className='text-right'>
                        <button className="bg-white mb-8 max-[767px]:mb-4 border-2 text-2xl border-custom-blue text-custom-blue px-4 py-2 rounded">Bouton</button>
                        </div>
                        </div>
                        <img src="AMBIANCE-POTS-MULTIFOOD 1 22.png" alt="Nouveautés" className="ml-12 w-full rounded-lg" />
                    </div>
                </div>
                <div className="colonne-product w-2/4 max-[767px]:w-full">
                    <div className="flex justify-around mb-4">
                        <button
                            className={`w-1/2 mr-2 py-2 text-xl font-bold ${activeTab === 'produits' ? 'bg-custom-blue rounded-lg border-2 border-custom-blue text-white' : 'bg-white text-custom-green border-2 rounded-lg border-custom-blue'}`}
                            onClick={() => setActiveTab('produits')}
                        >
                            Produits
                        </button>
                        <button
                            className={`w-1/2 text-xl font-bold ${activeTab === 'promotions' ? 'bg-custom-blue rounded-lg border-2 border-custom-blue text-white' : 'bg-white text-custom-green border-2 rounded-lg border-custom-blue'}`}
                            onClick={() => setActiveTab('promotions')}
                        >
                            Promotions
                        </button>
                    </div>
                    <div className="border-custom-blue rounded-lg">
                        {activeTab === 'produits' && (
                            <div>
                                <div className="card-product items-center bg-white p-4 rounded-lg text-custom-green flex mb-4" style={{borderBottomRightRadius: "40px"}}>
                                    <img src="product-1-new.png" alt="Produit 1" className="w-32 h-24 rounded-lg mr-4" />
                                    <p className='text-2xl font-primary font-bold'>Un sachet L avec une ouverture sur les 2 côtés pour emballer de multiples produits à emporter...</p>
                                </div>
                                <div className="card-product items-center bg-white p-4 text-custom-green flex mb-4" style={{borderBottomRightRadius: "40px"}}>
                                    <img src="product-2-new.png" alt="Produit 2" className="w-32 h-24 rounded-lg mr-4" />
                                    <p className='text-2xl font-primary font-bold'>Un sachet L avec une ouverture sur les 2 côtés pour emballer de multiples produits à emporter...</p>
                                </div>
                                <div className="card-product items-center bg-white p-4 text-custom-green flex mb-4" style={{borderBottomRightRadius: "40px"}}>
                                    <img src="product-3-new.png" alt="Produit 3" className="w-32 h-24 rounded-lg mr-4"/>
                                    <p className='text-2xl font-primary font-bold'>Un sachet L avec une ouverture sur les 2 côtés pour emballer de multiples produits à emporter...</p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'promotions' && (
                            <div>
                                <div className="card-product items-center p-4 bg-white text-custom-green rounded-lg flex mb-4" style={{borderBottomRightRadius: "40px"}}>
                                    <img src="product-3-new.png" alt="Promotion 1" className="w-32 h-24 rounded-lg mr-4" />
                                    <p className='text-2xl font-primary font-bold'>Promo 1: Un sachet L avec une ouverture sur les 2 côtés pour emballer de multiples produits à emporter...</p>
                                </div>
                                <div className="card-product items-center p-4 bg-white text-custom-green rounded-lg flex mb-4" style={{borderBottomRightRadius: "40px"}}>
                                    <img src="product-1-new.png" alt="Promotion 2" className="w-32 h-24 rounded-lg mr-4" />
                                    <p className='text-2xl font-primary font-bold'>Promo 2: Un sachet L avec une ouverture sur les 2 côtés pour emballer de multiples produits à emporter...</p>
                                </div>
                                <div className="card-product items-center p-4 bg-white text-custom-green rounded-lg flex mb-4" style={{borderBottomRightRadius: "40px"}}>
                                    <img src="product-2-new.png" alt="Promotion 3" className="w-32 h-24 rounded-lg mr-4" />
                                    <p className='text-2xl font-primary font-bold'>Promo 3: Un sachet L avec une ouverture sur les 2 côtés pour emballer de multiples produits à emporter...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SectionNouveautes;
