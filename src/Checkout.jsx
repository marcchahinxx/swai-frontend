import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 You're almost done!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for trusting <span className="text-red-600 font-semibold">SWAI</span> to help you build your setup.
        </p>
        <p className="text-gray-500 mb-10">
          Checkout functionality is coming soon. For now, review your selected items and make sure everything looks good!
        </p>

        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Checkout;