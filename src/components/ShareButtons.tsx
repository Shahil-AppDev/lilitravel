import { useState } from 'react';
import { Share2, Link, Check } from 'lucide-react';

interface ShareButtonsProps {
  slug: string;
}

export default function ShareButtons({ slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${window.location.origin}/trip/${slug}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    await fetch(`/api/trips/${slug}/share`, { method: 'POST' });
  };

  const shareToSocial = async (platform: string) => {
    await fetch(`/api/trips/${slug}/share`, { method: 'POST' });

    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=Check out my trip plan!`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`Check out my trip plan! ${shareUrl}`)}`,
    };

    window.open(urls[platform], '_blank');
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={copyLink}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
      >
        {copied ? (
          <>
            <Check className="w-5 h-5" />
            Link Copied!
          </>
        ) : (
          <>
            <Link className="w-5 h-5" />
            Copy Share Link
          </>
        )}
      </button>

      <button
        onClick={() => shareToSocial('twitter')}
        className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
      >
        <Share2 className="w-5 h-5" />
        Share on X
      </button>

      <button
        onClick={() => shareToSocial('facebook')}
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
      >
        <Share2 className="w-5 h-5" />
        Facebook
      </button>

      <button
        onClick={() => shareToSocial('whatsapp')}
        className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
      >
        <Share2 className="w-5 h-5" />
        WhatsApp
      </button>
    </div>
  );
}
