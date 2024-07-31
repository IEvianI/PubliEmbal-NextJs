import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import MatieresListItem from './MatieresListItem';

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
    <section className="section-matieres py-16">
      <h2 className="text-4xl font-bold text-center mb-8">ENSEMBLE, ADOPTONS LES GESTES RESPONSABLES !</h2>
      <Splide options={options}>
        {matieres.map((matiere) => (
          <SplideSlide key={matiere.id}>
            <MatieresListItem matiere={matiere} />
          </SplideSlide>
        ))}
      </Splide>
      <div className="text-center mt-8">
        <button className="px-8 py-4 bg-blue-500 text-white rounded">CTA</button>
      </div>
    </section>
  );
};

export default SectionMatieres;
