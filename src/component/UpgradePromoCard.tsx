type UpgradePromoCardProps = {
  brand?: string;
};

export default function UpgradePromoCard({
  brand = "FOXIZ",
}: UpgradePromoCardProps) {
  return (
    <aside className="w-full max-w-sm border border-black border-t-6 p-6 flex flex-col">
      {/* Top thick border */}
      <div className="mb-6" />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-[30px] md:text-[40px] font-bold leading-tight">
          Upgrade to{" "}
          <span className="inline-block bg-[#2860c8] text-white px-2 py-1">
            {brand}
          </span>{" "}
          today and take advantage of these fantastic updates!
        </h2>
      </div>

      {/* Button */}
      <button className="mt-6 bg-[#000080] text-white py-3 text-sm font-semibold tracking-wide hover:bg-red-700 transition">
        Learn More
      </button>
    </aside>
  );
}
