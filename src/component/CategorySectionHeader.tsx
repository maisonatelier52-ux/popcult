type CategorySectionHeaderProps = {
  title: string;
};

export default function CategorySectionHeader({
  title,
}: CategorySectionHeaderProps) {
  return (
    <div className="w-full flex items-center">
      {/* Label box */}
      <div className="border border-black">
        <div className="border-t-4 border-black px-6 md:px-8 py-0 md:py-1">
          <h2 className="text-[18px] sm:text-3xl font-bold text-[#041f4a]">
            {title}
          </h2>
        </div>
      </div>

      {/* Line */}
      <div className="flex-1 border-t border-black" />
    </div>
  );
}
