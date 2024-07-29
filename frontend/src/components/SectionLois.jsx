import React, { useEffect, useState } from 'react';

const SectionLois = () => {
    const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://upbeat-card-be7fe087f4.strapiapp.com/api/lois?populate=*')
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        setData(responseData.data.attributes);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

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
                    <div className="flex justify-center items-center mb-8">
                        <button className="bg-transparent border-2 border-custom-green text-custom-green px-6 py-2 mr-12 rounded-lg">Nom de la loi</button>
                        <button className="bg-transparent text-custom-green border-2 border-custom-green rounded-lg px-6 mr-12 py-2">{data.loi_title}</button>
                        <button className="bg-transparent text-custom-green border-2 border-custom-green px-6 py-2 rounded-lg">Nom de la loi</button>
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
