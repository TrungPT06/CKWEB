import { Outlet } from "react-router-dom";
import "./assets/css/layout.css";
import "./assets/css/fonts.css";
import MenuTop from "./layouts/MenuTop";
import MenuBox from "./layouts/MenuBox";
import Footer from "./layouts/Footer";
const Layout = () => {
  return (
    <body>
      <header id="header" style={{ minHeight: 169 }}>
        <div class="header_top">
          <div class="container_main">
            <MenuTop />
          </div>
        </div>

        <div id="main_menu"></div>

        <div class="header">
          <div class="container_main">
            <div class="logo">
              <a href="/">
                <img
                  src="https://th.bing.com/th/id/OIP.V0xFPfsd4GKAh1tyAQszjAAAAA?w=181&h=181&c=7&r=0&o=7&pid=1.7&rm=3" // THAY ĐỔI URL NÀY
                  alt="Logo Thương mại XYZ"
                />
              </a>
            </div>

            <div id="main_menu">
              <MenuBox />
            </div>
          </div>
        </div>
      </header>

      <div class="news-home">
        <div class="container_main" style={{ minHeight: 5500 }}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </body>
  );
};
<div class="logo">
  <a href="/">
    <img
      src="https://th.bing.com/th/id/OIP.V0xFPfsd4GKAh1tyAQszjAAAAA?w=181&h=181&c=7&r=0&o=7&pid=1.7&rm=3"
      alt="Logo"
    />
  </a>
</div>;

export default Layout;
