import { MessageCircle } from 'lucide-react';

export default function TikTokChatButton() {
  const handleChatClick = () => {
    window.open('https://www.tiktok.com/@lilitravel2', '_blank');
  };

  return (
    <button
      onClick={handleChatClick}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
      aria-label="Chat with Lilitravel on TikTok"
    >
      <MessageCircle className="w-5 h-5" />
      Discuter sur TikTok
    </button>
  );
}
