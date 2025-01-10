import React, { useEffect, useState } from "react";
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="productList">
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id} className="product" data-testid="products">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
          <p className="price">Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
