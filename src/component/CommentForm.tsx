"use client";
import { useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa"; 
import { BiMessageRounded } from "react-icons/bi";


export default function CommentForm() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log({ comment, name, email, website, saveInfo });
    alert("Comment submitted!");
  };

  return (
    <form className="w-full mx-auto space-y-4 py-3" onSubmit={handleSubmit}>
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
        <BiMessageRounded className="w-5 h-5 text-black" /> {/* Speech bubble icon */}
        Leave a Comment
      </h2>

      <p className="text-sm italic text-black">
        Your email address will not be published. Required fields are marked <span className="text-[#041f4a]">*</span>
      </p>

      {/* Comment Textarea */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a Comment"
        className="w-full p-3 border border-gray-300 resize-none focus:outline-none"
        rows={8}
        required
      />

      {/* Name, Email, Website */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300  focus:outline-none "
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 focus:outline-none"
          required
        />
        <input
          type="url"
          placeholder="Your website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full p-3 border border-gray-300 focus:outline-none"
        />
      </div>

      {/* Save Info Checkbox */}
      <label className="flex items-center gap-2 text-sm text-black">
        <input
          type="checkbox"
          checked={saveInfo}
          onChange={(e) => setSaveInfo(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300 focus:ring-1  focus:ring-gray-600"
        />
        Save my name, email, and website in this browser for the next time I comment.
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#041f4a] text-white text-[11px] px-8 py-2 hover:bg-gray-700 transition"
      >
        Post Comment
      </button>
    </form>
  );
}
