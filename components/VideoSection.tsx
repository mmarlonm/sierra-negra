'use client';

import VideoPlayer from './VideoPlayer';

export default function VideoSection() {
  return (
    <section id="video" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-medium mb-6">
            <span className="text-gradient">Experiencia Visual</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
            Sumérgete en la belleza de la Sierra Negra a través de este video
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="card-modern p-2">
            <VideoPlayer
              src="/sierra-negra/images/gallery/sierra-negra-video.mp4"
              poster="/sierra-negra/images/hero/cacaloc_zoquitlan.jpg"
              title="Sierra Negra - Un Paraíso Natural"
            />
          </div>
        </div>
      </div>
    </section>
  );
}




