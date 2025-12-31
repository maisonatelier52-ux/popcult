import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">

          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <Image 
              src="/images/popcult-white-logo.png"  
              alt="POPCULT Logo"
              width={150}
              height={50}
              className="object-contain"
            />
            {/* Social Icons */}
            <div className="flex gap-2 mt-4 text-xl">
              <a href="#" aria-label="X" className="hover:text-gray-400">X</a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-400">▶</a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-400">◎</a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">f</a>
              <a href="#" aria-label="RSS" className="hover:text-gray-400">⌁</a>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Made by ThemeRuby using the Foxiz theme.
              <br />
              Powered by WordPress.
            </p>
          </div>

          {/* Right Sections (Middle and Right Links) */}
          <div className="flex flex-row  gap-8 md:gap-30 mr-40 w-full md:w-auto">
            {/* Middle Links */}
            <div className="space-y-2 flex-1">
              <a href="#" className="block hover:text-gray-300">
                About Foxiz
              </a>
              <a href="#" className="block hover:text-gray-300">
                Contact Us
              </a>
              <a href="#" className="block hover:text-gray-300">
                Newsletter
              </a>
              <a href="#" className="block font-semibold hover:text-gray-300">
                Careers
              </a>
            </div>

            {/* Right Links */}
            <div className="space-y-2 flex-1">
              <a href="#" className="block hover:text-gray-300">
                Contact
              </a>
              <a href="#" className="block hover:text-gray-300">
                Licensing
              </a>
              <a href="#" className="block hover:text-gray-300">
                Terms of Use
              </a>
              <a href="#" className="block hover:text-gray-300">
                Advertise with Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
