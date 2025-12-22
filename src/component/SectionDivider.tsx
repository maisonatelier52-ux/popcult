interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="w-full flex justify-center my-10">
      <div className="w-full max-w-5xl">
        {/* Top Thick Border */}
        <div className="border-t-4 border-black mb-3" />

        {/* Center Label */}
        <div className="flex justify-center">
          <div className="border border-black px-10 py-2">
            <span className="font-serif text-sm font-bold tracking-wide uppercase">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
