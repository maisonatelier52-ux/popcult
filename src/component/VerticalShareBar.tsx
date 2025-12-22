import { FaFacebookF, FaTwitter, FaLink, FaEllipsisH } from "react-icons/fa";

interface VerticalShareBarProps {
  url: string;
}

export default function VerticalShareBar({ url }: VerticalShareBarProps) {
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="fixed top-1/3 left-4 hidden sm:flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md divide-y divide-gray-200 z-50">
      {/* Top Label */}
      <div className="p-2 text-sm font-semibold">SHARE</div>

      {/* Buttons */}
      <button
        onClick={copyLink}
        className="p-3 hover:bg-gray-100 transition flex justify-center items-center w-full"
        title="Copy Link"
      >
        <FaLink />
      </button>
      <button
        onClick={shareToTwitter}
        className="p-3 hover:bg-gray-100 transition flex justify-center items-center w-full"
        title="Share on Twitter"
      >
        <FaTwitter />
      </button>
      <button
        onClick={shareToFacebook}
        className="p-3 hover:bg-gray-100 transition flex justify-center items-center w-full"
        title="Share on Facebook"
      >
        <FaFacebookF />
      </button>
      <button
        onClick={() => alert("More options")}
        className="p-3 hover:bg-gray-100 transition flex justify-center items-center w-full"
        title="More"
      >
        <FaEllipsisH />
      </button>
    </div>
  );
}
