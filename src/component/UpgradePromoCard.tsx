import Image from "next/image";
import Link from "next/link";

export default function UpgradePromoCard() {
  return (
    <aside className="w-full">
      {/* Top spacer */}
      <div className="mb-6" />

      {/* Clickable Image */}
      <Link
        href="https://newsflashpro.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full cursor-pointer"
      >
        <div className="w-full">
          <Image
            src="/images/newsflashpro.jpeg"
            alt="NewsFlashPro Ad"
            width={1200}
            height={500}
            className="
              w-full
              h-[500px] sm:h-[320px] md:h-auto
              object-contain
            "
            priority
          />
        </div>
      </Link>
    </aside>
  );
}
