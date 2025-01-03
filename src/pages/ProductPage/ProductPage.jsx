import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        const formattedProducts = data.slice(0, 23).map((item) => ({ //fetch 0-23 products
          id: item.id,
          img: item.images?.[0],  
          name: item.title,
          price: item.price.toFixed(2),
        }));
        setProducts(formattedProducts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container w-[80%] py-10 px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center text-primary mb-8 mt-20">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}  // Link to the product detail page
            className="bg-white p-4 rounded-lg shadow-lg cursor-pointer"
          >
            <div className="flex justify-center items-center h-52 mb-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-40 h-40 object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-600">{product.name}</h3>
            <p className="text-lg font-bold text-red-600">${product.price}</p>
            <div className="mt-6">
              <button className="py-2 px-6 bg-primary text-white rounded-md hover:bg-primary-dark">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
