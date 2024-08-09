import React, { useEffect, useState } from 'react';
import LoisList from './lois/LoisList';

const SectionLois = () => {
    const [data, setData] = useState([]);
    const [selectedLoi, setSelectedLoi] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch('https://upbeat-card-be7fe087f4.strapiapp.com/api/lois?populate=loi_img,metier')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(responseData => {
                console.log('API Response:', responseData);
                if (responseData.data && responseData.data.length > 0) {
                    setData(responseData.data);
                    setSelectedLoi(responseData.data[1]);
                } else {
                    setError('No data available');
                }
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
                setError(error.toString());
            });
    }, []);

    const handleLoiClick = (loi) => {
        setSelectedLoi(loi);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    const selectedAttributes = selectedLoi ? selectedLoi.attributes : {};
    const imgLoi = selectedAttributes.loi_img?.data?.attributes?.url;

    return (
        <div className="mobile-section-loi pl-12 pr-12" style={{ paddingTop: "165px", paddingBottom: "165px" }}>
            <h1 style={{fontWeight: '900'}} className="text-4xl font-secondary text-custom-green font-bold mb-8 block md:hidden">
    VOUS ACCOMPAGNER<br /> AVEC DES GAMMES CONFORMES AUX LOIS
</h1>
            <div className="flex max-[767px]:flex-col-reverse justify-between items-start gap-12">
                <div className="w-1/2 max-[767px]:w-full pr-4">
                    <h1 style={{fontWeight: '900'}} className="text-6xl max-[767px]:text-4xl font-secondary text-custom-green font-bold mb-8 hidden md:block">
                        VOUS ACCOMPAGNER<br /> AVEC DES GAMMES CONFORMES AUX LOIS
                    </h1>
                    <div className='max-w-lg rounded-lg border-angled p-8' style={{padding: '30px'}}>
                        <h2 className="text-xl text-custom-green font-bold mb-4">
                            <span className='highlight'>{selectedAttributes.loi_title_desc_1}</span> <span>{selectedAttributes.loi_title_desc_2}</span>
                        </h2>
                        <p>{selectedAttributes.loi_desc}</p>
                        <div className="flex justify-end">
                            <button 
                                className="mt-4 pl-10 pr-10 bg-white border-2 text-custom-blue px-4 py-2 rounded" 
                                style={{ color: "#5CBDEC", borderColor: "#5CBDEC" }}>
                                Bouton
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 max-[767px]:w-full max-[767px]:flex-row flex flex-col items-center">
                    <div className='flex flex-col max-[767px]:w-2/3'>
                        <LoisList lois={data} onLoiClick={handleLoiClick} activeLoiId={selectedLoi?.id} />
                    </div>
                    <div className="flex justify-center items-center max-[767px]:w-1/3 gap-4">
                        {imgLoi && <img src={imgLoi} alt="Loi" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionLois;
