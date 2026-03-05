import { useEffect, useRef, useState } from 'react';

interface TikTokVideoCardProps {
  videoUrl: string;
}

export default function TikTokVideoCard({ videoUrl }: TikTokVideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && window.tiktokEmbed) {
      window.tiktokEmbed.lib.render(containerRef.current);
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 snap-start"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        {isVisible && (
          <blockquote
            className="tiktok-embed"
            cite={videoUrl}
            data-video-id={videoUrl.split('/').pop()}
            style={{ maxWidth: '100%', minWidth: '325px' }}
          >
            <section>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="@lilitravel2"
                href="https://www.tiktok.com/@lilitravel2"
              >
                @lilitravel2
              </a>
            </section>
          </blockquote>
        )}
      </div>
    </div>
  );
}

declare global {
  interface Window {
    tiktokEmbed?: {
      lib: {
        render: (container: HTMLElement | null) => void;
      };
    };
  }
}
