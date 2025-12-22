interface ResponsiveImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

export default function ArticleImage({ src, alt = "", caption }: ResponsiveImageProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
        />
        {caption && (
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-2 text-center">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
