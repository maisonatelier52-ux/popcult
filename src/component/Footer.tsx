import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMediumM,
} from "react-icons/fa";
import { SiSubstack } from "react-icons/si";


export default function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="mx-auto px-8 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <div className="flex">
              <Link href="/" title="home" className="select-none">
                <span className="font-serif font-bold text-[25px] tracking-tight text-white uppercase">
                  PR<span className="font-normal">PROMOTIONHUB</span>
                </span>
              </Link>
            </div>
            {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-white">
  <a
    href="#"
    aria-label="Twitter"
    className="hover:text-gray-400 transition"
  >
    <FaTwitter />
  </a>

  <a
    href="#"
    aria-label="Facebook"
    className="hover:text-gray-400 transition"
  >
    <FaFacebookF />
  </a>

  <a
    href="#"
    aria-label="Instagram"
    className="hover:text-gray-400 transition"
  >
    <FaInstagram />
  </a>

  <a
    href="#"
    aria-label="Medium"
    className="hover:text-gray-400 transition"
  >
    <FaMediumM />
  </a>

  <a
    href="#"
    aria-label="Substack"
    className="hover:text-gray-400 transition"
  >
    <SiSubstack />
  </a>
</div>

            <p className="mt-4 text-sm text-[#555555] leading-relaxed">
        Copyright 2026 PRPROMOTIONHUB. All Rights Reserved.

            </p>
          </div>
          <div className="flex flex-row  gap-7 md:gap-20 mr-40 w-full md:w-auto">
            <div className="space-y-2 flex-1">
              <Link href="/about" title="about" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                About Us
              </Link>
              <Link href="/contact" title="contact" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                Contact
              </Link>
              <Link
                href="/terms-and-conditions"
                title="terms and conditions"
                className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap"
              >
                Terms and Conditions
              </Link>
            </div>

            <div className="space-y-2 flex-1">
              <Link
                href="/editorial"
                title="editorial"
                className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap"
              >
                Editorial Policy
              </Link>

              <Link href="/privacy-policy" title="privacy-policy" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="/faq" title="faq" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                Faq
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
