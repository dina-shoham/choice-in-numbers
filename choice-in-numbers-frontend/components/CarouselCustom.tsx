import '../styles/globals.css';
import React, { ReactNode, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import Chevron from './Chevron';

/* TO USE:
the width is a little wonky so stick the <CarouselCustom> inside a div and fiddle with the width until it looks right :/
for a postcard carousel a 260 ish px width works well
guess and check for other stuff!
*/

type CarouselProps = {
  children: ReactNode;
};

export default function CarouselCustom ({ children }: CarouselProps): React.JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [ClassNames()]);

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
      <div className="embla__container">
        {children}
      </div>

      {/* nav */}
      <div className='flex justify-center p-4'>
       <button onClick={scrollPrev}>
        <Chevron Color="accent-dark" Orientation='left' />
      </button>
      <button onClick={scrollNext}>
        <Chevron Color="accent-dark" Orientation='right' />
      </button>
      </div>
    </div>
  );
}