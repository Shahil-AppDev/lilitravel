import { useState } from 'react';
import { Video, Copy, Check } from 'lucide-react';

interface TikTokScriptCardProps {
  hook: string;
  script: string;
  caption: string;
  hashtags: string;
}

export default function TikTokScriptCard({ hook, script, caption, hashtags }: TikTokScriptCardProps) {
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedCaption, setCopiedCaption] = useState(false);

  const copyToClipboard = async (text: string, type: 'script' | 'caption') => {
    await navigator.clipboard.writeText(text);
    if (type === 'script') {
      setCopiedScript(true);
      setTimeout(() => setCopiedScript(false), 2000);
    } else {
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl p-8 border-2 border-purple-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
          <Video className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">TikTok Script</h3>
      </div>

      <div className="bg-white rounded-2xl p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <h4 className="font-bold text-purple-900 text-lg">Video Hook</h4>
        </div>
        <p className="text-xl font-semibold text-gray-900 italic">"{hook}"</p>
      </div>

      <div className="bg-white rounded-2xl p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <h4 className="font-bold text-purple-900 text-lg">30-Second Script</h4>
          <button
            onClick={() => copyToClipboard(script, 'script')}
            className="flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-xl font-semibold transition-colors"
          >
            {copiedScript ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Script
              </>
            )}
          </button>
        </div>
        <div className="text-gray-700 whitespace-pre-line leading-relaxed">{script}</div>
      </div>

      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-start mb-4">
          <h4 className="font-bold text-purple-900 text-lg">Caption & Hashtags</h4>
          <button
            onClick={() => copyToClipboard(`${caption}\n\n${hashtags}`, 'caption')}
            className="flex items-center gap-2 px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-xl font-semibold transition-colors"
          >
            {copiedCaption ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Caption
              </>
            )}
          </button>
        </div>
        <p className="text-gray-700 mb-4">{caption}</p>
        <p className="text-blue-600 text-sm">{hashtags}</p>
      </div>
    </div>
  );
}
