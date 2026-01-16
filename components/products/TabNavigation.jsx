// components/products/TabNavigation.jsx
"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const TabNavigation = ({ dark = false, activeTab }) => {
  const pathname = usePathname();
  
  const tabs = [
    { 
      id: 'panda-mn228', 
      label: 'Panda-MN228', 
      chineseLabel: 'Panda-MN228',
      href: '/products/panda-mn228'
    },
    { 
      id: 'panda-1681', 
      label: 'Panda-1681', 
      chineseLabel: 'Panda-1681',
      href: '/products/panda-1681'
    },
    { 
      id: 'panda-floong',
      label: 'Panda-F.Loong',
      chineseLabel: 'Panda-F.Loong',
      href: '/products/panda-floong'
    },
    { 
      id: 'applications', 
      label: 'Product Applications', 
      chineseLabel: '产品应用领域',
      href: '/products/applications'
    },
    { 
      id: 'partners', 
      label: 'Partners', 
      chineseLabel: '合作伙伴',
      href: '/products/partners'
    }
  ];

  // 内联样式对象
  const styles = {
    container: {
      marginBottom: '50px',
    },
    navigationWrapper: {
      background: '#0c5398',
      padding: '0',
      overflow: 'hidden',
    },
    navigation: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    navigationDark: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    tabBtn: {
      padding: '20px 30px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      color: '#333',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flex: '1',
      minWidth: '200px',
      justifyContent: 'center',
      borderBottom: '3px solid transparent',
      textDecoration: 'none',
    },
    tabBtnHover: {
      backgroundColor: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    },
    tabBtnActive: {
      backgroundColor: 'white',
      color: '#0c5398',
      borderBottom: '3px solid #0c5398',
    },
    tabBtnDark: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: '#ddd',
    },
    tabBtnDarkHover: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
    },
    tabBtnDarkActive: {
      backgroundColor: '#2d3748',
      color: 'white',
      borderBottom: '3px solid #0c5398',
    },
    tabIcon: {
      fontSize: '1.2rem',
    },
    tabLabel: {
      whiteSpace: 'nowrap',
    },
  };

  // 动态生成按钮样式
  const getTabBtnStyle = (tabId) => {
    const isActive = activeTab === tabId || pathname.includes(tabId);
    const baseStyle = { ...styles.tabBtn };
    
    if (dark) {
      Object.assign(baseStyle, styles.tabBtnDark);
    }
    
    if (isActive) {
      Object.assign(baseStyle, dark ? styles.tabBtnDarkActive : styles.tabBtnActive);
    }
    
    return baseStyle;
  };

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .tab-content-wrapper {
          animation: fadeIn 0.5s ease;
        }
        
        @media (max-width: 768px) {
          .tab-navigation {
            flex-direction: column;
          }
          
          .tab-btn {
            min-width: 100%;
            border-radius: 0;
            border-bottom: 1px solid #dee2e6;
          }
          
          .tab-btn.active {
            border-bottom: 3px solid #0c5398;
          }
        }
      `}</style>
      
      <div style={styles.container}>
        {/* Tab 导航 */}
        <div style={styles.navigationWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div 
                  className="tab-navigation"
                  style={{
                    ...styles.navigation,
                    ...(dark ? styles.navigationDark : {})
                  }}
                >
                  {tabs.map((tab) => {
                    const btnStyle = getTabBtnStyle(tab.id);
                    
                    return (
                      <Link
                        key={tab.id}
                        href={tab.href}
                        className={`tab-btn ${(activeTab === tab.id) ? 'active' : ''} ${dark ? 'dark' : ''}`}
                        style={btnStyle}
                      >
                        <span style={styles.tabLabel}>{tab.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabNavigation;