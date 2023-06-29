'use client';
import useEmblaCarousel from 'embla-carousel-react';
import VideoPlayer from '../VideoPlayer';
import styles from './Carousel.module.css';

export default function Carousel({
  className = '',
  multimedia,
}: {
  className?: string;
  multimedia: string[];
}) {
  const [emblaRef] = useEmblaCarousel();

  if (!multimedia.length) {
    return null;
  }

  return (
    <div className={`${styles.embla} ${className}`} ref={emblaRef}>
      <div className={styles.embla__container}>
        {multimedia.map((mediaUrl, index) => (
          <div key={index} className={styles.embla__slide}>
            <div className='w-full h-full flex justify-center items-center'>
              {mediaUrl.includes('mp4') ? (
                <VideoPlayer
                  type='video/mp4'
                  className='w-full h-full'
                  src={mediaUrl}
                  controls
                />
              ) : (
                <img src={mediaUrl} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
