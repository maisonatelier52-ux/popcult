import Image from 'next/image';

interface ArticleImageProps {
  src: string;
  alt: string;
}

export default function ArticleImage({
  src,
  alt,
}: ArticleImageProps) {
      const cleanedSrc = src.trimEnd();
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src={cleanedSrc}
        alt={alt}
        width={900}
        height={675}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}
