'use client';

import VideoPlayer from './VideoPlayer';

interface VideoSectionProps {
  dict: {
    tag: string;
    title: string;
    accent: string;
    description: string;
    error_loading: string;
    not_supported: string;
    watch_video: string;
  };
}

export default function VideoSection({ dict }: VideoSectionProps) {
  return (
    <section id="video" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block text-[#2D5016] text-[10px] font-black uppercase tracking-[0.3em] bg-[#2D5016]/5 px-4 py-2 rounded-full mb-2 border border-[#2D5016]/10">
            {dict.tag}
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight">
            {dict.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5016] to-[#87A96B]">{dict.accent}</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed font-light">
            {dict.description}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="card-modern p-2">
            <VideoPlayer
              src="/sierra-negra/images/gallery/sierra-negra-video.mp4"
              poster="/sierra-negra/images/hero/cacaloc_zoquitlan.jpg"
              title={`${dict.title} ${dict.accent}`}
              dict={dict}
            />
          </div>
        </div>
      </div>
    </section>
  );
}




