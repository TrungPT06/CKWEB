import React, { useState, useEffect } from "react";
// Giả định LoginModal nằm cùng cấp hoặc đúng đường dẫn
import LoginModal from "./LoginModal";
// Nếu bạn muốn dùng Link thay vì <a>, bạn phải import nó từ react-router-dom
// import { Link } from "react-router-dom";

const MenuTop = () => {
  // === LOGIC HIỂN THỊ NGÀY/GIỜ ===
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formattedDate = currentDate.toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  // ===============================================

  // === LOGIC ĐĂNG NHẬP/ĐĂNG XUẤT ===
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Xử lý click vào mục "Tài Khoản"
  const handleAccountClick = (e) => {
    // Chỉ ngăn chặn hành vi mặc định khi chưa đăng nhập (để mở modal)
    if (!isLoggedIn) {
      e.preventDefault();
      setShowLoginModal(true);
    }
    // Nếu đã đăng nhập, cho phép liên kết href hoạt động (dẫn đến trang khách hàng)
  };

  // Hàm xử lý đăng nhập
  const handleLogin = (inputUsername, inputPassword) => {
    // Logic xác thực TẠM THỜI (nên thay bằng xác thực API thực tế)
    if (inputUsername === "admin" && inputPassword === "123456") {
      alert(`Đăng nhập thành công! Chào mừng ${inputUsername}.`);
      setIsLoggedIn(true);
      setUsername(inputUsername);
      setShowLoginModal(false);
      // Chuyển hướng sau khi đăng nhập thành công
      // window.location.href = "https://khachhang.example.com/";
    } else {
      alert("Tên tài khoản hoặc Mật khẩu không đúng. Vui lòng thử lại.");
    }
  };

  // Hàm xử lý đăng xuất (Lỗi 2 đã được sửa)
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(null);
    alert("Bạn đã đăng xuất thành công.");
  };

  return (
    // Lỗi 3: Thẻ <ul> cần được đóng lại sau khi kết thúc danh sách menu
    <div className="menu_top">
      {/* Hiển thị ngày tháng */}
      <div
        style={{
          color: "#e44d26",
          fontSize: "1em",
          fontWeight: "bold",
          textAlign: "center",
          paddingBottom: "5px",
        }}
      >
        Hôm nay: {formattedDate}
      </div>
      <ul className="menu_top_ul">
        {" "}
        {/* Nên thêm className cho ul */}
        <li>
          <a href="/">Trang Chủ</a>
        </li>
        <li>
          <a href="/trang1">Sản Phẩm Mới</a>
        </li>
        <li>
          <a target="_blank" href="/gio-hang" rel="noopener noreferrer">
            Giỏ Hàng
          </a>
        </li>
        <li>
          <a target="_blank" href="/thanh-toan" rel="noopener noreferrer">
            Thanh Toán
          </a>
        </li>
        {/* Mục Tài Khoản (sử dụng logic cũ) */}
        <li>
          <a
            href={isLoggedIn ? "https://khachhang.example.com/" : "#"}
            onClick={handleAccountClick}
          >
            {isLoggedIn ? `Xin chào, ${username}` : "Tài Khoản"}
          </a>
        </li>
        {/* ================================================= */}
        <li>
          <a
            target="_blank"
            href="https://vntracuu.com/tracking/shopee"
            rel="noopener noreferrer"
          >
            Tra Cứu Đơn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://hoivadap.example.com/"
            rel="noopener noreferrer"
          >
            Hỏi & Đáp
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://banhang.shopee.vn/edu/courseDetail/1"
            rel="noopener noreferrer"
          >
            Chính Sách
          </a>
        </li>
        {/* LI cuối cùng cho Đăng nhập/Đăng xuất (Đã sửa Lỗi 1, 2) */}
        <li>
          {isLoggedIn ? ( // Đã sửa: dùng isLoggedIn thay vì user
            <>
              <span className="username" style={{ marginRight: "10px" }}>
                👤 {username}
              </span>
              <button
                className="logout-btn"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                Đăng xuất
              </button>
            </>
          ) : (
            // Dùng <a> thay vì Link (do Link chưa được import)
            <a
              href="#"
              className="login-link"
              onClick={(e) => {
                e.preventDefault();
                setShowLoginModal(true);
              }}
            >
              Đăng nhập
            </a>
          )}
        </li>
      </ul>{" "}
      {/* Đã thêm thẻ đóng </ul> */}
      {/* Modal đăng nhập */}
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};
export default MenuTop;
