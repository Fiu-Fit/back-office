'use client';

import { useEffect, useRef } from 'react';
import ErrorModal from './ErrorModal';

export default function VideoPlayer({
  src,
  type,
  controls = true,
  className,
}: {
  src: string;
  type: string;
  controls?: boolean;
  className?: string;
}) {
  const sourceRef = useRef<HTMLSourceElement | null>(null);
  const errorModalRef = useRef<HTMLInputElement | null>(null);

  const handleError = () => {
    errorModalRef?.current?.click();
  };

  useEffect(() => {
    if (sourceRef.current) {
      sourceRef.current.addEventListener('error', handleError);
    }
  }, [sourceRef]);

  return (
    <>
      <video className={className} controls={controls} playsInline>
        <source src={src} type={type} ref={sourceRef} />
      </video>
      <ErrorModal
        innerRef={errorModalRef}
        title='Oops... ocurrio un error'
        error='Error al cargar el video.'
        id='playback-error-modal'
      />
    </>
  );
}
