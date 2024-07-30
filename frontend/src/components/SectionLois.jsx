import React, { useEffect, useState } from 'react';

const SectionLois = () => {
    const [data, setData] = useState({});
    const [metierTitle, setMetierTitle] = useState("");
    const [metierColor, setMetierColor] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://upbeat-card-be7fe087f4.strapiapp.com/api/lois?populate=loi_img,metier')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(responseData => {
                console.log('Response Data:', responseData);
                if (responseData.data && responseData.data.length > 0) {
                    const loiData = responseData.data[0].attributes || {};
                    setData(loiData);

                    const metierData = loiData.metier?.data?.attributes || {};
                    console.log('Metier Data:', metierData);
                    setMetierTitle(metierData.metier_title || '');
                    setMetierColor(metierData.metier_color || '');
                } else {
                    setError('No data available');
                }
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
                setError(error.toString());
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const imgLoi = data.loi_img?.data?.attributes?.url;
    return (
        <div className="pl-12 pr-12" style={{ paddingTop: "165px", paddingBottom: "165px" }}>
            <div className="flex justify-between items-start gap-12">
                <div className="w-1/2 pr-4">
                    <h1 className="text-6xl font-secondary text-custom-green font-bold mb-8">VOUS ACCOMPAGNER<br /> AVEC DES GAMMES CONFORMES AUX LOIS</h1>
                    <div className='max-w-lg border-2 rounded-lg border-custom-blue p-8'>
                        <h2 className="text-xl text-custom-green font-bold mb-4">Nouveau marquage pour les gobelets carton</h2>
                        <p>{data.loi_desc}</p>
                        <button className="mt-4 pl-10 pr-10 bg-white border-2 text-custom-blue px-4 py-2 rounded" style={{ color: "#5CBDEC", borderColor: "#5CBDEC" }}>Bouton</button>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center">
                <div className='flex flex-row'>
                    <div className="flex flex-col justify-center items-center mb-8">
                        <button 
                            className="bg-transparent text-custom-green border-2 z-10 justify-center align-center -mb-3 px-2 z mr-12 rounded-lg" 
                            style={{ backgroundColor: metierColor, color: "#fff", borderColor: metierColor }}>
                            {metierTitle || 'Titre non disponible'}
                        </button>
                        <button className="bg-transparent text-custom-green border-2 border-custom-green rounded-lg px-6 mr-12 py-2">{data.loi_title}</button>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-8">
                        <button 
                            className="bg-transparent text-custom-green border-2 z-10 justify-center align-center -mb-3 px-2 z mr-12 rounded-lg" 
                            style={{ backgroundColor: metierColor, color: "#fff", borderColor: metierColor }}>
                            {metierTitle || 'Titre non disponible'}
                        </button>
                        <button className="bg-transparent text-custom-green border-2 border-custom-green rounded-lg px-6 mr-12 py-2">{data.loi_title}</button>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-8">
                        <button 
                            className="bg-transparent text-custom-green border-2 z-10 justify-center align-center -mb-3 px-2 z mr-12 rounded-lg" 
                            style={{ backgroundColor: metierColor, color: "#fff", borderColor: metierColor }}>
                            {metierTitle || 'Titre non disponible'}
                        </button>
                        <button className="bg-transparent text-custom-green border-2 border-custom-green rounded-lg px-6 mr-12 py-2">{data.loi_title}</button>
                    </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <img src={imgLoi} alt="Cups" className="w-1/2" />
                        <img src="Gobelets BAMBGOB_Sketch.png" alt="Cups" className="w-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionLois;
