import React, { useState } from "react";
import { FaKeyboard, FaHeadphones, FaBoxOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const resultsData = [
    {
      category: "Keyboards",
      icon: <FaKeyboard className="inline-block mr-2 text-lg text-gray-600" />,
      products: [
        {
          id: 1,
          name: "Mechanical Keyboard RGB",
          price: 69.99,
          image:
            "https://images.unsplash.com/photo-1587202372775-a7dce39f5795?w=400&q=80",
        },
        {
          id: 2,
          name: "Wireless Gaming Keyboard",
          price: 89.99,
          image:
            "https://images.unsplash.com/photo-1614680376408-81e83d90b844?w=400&q=80",
        },
      ],
    },
    {
      category: "Headsets",
      icon: <FaHeadphones className="inline-block mr-2 text-lg text-gray-600" />,
      products: [
        {
          id: 3,
          name: "Surround Sound Headset",
          price: 49.99,
          image:
            "https://images.unsplash.com/photo-1580894732444-8ecdedc00546?w=400&q=80",
        },
        {
          id: 4,
          name: "Wireless Gaming Headphones",
          price: 59.99,
          image:
            "https://images.unsplash.com/photo-1580894732384-2f2f58f59a91?w=400&q=80",
        },
      ],
    },
  ];

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="results-page px-6 py-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-black via-red-600 to-black text-transparent bg-clip-text animate-soft-fade">
          Here's what SWAI found based on your project.
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          We found some great items for you, intelligently grouped by category.
        </p>
      </div>

      {resultsData.map((categoryData, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            {categoryData.icon} {categoryData.category}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categoryData.products.map((product) => (
              <div
                key={product.id}
                className="border rounded-md p-2 shadow-sm hover:shadow-md transition duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-28 object-cover rounded mb-2"
                />
                <h3 className="text-sm font-medium mb-1">{product.name}</h3>
                <p className="text-gray-700 text-sm mb-2">€{product.price}</p>
                <button
                  className="w-full bg-black text-white py-1 rounded hover:opacity-90 text-xs"
                  onClick={() => handleAddToCart(product)}
                >
                  + Add to cart
                </button>
              </div>
            ))}
          </div>

          {index < resultsData.length - 1 && (
            <hr className="my-10 border-t border-gray-200" />
          )}
        </div>
      ))}

      {/* Total + Go to Checkout */}
      <div className="fixed bottom-6 right-6 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-200">
        <p className="text-sm text-gray-700 mb-1">
          Total: <span className="bg-gradient-to-r from-black via-red-600 to-black text-transparent bg-clip-text font-semibold">€{total}</span>
        </p>
        <button
          onClick={() => navigate("/checkout")}
          className="px-4 py-1.5 text-sm border border-black rounded hover:bg-black hover:text-white transition"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Results;

const style = document.createElement("style");
style.innerHTML = `
  @keyframes soft-fade {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.85; }
  }
  .animate-soft-fade {
    animation: soft-fade 6s ease-in-out infinite;
  }
`;
document.head.appendChild(style);
