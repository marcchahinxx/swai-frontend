import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";

export default function Home() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      navigate("/results", { state: { query: input } });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black relative px-4">
      {/* Panier */}
      <button
        className="absolute top-5 right-5 hover:scale-105 transition"
        title="View Cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13l1.6-8h6.8L17 13"
          />
        </svg>
      </button>

      {/* Header */}
      <header className="text-center pt-20">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-gradient">SWAI</span>
        </h1>
        <p className="text-gray-600 mb-10">
          Shop With AI — describe your project and budget, and we’ll find the
          best products for you.
        </p>

        <input
          type="text"
          placeholder="What do you need?"
          className="w-80 border-b border-gray-300 focus:outline-none focus:border-gray-500 text-center py-2 transition duration-200"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        {/* Phrase d'accroche */}
        <p className="mt-16 text-sm italic text-center text-gradient-soft max-w-lg mx-auto">
          SWAI finds the best products for you based on your project and
          budget. Everything is intelligently sorted by category to make your
          experience smooth, smart, and personalized.
        </p>
      </header>

      {/* How it works */}
      <motion.section
        className="mt-28 bg-gray-50 py-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center mb-10">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-semibold">Prompt</h3>
            <p className="text-sm text-gray-600">Enter a short description</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🧠</div>
            <h3 className="font-semibold">Review</h3>
            <p className="text-sm text-gray-600">
              Let the AI find suitable ideas
            </p>
          </div>
          <div>
            <div className="text-3xl mb-2">🛒</div>
            <h3 className="font-semibold">Purchase</h3>
            <p className="text-sm text-gray-600">Order your selections</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}