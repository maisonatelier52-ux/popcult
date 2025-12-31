// Add this at the top of your file to make this a Client Component
"use client";

import { FaFacebookF, FaLink, FaTwitter } from "react-icons/fa";

interface ShareArticleProps {
  url: string;
  title?: string;
}

export default function ShareArticle({ url, title = "Share This Article" }: ShareArticleProps) {
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-4 mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
      <span className="font-semibold text-sm">{title}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={copyLink}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition"
          title="Copy Link"
        >
          <FaLink />
        </button>
        <button
          onClick={shareToFacebook}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition"
          title="Share on Facebook"
        >
          <FaFacebookF />
        </button>
        <button
          onClick={shareToTwitter}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition"
          title="Share on Twitter"
        >
          <FaTwitter />
        </button>
      </div>
    </div>
  );
}
