import { useState } from "react";

export default function CommentForm() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., API call
    console.log({ comment, name, email, website, saveInfo });
    alert("Comment submitted!");
  };

  return (
    <form className="w-full max-w-3xl mx-auto space-y-4" onSubmit={handleSubmit}>
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
          />
        </svg>
        Leave a Comment
      </h2>

      <p className="text-sm italic text-gray-600">
        Your email address will not be published. Required fields are marked <span className="text-red-600">*</span>
      </p>

      {/* Comment Textarea */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a Comment"
        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
        rows={6}
        required
      />

      {/* Name, Email, Website */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
        <input
          type="url"
          placeholder="Your website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>

      {/* Save Info Checkbox */}
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={saveInfo}
          onChange={(e) => setSaveInfo(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-red-600"
        />
        Save my name, email, and website in this browser for the next time I comment.
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition"
      >
        Post Comment
      </button>
    </form>
  );
}
