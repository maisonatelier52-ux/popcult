'use client';

import { useState } from "react";

export default function SubscribeNewsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess(true);
    setEmail("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <aside className="w-full max-w-sm border border-black p-8 relative">
      {/* Success Popup */}
      {success && (
        <div className="absolute top-3 right-3 left-3 bg-black text-white text-sm px-4 py-2 rounded-md text-center">
          ✅ Successfully subscribed to the newsletter!
        </div>
      )}

      {/* Title */}
      <h2 className="text-[42px] font-bold leading-[1.05] tracking-[-0.02em] mb-3">
        Subscribe Newsletter
      </h2>

      {/* Description */}
      <p className="text-[15px] mb-5">
        Be the first to know about our newest articles by subscribing to our
        newsletter!
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 px-3 py-2 text-[16px] mb-4 focus:outline-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full border border-black py-2 text-[14px] font-semibold hover:bg-black hover:text-white transition mb-3"
        >
          Sign Up Now
        </button>

        {/* Terms */}
        <label className="flex items-start gap-2 text-[14px]">
          <input type="checkbox" required className="mt-1" />
          <span>
            I have read and agree to the <span className="underline">terms & conditions</span>
          </span>
        </label>
      </form>
    </aside>
  );
}
