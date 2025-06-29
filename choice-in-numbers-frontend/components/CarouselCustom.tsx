import '../styles/globals.css';
import React, { ReactNode, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Chevron from './Chevron';

export default function CarouselCustom (): React.JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    console.log("prev")
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    console.log("next")
  }, [emblaApi])

  return (
     <div className="embla" ref={emblaRef}>
      <div className="embla__container gap-4">
        <div className="embla__slide bg-accent-dark p-4">Slide 1</div>
        <div className="embla__slide bg-accent-light p-4">Slide 2</div>
        <div className="embla__slide bg-grey-dark p-4">Slide 3</div>
      </div>
       <button className="embla__prev" onClick={scrollPrev}>
        <Chevron Color="accent-dark" Orientation='left' />
      </button>
      <button className="embla__next" onClick={scrollNext}>
        <Chevron Color="accent-dark" Orientation='right' />
      </button>
    </div>
  );
}