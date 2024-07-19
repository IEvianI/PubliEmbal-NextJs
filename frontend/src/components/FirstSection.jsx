import React, { useEffect, useState } from 'react';

const FirstSection = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://upbeat-card-be7fe087f4.strapiapp.com/api/first-section?populate=*')
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        setData(responseData.data.attributes);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  
  const product1 = data.slider_img_product1?.data?.attributes?.url;
  const product2 = data.slider_img_product2?.data?.attributes?.url;
  const product3 = data.slider_img_product3?.data?.attributes?.url;

  if (!data) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="p-12 text-center relative">
        <div className='ml-96 mr-96'>
          <h1 className="font-bold mb-4 font-secondary uppercase text-6xl border-2 p-12 text-custom-green">
            <span>{data.slider_baseline}</span><br></br> <span>{data.slider_baseline_3}</span> <span className='font-third font-regular normal-case highlight'>{data.slider_baseline_2}</span>
          </h1>
        </div>
        <p className="flex text-lg mb-6 w-1/3 mx-auto items-center justify-center text-gray-600">{data.slider_short_description}</p>
        
        <div className="relative flex justify-center items-center mb-6">
          <img src="/line.png" alt="line" className="absolute inset-x-0 top-1/2 transform z-0" />
          <div className="relative z-10 flex gap-8">
            <img src={product1} alt="Product 1" className="w-96 h-96 object-contain" />
            <img src={product2} alt="Product 2" className="w-96 h-96 object-contain" />
            <img src={product3} alt="Product 3" className="w-96 h-96 object-contain" />
          </div>
        </div>
        
        <div className="flex flex-row mt-8 justify-center items-center mr-60">
          <a className="text-black -rotate-6 font-third w-32" style={{ opacity: "20%" }}>
            {data.slider_hook_button}
          </a>
          <img src="/arrow.png" alt="arrow" className="pt-12" />
          <div className='items-center justify-center'>
            <button className="p-2 pl-12 pr-12 rounded-lg mb-4 bg-custom-blue font-primary font-bold text-white">
              {data.slider_text_button}
            </button>
          </div>
        </div>
      </div>
  );
}

export default FirstSection;
