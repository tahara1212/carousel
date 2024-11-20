import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './EmblaCarousel.module.css';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1000 })])

  // API にアクセスする場合
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes()) // Access API
  //   }
  // }, [emblaApi])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <img src="next.svg" alt="Slide 1" />
        </div>
        <div className={styles.embla__slide}>
          <img src="window.svg" alt="Slide 2" />
        </div>
        <div className={styles.embla__slide}>
          <img src="globe.svg" alt="Slide 3" />
        </div>
      </div>
    </div>
  )
}
