import React, { useEffect, useCallback } from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import MetiersListItem from '../metiers/MetiersListItem';

const EmblaCarousel = ({ slides = [], options, onSlideChange }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const centerIndex = emblaApi.selectedScrollSnap();
    onSlideChange(centerIndex);
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  const getSlideClassName = (index) => {
    if (!emblaApi) return { className: '', distance: Infinity };
    const selectedIndex = emblaApi.selectedScrollSnap();
    const distance = Math.abs(selectedIndex - index);
  
    if (distance === 3) return { className: 'embla__slide--center', distance };
    if (distance === 1 || distance === 5) return { className: 'embla__slide--near', distance };
    if (distance === 2 || distance === 4) return { className: 'embla__slide--far', distance };
    return { className: 'embla__slide--hidden', distance };
  };
  
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((metier, index) => {
            const { className, distance } = getSlideClassName(index);
            return (
              <div className={`embla__slide ${className}`} key={metier.id}>
                <MetiersListItem metier={metier} isCenter={distance === 0} />
              </div>
            );
          })}
        </div>
      </div>
  
      <div className="embla__controls">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );  
}  

export default EmblaCarousel;
