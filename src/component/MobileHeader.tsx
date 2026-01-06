import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'PR News', link: '/prnews' },
  { name: 'Finance', link: '/finance' },
  { name: 'World', link: '/world' },
  { name: 'US', link: '/us' },
  { name: 'Marketing', link: '/marketing' },
  { name: 'Technology', link: '/tech' },

];

export default function MobileHeader() {


  return (
    <header className="w-full bg-black dark:bg-white text-white dark:text-black transition-colors">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" title='home'>
         <span className="font-serif font-bold text-[22px] tracking-tight text-white uppercase">
                  PR<span className="font-normal">PROMOTIONHUB</span>
                </span>
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4">

       

          {/* Menu icon */}
          <button className="flex flex-col items-end gap-1">
            <span className="h-[2px] w-6 bg-current" />
            <span className="h-[2px] w-4 bg-current" />
            <span className="h-[2px] w-3 bg-current" />
          </button>
        </div>
      </div>

      {/* Category bar */}
      <div className="flex gap-6 px-4 py-2 text-[15px] font-bold overflow-x-auto whitespace-nowrap">
        {categories.map((item) => (
          <Link key={item.link} href={item.link} title={item.name} className="flex-shrink-0">
            {item.name.toUpperCase()}
          </Link>
        ))}
      </div>
    </header>
  );
}
