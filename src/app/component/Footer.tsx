export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-serif font-bold tracking-wide">
              POPCULT<span className="text-red-600">.</span>
            </h2>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-xl">
              <a href="#" aria-label="X" className="hover:text-gray-400">X</a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-400">▶</a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-400">◎</a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">f</a>
              <a href="#" aria-label="RSS" className="hover:text-gray-400">⌁</a>
            </div>

            <p className="mt-6 text-sm text-gray-400 leading-relaxed">
              Made by ThemeRuby using the Foxiz theme.
              <br />
              Powered by WordPress.
            </p>
          </div>

          {/* Middle Links */}
          <div className="space-y-3">
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
          <div className="space-y-3">
            <a href="#" className="block hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="block hover:text-gray-300">
              Licensing
            </a>
            <a href="#" className="block hover:text-gray-300">
              Terms of Use
            </a>
            <a href="#" className="block font-semibold hover:text-gray-300">
              Advertise with Us
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
