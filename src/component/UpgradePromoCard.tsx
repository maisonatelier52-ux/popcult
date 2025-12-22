type UpgradePromoCardProps = {
  brand?: string;
};

export default function UpgradePromoCard({
  brand = "FOXIZ",
}: UpgradePromoCardProps) {
  return (
    <aside className="w-full max-w-sm border border-black p-6 flex flex-col">
      {/* Top thick border */}
      <div className="border-t-4 border-black mb-6" />

      {/* Content */}
      <div className="flex-1">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
          Upgrade to{" "}
          <span className="inline-block bg-red-600 text-white px-2 py-1">
            {brand}
          </span>{" "}
          today and take advantage of these fantastic updates!
        </h2>
      </div>

      {/* Button */}
      <button className="mt-10 bg-red-600 text-white py-3 text-sm font-semibold uppercase tracking-wide hover:bg-red-700 transition">
        Learn More
      </button>
    </aside>
  );
}
