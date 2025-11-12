import React, { useState } from "react";

const LoginModal = ({ show, onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  const modalStyles = `
    /* ========================================= */
    /* BASE STYLES FOR THE MODAL         */
    /* ========================================= */

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6); /* Nền tối mờ, hơi đậm hơn */
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000; /* Đảm bảo modal nằm trên các thành phần khác */
      animation: fadeIn 0.3s ease-out; /* Hiệu ứng mở modal */
    }

    .login-modal-content {
      background-color: #fff;
      border-radius: 4px;
      width: 400px; /* Chiều rộng cố định */
      max-width: 90%;
      padding: 30px; /* Tăng padding để nội dung thoáng hơn */
      position: relative;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Đổ bóng rõ hơn */
      animation: slideIn 0.3s ease-out; /* Hiệu ứng trượt vào */
      overflow: hidden; /* Đảm bảo không tràn ra ngoài */
    }

    /* ========================================= */
    /* HEADER STYLES               */
    /* ========================================= */
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px; /* Khoảng cách dưới header */
      position: relative;
    }

    .modal-title {
      font-size: 26px; /* Kích thước chữ to hơn */
      font-weight: bold;
      color: #222;
      margin: 0; /* Xóa margin mặc định của h2 */
    }

    .qr-option {
      border: 1px solid #ee4d2d; /* Màu cam Shopee */
      color: #ee4d2d; /* Màu chữ cam */
      padding: 6px 12px;
      border-radius: 2px; /* Góc bo tròn nhẹ */
      font-weight: 500;
      background-color: #fffaf7; /* Nền trắng hơi cam */
      cursor: pointer;
      position: relative;
      font-size: 14px;
      box-sizing: border-box; /* Tính cả padding và border vào chiều rộng */
    }

    .qr-option::after {
      content: '';
      position: absolute;
      bottom: -3px; /* Đặt dưới border */
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #ee4d2d; /* Thanh màu cam dưới */
    }

    /* ========================================= */
    /* FORM STYLES                 */
    /* ========================================= */
    .login-form {
      margin-bottom: 20px;
    }

    .login-input {
      width: 100%;
      padding: 14px 15px; /* Padding lớn hơn */
      margin-bottom: 18px; /* Khoảng cách giữa các input */
      border: 1px solid #ddd; /* Border màu nhạt hơn */
      border-radius: 2px;
      box-sizing: border-box;
      font-size: 15px;
      outline: none; /* Xóa outline khi focus */
      transition: border-color 0.2s;
    }

    .login-input:focus {
      border-color: #ee4d2d; /* Border màu cam khi focus */
    }

    .password-wrapper {
      position: relative;
    }

    .eye-icon {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%); /* Căn giữa theo chiều dọc */
      cursor: pointer;
      color: #999;
      font-size: 18px; /* Kích thước icon mắt */
    }

    .login-button {
      width: 100%;
      background-color: #ee4d2d; /* Màu cam Shopee */
      color: white;
      padding: 14px; /* Padding lớn hơn */
      border: none;
      border-radius: 2px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.2s;
      margin-top: 10px;
    }

    .login-button:hover {
      background-color: #f05d40; /* Màu cam nhạt hơn khi hover */
    }

    /* ========================================= */
    /* FOOTER STYLES               */
    /* ========================================= */
    .modal-footer {
      margin-top: 25px;
      text-align: center;
    }

    .forgot-password {
      color: #007bff; /* Màu xanh link */
      text-decoration: none;
      font-size: 14px;
      display: block;
      margin-bottom: 15px;
    }

    .divider {
      margin: 20px 0; /* Khoảng cách trên dưới divider */
      font-size: 12px;
      color: #ccc; /* Màu chữ nhạt */
      position: relative;
      text-align: center;
      text-transform: uppercase;
    }
    .divider::before, .divider::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 38%; /* Chiều dài đường kẻ */
        height: 1px;
        background: #eee;
    }
    .divider::before {
        left: 0;
    }
    .divider::after {
        right: 0;
    }


    .social-login {
      display: flex;
      justify-content: space-between;
      gap: 15px; /* Khoảng cách giữa các nút social */
      margin-top: 15px;
    }

    .social-button {
      flex: 1;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 2px;
      background: white;
      cursor: pointer;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px; /* Khoảng cách giữa icon và chữ */
      transition: background-color 0.2s;
    }

    .social-button:hover {
        background-color: #f5f5f5;
    }

    .facebook-btn {
      color: #3b5998;
    }
    .google-btn {
      color: #db4437;
    }

    .register-text {
      margin-top: 25px;
      font-size: 14px;
      color: #777;
    }

    .register-link {
      color: #ee4d2d; /* Màu cam Shopee */
      text-decoration: none;
      font-weight: bold;
      margin-left: 5px; /* Khoảng cách với chữ "web?" */
    }

    /* ========================================= */
    /* CLOSE BUTTON                */
    /* ========================================= */
    .close-button {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 30px; /* Kích thước to hơn */
        border: none;
        background: transparent;
        cursor: pointer;
        color: #bbb; /* Màu xám nhạt */
        line-height: 1; /* Căn chỉnh vị trí */
        padding: 0;
        transition: color 0.2s;
    }
    .close-button:hover {
        color: #777;
    }

    /* ========================================= */
    /* ANIMATIONS                   */
    /* ========================================= */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideIn {
      from { transform: translateY(-30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {}
      <style>{modalStyles}</style>

      <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Đăng nhập</h2>
          <div className="qr-option">
            Đăng nhập với mã QR <span style={{ fontSize: "1.2em" }}>█</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {}
          <input
            type="text"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />

          {/* Input Mật khẩu */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👀"}
            </span>
          </div>

          <button type="submit" className="login-button">
            ĐĂNG NHẬP
          </button>
        </form>

        <div className="modal-footer">
          <a href="#" className="forgot-password">
            Quên mật khẩu
          </a>
          <div className="divider">HOẶC</div>

          <div className="social-login">
            <button className="social-button facebook-btn">
              <span style={{ fontSize: "1.2em" }}>f</span> Facebook
            </button>
            <button className="social-button google-btn">
              <span style={{ fontSize: "1.2em" }}>G</span> Google
            </button>
          </div>

          <p className="register-text">
            Bạn mới biết đến web?{" "}
            <a href="/dang-ky" className="register-link">
              Đăng ký
            </a>
          </p>
        </div>

        {/* Nút đóng */}
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
