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

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((metier, index) => (
                        <div className={`embla__slide`} key={metier.id}>
                            <MetiersListItem metier={metier} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__controls">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={"embla__dot".concat(
                                index === selectedIndex ? " embla__dot--selected" : ""
                            )}
                        />
                    ))}
                </div>
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </section>
    );
};

export default EmblaCarousel;
