import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./models/product";

export default function Chitietsanpham() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: 20 }}>
        <h3>Không tìm thấy sản phẩm!</h3>
        <button onClick={() => navigate("/trang1")}>Quay lại Trang 1</button>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      {" "}
      {/* <--- THAY THẾ STYLE INLINE */}
      <button onClick={() => navigate(-1)} className="product-detail-button">
        ⬅ Quay lại
      </button>
      <div className="product-detail-content">
        {" "}
        {/* <--- THAY THẾ STYLE INLINE */}
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          {" "}
          {/* <--- THAY THẾ STYLE INLINE */}
          <h2>{product.title}</h2>
          <p className="product-detail-price">
            <strong>Giá:</strong> ${product.price}
          </p>
          <p>
            <strong>Loại:</strong> {product.category}
          </p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
