'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import VideoPlayer from '../VideoPlayer';

export default function Carousel({
  className = '',
  multimedia,
}: {
  className?: string;
  multimedia: string[];
}) {
  const [emblaRef] = useEmblaCarousel();
  const filteredMedia = multimedia.filter(value => value.startsWith('http'));

  if (!filteredMedia || !filteredMedia.length) {
    return null;
  }

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      <div className='flex max-h-full'>
        {filteredMedia
          .map((mediaUrl, index) => (
            <div key={index} className='flex-[0_0_100%] min-w-0 max-h-full'>
              <div className='w-full h-full flex justify-center items-center'>
                {mediaUrl.includes('mp4') ? (
                  <VideoPlayer
                    type='video/mp4'
                    className='w-full h-full'
                    src={mediaUrl}
                    controls
                  />
                ) : (
                  <Image
                    src={mediaUrl}
                    alt='xd'
                    className='h-full w-full object-contain'
                    width={100}
                    height={100}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
