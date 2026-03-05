import { useEffect } from 'react';
import TikTokVideoCard from './TikTokVideoCard';

const tiktokVideos = [
  'https://www.tiktok.com/@lilitravel2/video/7613589681715940641',
  'https://www.tiktok.com/@lilitravel2/video/7613242565676092694',
  'https://www.tiktok.com/@lilitravel2/video/7612480476502052118',
  'https://www.tiktok.com/@lilitravel2/video/7612466047479745814',
  'https://www.tiktok.com/@lilitravel2/video/7612163922430414102',
];

export default function TikTokCarousel() {
  useEffect(() => {
    if (!document.getElementById('tiktok-embed-script')) {
      const script = document.createElement('script');
      script.id = 'tiktok-embed-script';
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.tiktokEmbed) {
          window.tiktokEmbed.lib.render(document.body);
        }
      };
    } else if (window.tiktokEmbed) {
      window.tiktokEmbed.lib.render(document.body);
    }
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
          Lili's Latest TikTok Adventures
        </h2>
        <p className="text-gray-600 text-lg">
          Follow along for travel tips, destination guides & behind-the-scenes
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto gap-0 snap-x snap-mandatory scrollbar-hide pb-4 -mx-3">
          {tiktokVideos.map((videoUrl, index) => (
            <TikTokVideoCard key={index} videoUrl={videoUrl} />
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {tiktokVideos.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 transition-all"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
        <a
          href="https://www.tiktok.com/@lilitravel2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
          Follow @lilitravel2
        </a>
        
        <TikTokChatButton />
      </div>
    </section>
  );
}

declare global {
  interface Window {
    tiktokEmbed?: {
      lib: {
        render: (container: HTMLElement | Document) => void;
      };
    };
  }
}
