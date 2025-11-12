import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

const ListProducts_SP = () => {
  const [listProduct, setListProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("product1")
          .select("*")
          .order("id", { ascending: true });
        if (error) throw error;
        setListProduct(data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return listProduct.filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const priceValue = parseFloat(p.price);
      const maxPriceValue = parseFloat(maxPrice);

      const matchesPrice =
        maxPrice === "" || isNaN(maxPriceValue) || priceValue <= maxPriceValue;

      return matchesSearch && matchesPrice;
    });
  }, [listProduct, searchTerm, maxPrice]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    if (value === "" || (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 0)) {
      setMaxPrice(value);
    }
  };

  if (isLoading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        Đang tải sản phẩm...
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>

      {/* Khu vực tìm kiếm và lọc sử dụng class mới */}
      <div className="product-filter-bar">
        {/* Tìm kiếm */}
        <div>
          <label htmlFor="search">🔍 Tìm kiếm:</label>
          <input
            id="search"
            type="text"
            placeholder="Nhập tên sản phẩm..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Lọc giá */}
        <div>
          <label htmlFor="maxPrice">💰 Giá tối đa ($):</label>
          <input
            id="maxPrice"
            type="number"
            placeholder="Ví dụ: 500"
            value={maxPrice}
            onChange={handlePriceChange}
            min="0"
          />
        </div>
      </div>
      {/* Kết thúc khu vực tìm kiếm và lọc */}

      <p>Tìm thấy **{filteredProducts.length}** sản phẩm.</p>

      {/* Danh sách sản phẩm */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/sanpham/${p.id}`)}
            className="product-item"
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ height: "180px", objectFit: "contain" }}
            />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
            <small>
              ⭐ {p.rating_rate} | ({p.rating_count} đánh giá)
            </small>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "50px",
              color: "#888",
            }}
          >
            Không tìm thấy sản phẩm nào phù hợp với tiêu chí tìm kiếm/lọc.
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProducts_SP;
