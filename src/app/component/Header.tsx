'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

const categories = [
  'Entertainment',
  'Culture',
  'Celebrity Buzz',
  'Movies & TV',
  'Lifestyle',
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200">
      {/* Top Bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-2 text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <span className="font-medium text-black">
            Wednesday, Dec 3, 2025
          </span>
          <span className="flex gap-3">
            {categories.map((item) => (
              <Link
                key={item}
                href="#"
                className="flex items-center gap-1 hover:text-black"
              >
                <span className="w-2 h-2 bg-red-600 inline-block" />
                {item}
              </Link>
            ))}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-black">Advertise</Link>
          <Link href="#" className="hover:text-black">Deal</Link>
          <Link href="#" className="hover:text-black">Contact</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          POPCULT<span className="text-red-600">●</span>
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:block border px-3 py-1 rounded-md text-sm font-medium">
            Newsletter
          </button>
          <Search className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 lg:hidden">
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold">
              POPCULT<span className="text-red-600">●</span>
            </span>
            <button onClick={() => setMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-lg">
            {categories.map((item) => (
              <Link
                key={item}
                href="#"
                className="border-b pb-2"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3 text-sm">
            <Link href="#">Advertise</Link>
            <Link href="#">Deal</Link>
            <Link href="#">Contact</Link>
            <button className="border px-4 py-2 rounded-md mt-4">
              Newsletter
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
