import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import MetiersListItem from './metiers/MetiersListItem';

const SplideCarousel = ({ slides }) => {
  const [centerIndex, setCenterIndex] = useState(0);

  const options = {
    type: 'loop',
    perPage: 5,
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

  const handleMove = (splide, newIndex) => {
    setCenterIndex(newIndex);
  };

  return (
    <div className="relative">
      <Splide options={options} onMoved={handleMove}>
        {slides.map((metier, index) => (
          <SplideSlide key={metier.id}>
            <MetiersListItem metier={metier} isCenterSlide={index === centerIndex} />
          </SplideSlide>
        ))}
      </Splide>
      <div className="relative">
        <div className="outline-4 absolute w-full text-center font-secondary uppercase" style={{ top: '-26.5rem', right: '2rem', zIndex: '-1' }}>
          {slides[centerIndex] && (
            <h2
              className="text-3xl justify-center mx-auto items-center font-bold"
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
