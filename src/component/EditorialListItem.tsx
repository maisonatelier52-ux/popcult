interface EditorialListItemProps {
  image: string;
  category: string;
  title: string;
  index?: number;
}

export default function EditorialListItem({
  image,
  category,
  title,
  index,
}: EditorialListItemProps) {
  return (
    <article className="flex items-start gap-4 w-full">
      {/* Image */}
      <div className="relative flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Category */}
        <span className="inline-block bg-[#041f4a] text-white text-xs font-semibold px-2 py-1 mb-2">
          {category}
        </span>

        {/* Title */}
        <h3 className="font-serif text-base sm:text-lg font-bold leading-snug hover:underline cursor-pointer">
          {title}
        </h3>
      </div>

      {/* Optional Index Number */}
      {index !== undefined && (
        <span className="hidden sm:block text-5xl font-serif text-gray-200 leading-none">
          {index}
        </span>
      )}
    </article>
  );
}
