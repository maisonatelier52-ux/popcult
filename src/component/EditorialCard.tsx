  import Image from "next/image";

  export type EditorialCardProps = {
    title: string;
    image: string;
    date: string;
    author: string;
  };

  export default function EditorialCard({
    title,
    image,
    date,
    author,
  }: EditorialCardProps) {
    return (
      <div>
        {/* Image */}
        <div className="relative w-full aspect-[4/3] mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-semibold leading-snug hover:underline cursor-pointer">
          {title}
        </h3>

        {/* Meta */}
        <div className="mt-3 text-sm text-gray-600">
          <div>{date}</div>
          <div className="mt-1">
            By{" "}
            <span className="text-red-600 font-medium hover:underline cursor-pointer">
              {author}
            </span>
          </div>
        </div>
      </div>
    );
  }
