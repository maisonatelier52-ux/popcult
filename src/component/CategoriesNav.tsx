'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';

type Category = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const categories: Category[] = [
  { label: 'HOME', href: '/' },
  { label: 'NEW LOOK', href: '/new-look' },
  { label: 'CELEBRITY BUZZ', href: '/celebrity-buzz' },
  { label: 'FASHION', href: '/fashion' },
  { label: 'MOVIES & TV', href: '/movies-tv' },
  { label: 'CULTURE', href: '/culture' },
  { label: 'PAGES', href: '/pages' },
];

export default function CategoriesNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border-gray-200 bg-white">
      <div className="mx-auto px-4">
        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6 py-4">
          {/* Grid Icon */}
         <button className="flex items-center justify-center w-8 h-8 ">
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
                  className={`flex items-center gap-1 relative pb-1 ${
                    item.label === 'HOME'
                      ? 'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-red-600'
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
                  <span className="w-2 h-2 bg-red-600" />
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
