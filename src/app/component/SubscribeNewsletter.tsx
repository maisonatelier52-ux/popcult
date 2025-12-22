'use client';

import { useState } from "react";

export default function SubscribeNewsletter() {
  const [email, setEmail] = useState("");

  return (
    <aside className="w-full max-w-sm border border-black p-6">
      {/* Top thick border */}
      <div className="border-t-4 border-black mb-4" />

      {/* Title */}
      <h2 className="font-serif text-2xl font-bold leading-tight mb-3">
        Subscribe Newsletter
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-5">
        Be the first to know about our newest articles by subscribing to our
        newsletter!
      </p>

      {/* Input */}
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 text-sm mb-4 focus:outline-none focus:border-black"
      />

      {/* Button */}
      <button className="w-full bg-black text-white py-2 text-sm font-medium mb-3 hover:bg-gray-900 transition">
        Sign Up Now
      </button>

      {/* Terms */}
      <label className="flex items-start gap-2 text-xs text-gray-600">
        <input type="checkbox" className="mt-1" />
        <span>
          I have read and agree to the{" "}
          <span className="underline cursor-pointer">
            terms & conditions
          </span>
        </span>
      </label>
    </aside>
  );
}
