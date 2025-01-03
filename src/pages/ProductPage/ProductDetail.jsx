
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";  

const ProductDetail = () => {
  const { id } = useParams();  // Get product ID from the URL parameter
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Use navigate to programmatically go back
  const dispatch = useDispatch();  // Use dispatch to add to cart

  useEffect(() => {
    // Fetch product details using the ID from the URL
    fetch(` /${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        img: product.images?.[0],  // Use the first image as the product image
      }));
    }
  };

  if (loading) return <p className="text-center">Loading product details...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container w-[80%] py-10 px-4 md:px-0">
      <button
        onClick={() => navigate("/products")}
        className="py-2 px-4 font-medium text-red-600 mb-10"
      >
        Back to Products
      </button>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <img
            src={product.images?.[0]}  // Use the first image for the product detail
            alt={product.title}
            className="w-80 h-80 object-contain"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-lg font-bold text-red-600 mt-2">${product.price}</p>
        <p className="text-gray-700 mt-4">{product.description}</p>
        <div className="mt-6">
          <button
            onClick={handleAddToCart}  // Trigger the add to cart action when clicked
            className="py-2 px-6 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
