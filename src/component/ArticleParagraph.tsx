interface ArticleParagraphProps {
  text: string;
}

export default function ArticleParagraph({ text }: ArticleParagraphProps) {
  return (
    <div className="w-full">
      <p className="text-lg leading-relaxed text-black mb-6">
        {text}
      </p>

      {/* Bottom divider */}
      <div className="w-full h-px bg-[#041f4a]" />
    </div>
  );
}
