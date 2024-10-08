import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import MatieresListItem from './matieres/MatieresListItem';

const SectionMatieres = () => {
  const [matieres, setMatieres] = useState([]);

  useEffect(() => {
    // Remplacez par votre propre logique pour récupérer les matières depuis une API
    const fetchMatieres = async () => {
      const response = await fetch('https://upbeat-card-be7fe087f4.strapiapp.com/api/matieres?populate=*');
      const data = await response.json();
      setMatieres(data.data);
    };
    fetchMatieres();
  }, []);

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

  const options = {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    gap: '1rem',
    pagination: true,
    arrows: true,
    arrowPath: 'M18 30.9231L26.6154 22.3077L18 13.6923M2 22C2 10.9543 10.9543 2 22 2C33.0457 2 42 10.9543 42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22Z',
    breakpoints: {
      768: {
        perPage: 1,
      },
      1024: {
        perPage: 2,
      },
    },
  };

  return (
    <>
      <div className="relative bottom-32 w-full">
        <img src="gobelet-matieres.png" alt="Gobelet" className="absolute left-20 max-[767px]:w-36 max-[767px]:top-10" />
      </div>
      <section className="section-matieres py-20">
      <h2 className="mb-20 font-secondary uppercase text-6xl text-center max-[767px]:text-4xl p-12 text-custom-green" style={{fontWeight: '900'}}>
            <span>{data.slider_baseline}</span><br></br> <span>{data.slider_baseline_3}</span> <span className='font-third font-regular normal-case highlight'>{data.slider_baseline_2}</span>
          </h2>
        <div className="max-w-carousel">
          <Splide options={options}>
            {matieres.map((matiere) => (
              <SplideSlide key={matiere.id}>
                <MatieresListItem matiere={matiere} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="text-center mt-20">
          <button className="pl-10 pr-10 py-2 bg-custom-blue text-white rounded">CTA</button>
        </div>
      </section>
    </>
  );
};

export default SectionMatieres;
