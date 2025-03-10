import { useState, useEffect } from "react";
import { ProductElement } from "../types/product";

const ListProduct = () => {
  const [products, setProducts] = useState<ProductElement[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-container">
      <div className="list">
        {products.map((product) => (
          <div key={product.id} className="list-item">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
