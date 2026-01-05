'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaRss,
  FaMediumM,
  FaTag,
  FaEnvelope,
  FaSearch,
} from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import { Menu, X } from 'lucide-react';

import CategoriesNav from './CategoriesNav';
import MobileHeader from './MobileHeader';

const categories = [
  'About',
  'Contact',
  'Terms of Use'
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">

      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden border-b border-black">

        <MobileHeader />
      </div>



      {/* ================= DESKTOP HEADER (UNCHANGED) ================= */}
      <div className="hidden lg:block ">
        <div className="w-full  py-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Top info bar */}
            <div className="flex items-center justify-between py-2 text-sm text-gray-600">
              <div className="flex items-center gap-4">
                <span className="text-[14.4px] font-outfit font-bold text-black">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </span>


                <span className="h-6 w-px bg-gray-300" />

                <span className="flex gap-3">
                  {categories.map((item, index) => (
                    <Link key={item} href="#" className="flex items-center gap-3">
                      {index !== 0 && (
                        <span className="w-2 h-2 bg-[#041f4a] inline-block" />
                      )}
                      <span className="text-[14px] text-black">{item}</span>
                    </Link>
                  ))}
                </span>
              </div>

              <div className="flex items-center gap-4 text-black">
                <FaTwitter className="text-lg hover:opacity-70" />
                <FaInstagram className="text-lg hover:opacity-70" />
                <FaMediumM className="text-lg hover:opacity-70" />
                <SiSubstack className="text-lg hover:opacity-70" />
                <FaFacebookF className="text-lg hover:opacity-70" />
              </div>
            </div>

          {/* Logo row */}
        <div className="grid grid-cols-3 items-center py-2">

  <div />

  {/* Center Logo */}
  <div className="flex justify-center">
    <Link href="/" className="select-none">
      <span className="font-serif font-bold text-[32px] tracking-tight text-black uppercase">
        PR<span className="font-normal">PROMOTIONHUB</span>
      </span>
    </Link>
  </div>

  {/* Newsletter – TRUE END */}
  <div className="flex items-center justify-end justify-self-end text-[15px] font-semibold text-black">
    <Link
      href="#"
      className="flex items-center gap-2 rounded-md border border-black px-4 py-1 transition"
    >
      <FaEnvelope className="text-sm" />
      Newsletter
    </Link>
  </div>

</div>

        </div>
       
       <div className='border-b border-[#88888888]'></div>
       <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        <CategoriesNav />
       </div>
      </div>

    </header>
  );
}
