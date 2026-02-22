'use client';

import { useState } from 'react';

const SUGGESTIONS_DATA = [
  { id: 1, icon: '👕', color: 'from-blue-500 to-cyan-500' },
  { id: 2, icon: '💧', color: 'from-cyan-500 to-blue-600' },
  { id: 3, icon: '📸', color: 'from-purple-500 to-pink-500' },
  { id: 4, icon: '🌿', color: 'from-green-500 to-emerald-600' },
  { id: 5, icon: '🌤️', color: 'from-yellow-400 to-orange-500' },
  { id: 6, icon: '👥', color: 'from-indigo-500 to-purple-600' }
];

interface SuggestionsProps {
  dict: {
    tag: string;
    title: string;
    accent: string;
    description: string;
    all: string;
    items: {
      [key: string]: {
        category: string;
        title: string;
        description: string;
      };
    };
  };
}

export default function Suggestions({ dict }: SuggestionsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(dict.all);

  const suggestions = SUGGESTIONS_DATA.map(data => ({
    ...data,
    ...dict.items[data.id.toString()]
  })).filter(s => s.title); // Filter out items not in dictionary

  const categories = [dict.all, ...Array.from(new Set(suggestions.map(s => s.category)))];

  const filteredSuggestions = selectedCategory === dict.all 
    ? suggestions 
    : suggestions.filter(s => s.category === selectedCategory);

  return (
    <section id="sugerencias" className="section bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D5016]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block text-[#2D5016] text-[10px] font-black uppercase tracking-[0.3em] bg-green-50 px-4 py-2 rounded-full mb-3 border border-[#2D5016]/10">
            {dict.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight mb-4">
            {dict.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5016] to-[#87A96B]">{dict.accent}</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            {dict.description}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#2D5016] text-white shadow-lg shadow-green-900/20 transform scale-105'
                  : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuggestions.map((suggestion, index) => (
            <div 
              key={suggestion.id} 
              className="group relative bg-white border border-gray-200 rounded-[2rem] p-8 transition-all duration-300 hover:shadow-xl hover:border-[#2D5016]/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${suggestion.color} flex items-center justify-center text-3xl shadow-sm text-white transition-transform duration-300 group-hover:scale-110`}>
                  <span className="drop-shadow-sm filter">{suggestion.icon}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2D5016] bg-[#2D5016]/5 px-3 py-1 rounded-full">
                  {suggestion.category}
                </span>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-[#2D5016] transition-colors">
                {suggestion.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed text-sm font-light">
                {suggestion.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
