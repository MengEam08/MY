import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Menus } from "./components/Menus/Menus";
import { Banner } from "./components/Banners/Banner";
import { Banner2 } from "./components/Banners/Banner2";
import { Footer } from "./components/Footer/Footer";
import ContactPage from "./pages/Contact/Contact";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetail from "./pages/ProductPage/ProductDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Menus />
              <Banner />
              <Banner2 />
            </>
          }
        />
        <Route path="/products" element={<ProductPage />} /> {/* Adjust if you have a different path for ProductPage */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
