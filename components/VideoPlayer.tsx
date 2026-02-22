'use client';

import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  dict: {
    error_loading: string;
    not_supported: string;
    watch_video: string;
  };
}

export default function VideoPlayer({ src, poster, title, className = '', dict }: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => {
      setHasError(true);
    };

    setHasError(false);
    video.addEventListener('error', handleError);
    
    return () => {
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    
    setIsStarted(true);
    video.play().catch(err => {
      console.error("Error attempting to play:", err);
    });
  };

  if (hasError) {
    return (
      <div className={`video-container ${className} bg-gray-100 flex items-center justify-center rounded-2xl aspect-video`}>
        <div className="text-center text-gray-500 p-8">
          <div className="text-4xl mb-4">⚠️</div>
          <div className="text-lg">{dict.error_loading}</div>
          <code className="text-xs mt-2 block bg-gray-200 p-1 rounded">{src}</code>
        </div>
      </div>
    );
  }

  return (
    <div className={`video-container relative rounded-2xl overflow-hidden shadow-2xl bg-black ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={isStarted}
        playsInline
        className="w-full h-full object-cover aspect-video"
      >
        <source src={src} type="video/mp4" />
        {dict.not_supported}
      </video>

      {!isStarted && (
        <div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer group"
          onClick={handlePlayClick}
        >
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 shadow-lg backdrop-blur-sm">
            <svg 
              className="w-8 h-8 text-[#2D5016] ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          {title && (
            <h3 className="text-white text-xl font-bold drop-shadow-md px-4 text-center">
              {title}
            </h3>
          )}
          <p className="text-white/90 text-sm mt-2 font-medium drop-shadow-md">
            {dict.watch_video}
          </p>
        </div>
      )}
    </div>
  );
}

