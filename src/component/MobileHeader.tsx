import Link from 'next/link';
import Image from 'next/image';
import { FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const categories = [
  { name: 'Politics', link: '/politics' },
  { name: 'Business', link: '/business' },
  { name: 'World', link: '/world' },
  { name: 'US', link: '/us' },
  { name: 'Entertainment', link: '/entertainment' },
];

export default function MobileHeader() {


  return (
    <header className="w-full bg-black dark:bg-white text-white dark:text-black transition-colors">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src='/images/popcult-white-logo.png'
            alt="POPCULT Logo"
            width={170}
            height={50}
            className="object-contain"
          />
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
          <Link key={item.link} href={item.link} className="flex-shrink-0">
            {item.name.toUpperCase()}
          </Link>
        ))}
      </div>
    </header>
  );
}
