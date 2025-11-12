import React, { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

const MenuTop = () => {
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleAccountClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      alert(`Xin chào ${username}! Bạn đã đăng nhập.`);
      window.location.href = "https://khachhang.example.com/";
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLogin = (inputUsername, inputPassword) => {
    if (inputUsername === "admin" && inputPassword === "123456") {
      alert(`Đăng nhập thành công! Chào mừng ${inputUsername}.`);
      setIsLoggedIn(true);
      setUsername(inputUsername);
      setShowLoginModal(false);
      window.location.href = "https://khachhang.example.com/";
    } else {
      alert("Tên tài khoản hoặc Mật khẩu không đúng. Vui lòng thử lại.");
    }
  };

  return (
    <div class="menu_top">
      {}
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

      <ul>
        <li>
          <a href="/">Trang Chủ</a>
        </li>
        <li>
          <a href="/trang1">Sản Phẩm Mới</a>
        </li>
        <li>
          <a target="blank" href="/gio-hang">
            Giỏ Hàng
          </a>
        </li>
        <li>
          <a target="blank" href="/thanh-toan">
            Thanh Toán
          </a>
        </li>

        {}
        <li>
          <a
            href={isLoggedIn ? "https://khachhang.example.com/" : "#"}
            onClick={handleAccountClick}
          >
            {isLoggedIn ? `Xin chào, ${username}` : "Tài Khoản"}
          </a>
        </li>
        {}

        <li>
          <a target="blank" href="https://vntracuu.com/tracking/shopee">
            Tra Cứu Đơn
          </a>
        </li>
        <li>
          <a target="blank" href="https://hoivadap.example.com/">
            Hỏi & Đáp
          </a>
        </li>
        <li>
          <a target="blank" href="https://banhang.shopee.vn/edu/courseDetail/1">
            Chính Sách
          </a>
        </li>
        <li>
          <a href="/lien-he">Liên hệ</a>
        </li>
      </ul>

      {}
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};
export default MenuTop;
