import { useState, useEffect } from "react";
import { ProductElement } from "../types/product";


const ListProduct = () => {
  const [products, setProducts] = useState<ProductElement[]>([]);

  useEffect(() => {
    fetch("/data.json") // Đảm bảo đặt file data.json trong thư mục public
      .then((res) => res.json())
      .then((data) => setProducts(data)) // Chắc chắn data là mảng sản phẩm
      .catch((error) => console.error("Error loading products:", error));
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
