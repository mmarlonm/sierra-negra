'use client';

import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, title, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleError = () => {
      setHasError(true);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('error', handleError);
    
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Show placeholder if video has error or doesn't exist
  if (hasError) {
    return (
      <div className={`video-container ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5016] via-[#4A7C2F] to-[#87A96B] flex items-center justify-center rounded-2xl">
          <div className="text-center text-white p-8">
            <div className="text-6xl mb-4">🎬</div>
            <div className="text-xl font-bold mb-2">{title || 'Video de la Sierra Negra'}</div>
            <div className="text-sm opacity-80 mb-4">Agrega un video en /public/videos/</div>
            <div className="text-xs opacity-60">Formato recomendado: MP4, WebM</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`video-container group ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
      />
      
      {/* Placeholder overlay when not playing */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5016]/80 via-[#4A7C2F]/80 to-[#87A96B]/80 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🎬</div>
            <div className="text-xl font-bold mb-2">{title || 'Video de la Sierra Negra'}</div>
            <div className="text-sm opacity-90">Haz clic para reproducir</div>
          </div>
        </div>
      )}
      
      {/* Overlay Controls */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group hover:bg-black/30 transition-colors">
        <button
          onClick={togglePlay}
          className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all transform hover:scale-110 shadow-lg"
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? (
            <svg className="w-8 h-8 text-[#2D5016]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-8 h-8 text-[#2D5016] ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-3">
          {/* Progress Bar */}
          <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M17 10l2 2m0 0l2 2m-2-2l-2 2m2-2l2-2" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {title && (
        <div className="absolute top-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold drop-shadow-lg">{title}</h3>
        </div>
      )}
    </div>
  );
}

