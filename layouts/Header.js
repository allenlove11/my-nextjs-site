import Link from "next/link";
import { Fragment, useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

const Header = ({ dark }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };
  
  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    if (lang === "zh") {
      if (isClient) window.location.href = "https://www.panda-glass.cn/"; 
    } else {
      if (isClient) window.location.reload();
    }
  };

  const menuData = [
    { id: 'home', name: 'Home', url: '/', submenu: null },
    { 
      id: 'about', name: 'About Us', url: '#',
      submenu: [
        { id: 'profile', name: 'Company Profile', url: '/about?tab=profile' },
        { id: 'certification', name: 'Certification', url: '/about?tab=certification' }
      ]
    },
    { 
      id: 'products', name: 'Products', url: '#',
      submenu: [
        { id: 'mn228', name: 'Panda-MN228', url: '/products/panda-mn228' },
        { id: 'panda1681', name: 'Panda-1681', url: '/products/panda-1681' },
        { id: 'floong', name: 'Panda-F.Loong', url: '/products/panda-floong' },
        { id: 'applications', name: 'Product Applications', url: '/products/applications' },
        { id: 'partners', name: 'Partners', url: '/products/partners' }
      ]
    },
    { 
      id: 'technology', name: 'Innovation', url: '#',
      submenu: [
        { id: 'process', name: 'Technological Process', url: '/technology-innovation#technological-process' },
        { id: 'capability', name: 'Innovation Capability', url: '/technology-innovation#innovation-capability' }
      ]
    },
    { 
      id: 'news', name: 'News', url: '#',
      submenu: [
        { id: 'company-news', name: 'Company News', url: '/news?tab=company-news' },
        { id: 'industry', name: 'Industry Trends', url: '/news?tab=industry-trends' },
        { id: 'media', name: 'Media Reports', url: '/news?tab=media-reports' }
      ]
    },
    { id: 'contact', name: 'Contact', url: '/contact-us', submenu: null }
  ];

  return (
    <Fragment>
      <style jsx global>{`
        .nav-item-container:hover .sub-menu {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 0;
          width: 100%;
        }

        .header-nav-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 992px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
      
      <div className={`thrown-header-area style-five ${dark ? "dark" : ""}`} id="sticky-header">
        <div className="container">
          <div className="header-container">
            <div className="header-logo-container">
              <Link legacyBehavior href="/">
                <a style={{ display: 'block' }}>
                  <div style={{ position: 'relative', width: '180px', height: '70px' }}>
                    {isClient && (
                      <Image src="/assets/images/logo.png" alt="Logo" layout="fill" objectFit="contain" priority />
                    )}
                  </div>
                </a>
              </Link>
            </div>
            
            <div className="header-nav-content">
              <div className="desktop-only">
                <Nav menuData={menuData} />
              </div>

              <div className="desktop-only">
                <select 
                  value={currentLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  style={{ 
                    padding: '8px 12px', 
                    borderRadius: '4px', 
                    border: '1px solid #ddd',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                </select>
              </div>

              <div className="mobile-only">
                <button 
                  onClick={toggleMobileMenu} 
                  style={{ 
                    background: 'none', 
                    border: '1px solid #333', 
                    padding: '8px 15px', 
                    fontSize: '20px',
                    borderRadius: '4px'
                  }}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MobileMenu 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange} 
        isMenuOpen={isMobileMenuOpen} 
        menuData={menuData}
        closeMenu={closeMobileMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <Sidebar />
    </Fragment>
  );
};

const Nav = ({ menuData }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '30px' }}>
      {menuData.map((item) => (
        <li key={item.id} className="nav-item-container" style={{ position: 'relative' }}>
          <Link legacyBehavior href={item.url}>
            <a style={{ 
              display: 'flex', 
              alignItems: 'center',
              padding: '25px 0', 
              color: '#111', 
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '15px'
            }}>
              {item.name}
              {item.submenu && <span style={{ fontSize: '10px', marginLeft: '6px' }}>▼</span>}
            </a>
          </Link>
          
          {item.submenu && (
            <div className="sub-menu" style={{ 
              position: 'absolute',
              top: '100%',
              left: '-20px',
              background: 'white',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              minWidth: '240px',
              zIndex: 1000,
              opacity: 0,
              visibility: 'hidden',
              transition: 'all 0.3s ease',
              transform: 'translateY(15px)',
              padding: '10px 0',
              borderRadius: '0 0 8px 8px',
              borderTop: '3px solid #005bac'
            }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {item.submenu.map((subItem) => (
                  <li key={subItem.id}>
                    <Link legacyBehavior href={subItem.url}>
                      <a style={{ 
                        display: 'block', 
                        padding: '12px 25px', 
                        color: '#444', 
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#f8f9fa';
                        e.target.style.color = '#005bac';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#444';
                      }}
                      >
                        {subItem.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const MobileMenu = ({ currentLanguage, onLanguageChange, isMenuOpen, menuData, closeMenu, activeSubmenu, setActiveSubmenu }) => {
  return (
    <>
      <div 
        onClick={closeMenu}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.5)', zIndex: 9998,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          opacity: isMenuOpen ? 1 : 0, transition: '0.3s'
        }}
      />
      <div style={{
        position: 'fixed', top: 0, right: isMenuOpen ? 0 : '-320px', 
        width: '300px', height: '100%', background: 'white', 
        zIndex: 9999, transition: '0.4s', boxShadow: '-5px 0 20px rgba(0,0,0,0.1)',
        display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <div style={{ position: 'relative', width: '120px', height: '40px' }}>
                <Image src="/assets/images/logo.png" alt="Logo" layout="fill" objectFit="contain" />
             </div>
             <button onClick={closeMenu} style={{ border: 'none', background: 'none', fontSize: '24px' }}>✕</button>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 20px' }}>
          {menuData.map(item => (
            <div key={item.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
              {item.submenu ? (
                <>
                  <div 
                    onClick={() => setActiveSubmenu(activeSubmenu === item.id ? null : item.id)}
                    style={{ padding: '15px 0', color: '#333', fontWeight: '600', display: 'flex', justifyContent: 'space-between' }}
                  >
                    {item.name} <span>{activeSubmenu === item.id ? '−' : '+'}</span>
                  </div>
                  <div style={{ 
                    maxHeight: activeSubmenu === item.id ? '600px' : '0', 
                    overflow: 'hidden', transition: '0.3s', background: '#f9f9f9' 
                  }}>
                    {item.submenu.map(sub => (
                      <Link key={sub.id} legacyBehavior href={sub.url}>
                        <a style={{ display: 'block', padding: '12px 15px', color: '#666', fontSize: '14px', textDecoration: 'none' }} onClick={closeMenu}>
                          {sub.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link legacyBehavior href={item.url}>
                  <a style={{ display: 'block', padding: '15px 0', color: '#333', fontWeight: '600', textDecoration: 'none' }} onClick={closeMenu}>
                    {item.name}
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: '20px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
            <button onClick={() => onLanguageChange('en')} style={{ flex: 1, padding: '12px', background: currentLanguage === 'en' ? '#005bac' : '#f0f0f0', color: currentLanguage === 'en' ? '#fff' : '#333', border: 'none' }}>English</button>
            <button onClick={() => onLanguageChange('zh')} style={{ flex: 1, padding: '12px', background: currentLanguage === 'zh' ? '#005bac' : '#f0f0f0', color: currentLanguage === 'zh' ? '#fff' : '#333', border: 'none' }}>中文</button>
        </div>
      </div>
    </>
  );
};

export default Header;