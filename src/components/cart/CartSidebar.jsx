// src/components/CartSidebar.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cartSlice"; // Import remove action

const CartSidebar = ({ isOpen, toggleSidebar }) => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); // Dispatch action to remove item
  };

  if (!isOpen) return null; // Return nothing if the sidebar is not open

  return (
    <div className="fixed inset-0 z-50 bg-opacity-50 bg-gray-800">
      <div className="fixed right-0 top-0 w-[300px] h-full bg-white shadow-lg p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-primary mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <button
            className="w-full bg-primary text-white py-2 rounded-md"
            onClick={() => toggleSidebar(false)} // Close the sidebar
          >
            Close
          </button>
        </div>
      </div>

      {/* Close the sidebar when clicking outside */}
      <div
        onClick={() => toggleSidebar(false)}
        className="absolute inset-0 bg-black opacity-50"
      />
    </div>
  );
};

export default CartSidebar;
