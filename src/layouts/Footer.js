// Thay đổi tiêu đề và logo (giữ nguyên cấu trúc JSX)

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer">
        <div class="container_main">
          <div class="logo_footer">
            <a href="">
              <img
                src="https://th.bing.com/th/id/OIP.V0xFPfsd4GKAh1tyAQszjAAAAA?w=181&h=181&c=7&r=0&o=7&pid=1.7&rm=3" // Cân nhắc thay logo bằng logo bán hàng của bạn
                alt="Logo Bán Hàng"
              />
            </a>
          </div>
          <div class="content_footer">
            <h2>CÔNG TY CỔ PHẦN THƯƠNG MẠI .....</h2>
            <p>
              Cửa hàng chính: 123 Đường Bán Lẻ, Phường Bán Sỉ, TP.HCM
            </p>

            <p>
              <span class="hotline-wrapper">
                <span class="hotline-text">
                  Hotline Đặt Hàng: 0961 12 10 18 - Hỗ Trợ Kỹ Thuật: 0862 12 10
                  18
                </span>
              </span>
            </p>

            <p>Điện thoại cố định: (028) 3811.2233</p>

            <p>Email: hotrokhachhang@xyz.com</p>
          </div>
          <div class="banner_footer"></div>
        </div>
      </div>
      <div class="copyright">
        <div class="container_main">
          <p>
            © 2024 Bản quyền thuộc về Công ty Thương mại XYZ.
            <a> | Chính sách</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
