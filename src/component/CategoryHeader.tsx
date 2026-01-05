
type CategoryHeaderProps = {
  category: string;
};
export default function CategoryHeader({category}:CategoryHeaderProps) {


  return (
    <header className={` py-5  px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
      {/* Vertical lines background */}
      <div className="absolute inset-0 flex">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className='flex-1 border-r border-gray-800'
            style={{ minWidth: '1px' }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <h1 className="text-[35px] md:text-[40px] font-bold capitalize">
         {category}
        </h1>
      </div>
    </header>
  );
}