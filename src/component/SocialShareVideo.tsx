"use client";

import { useEffect, useState } from "react";
import { FiShare } from "react-icons/fi";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaRedditAlien,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

/* ----------------------------- */
/* Types                         */
/* ----------------------------- */
interface VideoData {
  title: string;
  url: string;
  poster?: string;
}

interface Props {
  video: VideoData;
}

export default function SocialShareVideo({ video }: Props) {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const encodedPageUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(video.title);
  const encodedVideoUrl = encodeURIComponent(video.url);

  return (
    <div className="flex items-center py-5 gap-3 text-sm text-black flex-wrap">
      {/* Share label */}
      <div className="flex items-center gap-1 text-sm">
        <FiShare className="text-base" />
        <span>Share</span>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2 flex-wrap">

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodedTitle}%0A${encodedPageUrl}%0A%0AVideo:%20${encodedVideoUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CircleIcon>
            <FaWhatsapp />
          </CircleIcon>
        </a>

        {/* X */}
      <a
  href={`https://twitter.com/intent/tweet?text=${encodedTitle}%0A%0AVideo:%20${encodedVideoUrl}%0A${encodedPageUrl}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <CircleIcon>
    <SiX />
  </CircleIcon>
</a>


        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedPageUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CircleIcon>
            <FaFacebookF />
          </CircleIcon>
        </a>


        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedPageUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CircleIcon>
            <FaLinkedinIn />
          </CircleIcon>
        </a>

        {/* Reddit */}
        <a
          href={`https://www.reddit.com/submit?url=${encodedPageUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CircleIcon>
            <FaRedditAlien />
          </CircleIcon>
        </a>

      </div>
    </div>
  );
}

/* ----------------------------- */
/* Circle Icon                   */
/* ----------------------------- */
function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:opacity-70 transition">
      {children}
    </div>
  );
}
