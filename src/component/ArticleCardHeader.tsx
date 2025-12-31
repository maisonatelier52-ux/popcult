type CategorySectionHeaderProps = {
  title: string;
};

export default function ArticleCardHeader({
  title,
}: CategorySectionHeaderProps) {
  return (
    <div className="w-full flex items-center">
      {/* Label box */}
      <div className="border border-black">
        <div className="border-t-4 border-black px-20 py-1">
          <h2 className="text-[18px] font-semibold">
            {title}
          </h2> 
        </div>
      </div>
    </div>
  );
}
