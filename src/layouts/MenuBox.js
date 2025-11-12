const MenuBox = () => {
  return (
    <div class="box_menu">
      <nav id="menu" class="menu">
        <ul>
          <li class="icon_menu active">
            <a href="/danhmuc/thoi-trang" title="Thời trang">
              THỜI TRANG
            </a>
            <ul>
              <div class="container_main">
                <li>
                  <a href="/danhmuc/nam" title="Thời trang Nam">
                    <i class="far fa-angle-right"></i> THỜI TRANG NAM
                  </a>
                </li>
                <li>
                  <a href="/danhmuc/nu" title="Thời trang Nữ">
                    <i class="far fa-angle-right"></i> THỜI TRANG NỮ
                  </a>
                </li>
                <li>
                  <a href="/danhmuc/tre-em" title="Thời trang trẻ em">
                    <i class="far fa-angle-right"></i> THỜI TRANG TRẺ EM
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li class="icon_menu">
            <a href="/danhmuc/dien-tu" title="Đồ điện tử">
              ĐỒ ĐIỆN TỬ
            </a>
            <ul>
              <div class="container_main">
                <li>
                  <a href="/danhmuc/laptop" title="Laptop, PC">
                    <i class="far fa-angle-right"></i> LAPTOP, PC
                  </a>
                </li>
                <li>
                  <a href="/danhmuc/phu-kien" title="Phụ kiện">
                    <i class="far fa-angle-right"></i> PHỤ KIỆN
                  </a>
                </li>
                <li>
                  <a
                    href="/danhmuc/thiet-bi-am-thanh"
                    title="Thiết bị âm thanh"
                  >
                    <i class="far fa-angle-right"></i> THIẾT BỊ ÂM THANH
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li class="icon_menu">
            <a href="/danhmuc/gia-dung" title="Hàng gia dụng">
              HÀNG GIA DỤNG
            </a>
            <ul>
              <div class="container_main">
                <li>
                  <a href="/danhmuc/nha-bep" title="Thiết bị nhà bếp">
                    <i class="far fa-angle-right"></i> THIẾT BỊ NHÀ BẾP
                  </a>
                </li>
                <li>
                  <a href="/danhmuc/phong-khach" title="Đồ phòng khách">
                    <i class="far fa-angle-right"></i> ĐỒ PHÒNG KHÁCH
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li class="icon_menu">
            <a href="/danhmuc/sach" title="Sách & Văn phòng phẩm">
              SÁCH & VĂN PHÒNG PHẨM
            </a>
            <ul>
              <div class="container_main">
                <li>
                  <a href="/danhmuc/sach-giao-khoa" title="Sách giáo khoa">
                    <i class="far fa-angle-right"></i> SÁCH GIÁO KHOA
                  </a>
                </li>
                <li>
                  <a href="/danhmuc/van-phong-pham" title="Văn phòng phẩm">
                    <i class="far fa-angle-right"></i> VĂN PHÒNG PHẨM
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li class="icon_menu">
            <a href="/tin-tuc" title="Tin tức & Khuyến mãi">
              TIN TỨC & KHUYẾN MÃI
            </a>
            <ul>
              <div class="container_main">
                <li>
                  <a href="/tin-tuc/khuyen-mai-hot" title="Khuyến mãi Hot">
                    <i class="far fa-angle-right"></i> KHUYẾN MÃI HOT
                  </a>
                </li>
                <li>
                  <a href="/tin-tuc/bai-viet" title="Bài viết mới">
                    <i class="far fa-angle-right"></i> BÀI VIẾT MỚI
                  </a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MenuBox;
