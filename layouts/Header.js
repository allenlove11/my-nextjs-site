// Header.jsx
import Link from "next/link";
import { Fragment } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

const Header = ({ dark }) => {
  return (
    <Fragment>
      <div
        className={`thrown-header-area style-five ${dark ? "dark" : ""}`}
        id={dark ? "navbar" : "sticky-header"}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="header-logo style-five">
                <Link legacyBehavior href="/">
                  <a>
                    {/* 添加Logo图片 */}
                    <div style={{ 
                      height: '60px', 
                      position: 'relative',
                      width: '200px'
                    }}>
                      <Image 
                        src="/assets/images/logo.png" 
                        alt="Company Logo"
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className={`thrown-menu style-five ${dark ? "dark" : ""}`}>
                <Nav />
              </div>
            </div>
          </div>
          <div className="side-menu-info">
            <div className="sidebar-menu">
              <a className="navSidebar-button" href="#">
                <i className="bi bi-justify-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu />
      <Sidebar />
    </Fragment>
  );
};
export default Header;

const MobileMenu = () => {
  return (
    <div className="mobile-menu-area" id="navbar">
      <div className="mobile-menu">
        <div className="mobile-logo">
          <Link legacyBehavior href="/">
            <a>
              {/* 添加移动端Logo */}
              <div style={{ 
                height: '50px', 
                position: 'relative',
                width: '160px',
                margin: '0 auto'
              }}>
                <Image 
                  src="/assets/images/logo.png" 
                  alt="Company Logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="side-menu-info">
          <div className="sidebar-menu">
            <a
              className="navSidebar-button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // 移除 thrownutility 相关代码
              }}
            >
              <i className="bi bi-justify-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <ul>
      <li>
        <Link legacyBehavior href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <a href="#">
          About Us <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="/about?tab=profile">
                <a>Company Profile</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about?tab=honors">
                <a>Company Honors</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about?tab=certification">
                <a>System Certification</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about?tab=history">
                <a>Development History</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about?tab=leadership">
                <a>Leadership Care</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about?tab=culture">
                <a>Corporate Culture</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about?tab=organization">
                <a>Organization Structure</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about?tab=video">
                <a>Company Video</a>
              </Link>
            </li>
          </ul>
        </div>
      </li>
      {/* Products 菜单 */}
      <li>
        <a href="#">
          Products <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="/products/panda-mn228">
                <a>Panda-MN228</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/products/panda-1681">
                <a>Panda-1681</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/products/panda-floong">
                <a>Panda-F.Loong</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/products/applications">
                <a>Product Applications</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/products/partners">
                <a>Partners</a>
              </Link>
            </li>
          </ul>
        </div>
      </li>
      
      {/* Technology Innovation 菜单 */}
      <li>
        <a href="#">
          Technology Innovation <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="/technology-innovation#technological-process">
                <a>Technological Process</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/technology-innovation#innovation-capability">
                <a>Innovation Capability</a>
              </Link>
            </li>
          </ul>
        </div>
      </li>
      
      {/* 新增 News 菜单 */}
      <li>
        <a href="#">
          News <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="/news?tab=company-news">
                <a>Company News</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/news?tab=industry-trends">
                <a>Industry Trends</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/news?tab=media-reports">
                <a>Media Reports</a>
              </Link>
            </li>
          </ul>
        </div>
      </li>
      
      <li>
        <Link legacyBehavior href="/contact-us">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
};