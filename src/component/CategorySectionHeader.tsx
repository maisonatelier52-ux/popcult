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
        <div className="border-t-4 border-black px-8 py-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-red-600">
            {title}
          </h2>
        </div>
      </div>

      {/* Line */}
      <div className="flex-1 border-t border-black" />
    </div>
  );
}
