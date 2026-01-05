'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

type Category = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const categories: Category[] = [
  { label: 'Home', href: '/' },
  { label: 'PR News', href: '/prnews' },
  { label: 'World', href: '/world' },
  { label: 'U.S', href: '/us' },
  { label: 'Marketing', href: '/marketing' }, 
  { label: 'Finance', href: '/finance' },
  { label: 'Entertainment', href: '/entertainment' },
  { label: 'Technology', href: '/tech' },
];

export default function CategoriesNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  return (
    <div className="w-full">
      <div className="">
        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6 py-4">
          {/* Grid Icon */}
          <button className="flex items-center w-8 h-8 ">
            <span className="grid grid-cols-2 gap-1">
              <span className="w-2 h-2 border-3 border-black" />
              <span className="w-2 h-2 border-3 border-black" />
              <span className="w-2 h-2 border-3 border-black" />
              <span className="w-2 h-2 border-3 border-black" />
            </span>
          </button>


          {/* Categories */}
          <nav className="flex items-center gap-5 tracking-wide">
            {categories.map((item, index) => (
              <div key={item.label} className="flex items-center gap-5">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 relative pb-1 ${pathname === item.href
                      ? 'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#000080]'
                      : 'hover:text-gray-700'
                    }`}
                >
                  <span className='text-[15px] font-bold'>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Red Square Separator */}
                {index !== categories.length - 1 && (
                  <span className="w-2 h-2 bg-[#000080]" />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between py-4">
          <button onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
          <span className="text-sm font-semibold uppercase">Categories</span>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col gap-4 text-sm font-semibold">
              {categories.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between border-b pb-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
