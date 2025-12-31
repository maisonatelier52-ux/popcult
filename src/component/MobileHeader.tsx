'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaMoon } from 'react-icons/fa';
import Image from 'next/image';

const categories = [
    { name: 'Politics', link: '/politics' },
    { name: 'Business', link: '/business' },
    { name: 'World', link: '/world' },
    { name: 'US', link: '/us' },
    { name: 'Entertainment', link: '/entertainment' },
    { name: 'US', link: '/us' }
];

export default function MobileHeader() {
    const [dark, setDark] = useState(false);
    return (
        <header className="w-full bg-black text-white">

            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/images/popcult-white-logo.png"
                        alt="POPCULT Logo"
                        width={170}
                        height={50}
                        className="object-contain"
                    />
                </Link>

                {/* Right icons */}
                <div className="flex items-center gap-4">
                    <button
                        aria-label="Toggle mode"
                        onClick={() => setDark(!dark)}
                        className="
        relative w-12 h-6 rounded-full
        bg-[#1a1a1a]
        flex items-center
        transition-colors duration-300
      "
                    >
                        {/* Moving Circle */}
                        <span
                            className={`
          absolute top-0.5
          w-5 h-5 rounded-full
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          ${dark ? 'bg-[#FF0F0F] translate-x-6' : 'bg-white translate-x-1'}
        `}
                        >
                            {dark ? (
                                <FaMoon className="text-white text-[10px]" />
                            ) : (
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="1.5"
                                >
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="12" y1="1" x2="12" y2="5" />
                                    <line x1="12" y1="19" x2="12" y2="23" />
                                    <line x1="1" y1="12" x2="5" y2="12" />
                                    <line x1="19" y1="12" x2="23" y2="12" />
                                    <line x1="4.2" y1="4.2" x2="7" y2="7" />
                                    <line x1="17" y1="17" x2="19.8" y2="19.8" />
                                    <line x1="17" y1="7" x2="19.8" y2="4.2" />
                                    <line x1="4.2" y1="19.8" x2="7" y2="17" />
                                </svg>
                            )}
                        </span>
                    </button>
                    <button
                        aria-label="Menu"
                        className="flex flex-col items-end justify-center gap-1"
                    >
                        <span className="h-[2px] w-6 bg-white" />
                        <span className="h-[2px] w-4 bg-white" />
                        <span className="h-[2px] w-3 bg-white" />
                    </button>

                </div>
            </div>

            {/* Category bar */}
            <div>
                <div
                    className="
            flex gap-6 px-4 py-2
            text-[15px] font-bold
            overflow-x-auto whitespace-nowrap
          "
                >
                    {categories.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="flex-shrink-0"
                        >
                            {item.name.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </div>

        </header>
    );
}
