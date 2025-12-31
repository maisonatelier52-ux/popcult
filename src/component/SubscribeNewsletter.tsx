'use client';

import { useState } from "react";

export default function SubscribeNewsletter() {
  const [email, setEmail] = useState("");

  return (
    <aside className="w-full max-w-sm border border-black border-t-6 p-8">
      {/* Top thick border */}
      <div className="mb-4" />

      {/* Title */}
     <h2 className="text-[42px] font-bold leading-[1.05] tracking-[-0.02em] mb-3">
  Subscribe Newsletter
</h2>


      {/* Description */}
      <p className="text-[15px] text-black mb-5">
        Be the first to know about our newest articles by subscribing to our
        newsletter!
      </p>

      {/* Input */}
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 text-[16px] text-[#555555] mb-4 focus:outline-none focus:border-black"
      />

      {/* Button */}
      <button className="p-8 bg-[#232323] text-white py-2 text-[12px] font-medium mb-3 hover:bg-gray-900 transition">
        Sign Up Now
      </button>

      {/* Terms */}
      <label className="flex items-start gap-2 text-[16px] text-[#555555]">
        <input type="checkbox" className="mt-1" />
        <span>
          I have read and agree to the{" "}
          
            terms & conditions
        </span>
      </label>
    </aside>
  );
}
