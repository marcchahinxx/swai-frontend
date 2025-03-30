import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const sampleData = {
  project: "Gaming Setup",
  categories: [
    {
      name: "Keyboards",
      products: [
        {
          name: "Mechanical Keyboard RGB",
          price: 69.99,
          image: "https://via.placeholder.com/200x150",
        },
        {
          name: "Wireless Gaming Keyboard",
          price: 89.99,
          image: "https://via.placeholder.com/200x150",
        },
      ],
    },
    {
      name: "Headsets",
      products: [
        {
          name: "Surround Sound Headset",
          price: 59.99,
          image: "https://via.placeholder.com/200x150",
        },
        {
          name: "Wireless Gaming Headphones",
          price: 79.99,
          image: "https://via.placeholder.com/200x150",
        },
      ],
    },
  ],
};

export default function Results() {
  const location = useLocation();
  const query = location.state?.query || sampleData.project;

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    if (query.toLowerCase().includes("gaming")) {
      setSummary("Smart picks for your gaming setup — curated by SWAI.");
    } else if (query.toLowerCase().includes("camping")) {
      setSummary("All the essentials for your perfect camping trip.");
    } else if (query.toLowerCase().includes("fitness")) {
      setSummary("Get equipped for your home fitness journey.");
    } else if (query.toLowerCase().includes("living room")) {
      setSummary("Design ideas to elevate your living room style.");
    } else {
      setSummary("Here’s what SWAI found based on your project.");
    }
  }, [query]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setTotal((prev) => prev + product.price);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-semibold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-black to-red-600">
        {summary}
      </h1>
      <p className="text-center text-neutral-500 mb-10">
        We found some great items for you, grouped by category.
      </p>

      {sampleData.categories.map((category, index) => (
        <div key={index} className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-5 w-1 bg-neutral-800 rounded-sm"></div>
            <h2 className="text-xl font-semibold text-neutral-900">
              {category.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.products.map((product, idx) => (
              <div
                key={idx}
                className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="text-md font-medium text-neutral-800">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-500">€{product.price}</p>
                <button
                  className="mt-3 w-full py-2 text-sm text-white bg-black rounded hover:opacity-90 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  + Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Cart and Checkout */}
      <div className="fixed bottom-4 right-4 flex items-center space-x-4">
        <div className="bg-black text-white px-4 py-2 rounded-full shadow text-sm">
          Total: €{total.toFixed(2)}
        </div>
        <button className="bg-white text-black border border-neutral-300 px-4 py-2 rounded-full text-sm hover:bg-neutral-100 transition shadow-sm">
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
