// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import CartSidebar from "../cart/CartSidebar"; 

export const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "/products" },
  { id: 3, title: "About", link: "/about" },
  { id: 5, title: "Contact", link: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false); // State to toggle the sidebar
  const cartItems = useSelector((state) => state.cart.items); // Get items from Redux store

  const toggleSidebar = (open) => setIsCartOpen(open); // Toggle the cart sidebar

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container flex justify-between items-center py-4 md:pt-4"
      >
        <div className="text-2xl flex items-center gap-2 font-bold uppercase cursor-pointer">
          <p className="text-primary text-3xl">FS</p>
          <p className="text-secondary">Store</p>
          <FaOpencart className="text-green-600" />
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="text-l">
                <Link
                  to={menu.link}
                  className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#7806FA] font-semibold"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <button
              onClick={() => toggleSidebar(true)} // Open the sidebar when clicked
              className="relative text-2xl hover:bg-primary hover:text-white rounded-lg p-1 duration-200"
            >
              <MdOutlineShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </ul>
        </div>

        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-3xl" />
        </div>
      </motion.div>

      <ResponsiveMenu open={open} />
      <CartSidebar isOpen={isCartOpen} toggleSidebar={toggleSidebar} /> {/* Include the CartSidebar */}
    </nav>
  );
};

export default Navbar;
