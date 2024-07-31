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

  const options = {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    gap: '1rem',
    pagination: true,
    arrows: true,
    padding: '20%',
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
      <h2 className="text-6xl text-custom-green font-secondary text-center mb-20" style={{ fontWeight: '900' }}>ENSEMBLE, ADOPTONS<br></br> LES GESTES RESPONSABLES !</h2>
      <Splide options={options}>
        {matieres.map((matiere) => (
          <SplideSlide key={matiere.id}>
            <MatieresListItem matiere={matiere} />
          </SplideSlide>
        ))}
      </Splide>
      <div className="text-center mt-20">
        <button className="pl-10 pr-10 py-2 bg-custom-blue text-white rounded">CTA</button>
      </div>
    </section>
    </>
  );
};

export default SectionMatieres;
