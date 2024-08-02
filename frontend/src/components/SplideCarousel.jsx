import React, { useState, useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import MetiersListItem from './metiers/MetiersListItem';

const SplideCarousel = ({ slides }) => {
  const [centerIndex, setCenterIndex] = useState(0);
  const splideRef = useRef();

  if (!Array.isArray(slides) || slides.length === 0) {
    console.error('Invalid slides prop:', slides);
    return <div>Chargement des diapositives...</div>;  // Afficher un message d'attente ou d'erreur
  }

  const options = {
    type: 'loop',
    perPage: 5,
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
        perPage: 3,
      },
      1400: {
        perPage: 4,
      }
    },
  };

  const handleMove = () => {
    if (splideRef.current) {
      const realIndex = splideRef.current.splide.index % slides.length;
      setCenterIndex(realIndex);
    }
  };

  useEffect(() => {
    const splide = splideRef.current.splide;
    splide.on('moved', handleMove);
    splide.on('updated', handleMove);

    return () => {
      splide.off('moved', handleMove);
      splide.off('updated', handleMove);
    };
  }, [slides]);

  return (
    <div className="relative">
      <Splide ref={splideRef} options={options}>
        {slides.map((metier, index) => (
          <SplideSlide key={metier.id}>
            <MetiersListItem metier={metier} isCenterSlide={index === centerIndex} />
          </SplideSlide>
        ))}
      </Splide>
      <div className="relative">
        <div className="outline-4 absolute w-full text-center font-secondary uppercase" style={{ top: '-28.5rem', right: '2rem', zIndex: '-1' }}>
          {slides[centerIndex] && (
            <h2
              className="title-metier-mobile text-3xl justify-center mx-auto items-center font-bold"
              style={{
                fontSize: '75px',
                lineHeight: '1',
                fontWeight: '900',
                color: 'transparent',
                WebkitTextStrokeWidth: '2px',
                WebkitTextStrokeColor: slides[centerIndex].attributes.metier_color,
              }}
            >
              {(() => {
                const words = slides[centerIndex].attributes.metier_title.split(' ');
                return (
                  <>
                    <span className="block">{words[0]}</span>
                    <span className="block">{words.slice(1).join(' ')}</span>
                  </>
                );
              })()}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplideCarousel;
