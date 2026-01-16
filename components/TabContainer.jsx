// TabContainer.jsx
"use client";

import { useState } from 'react';
import PandaMN228Tab from './tabs/PandaMN228Tab';
import Panda1681Tab from './tabs/Panda1681Tab';
import PandaFLoongTab from './tabs/PandaFLoongTab';  // 修正导入路径
import ProductApplicationsTab from './tabs/ProductApplicationsTab';
import PartnersTab from './tabs/PartnersTab';

const TabContainer = ({ dark = false }) => {
  const [activeTab, setActiveTab] = useState('panda-mn228');

  const tabs = [
    { 
      id: 'panda-mn228', 
      label: 'Panda-MN228', 
      chineseLabel: 'Panda-MN228',
    },
    { 
      id: 'panda-1681', 
      label: 'Panda-1681', 
      chineseLabel: 'Panda-1681',
    },
    { 
      id: 'panda-floong',  // 修正ID
      label: 'Panda-F.Loong',  // 修正显示文本
      chineseLabel: 'Panda-F.Loong',
    },
    { 
      id: 'product-applications', 
      label: 'Product Applications', 
      chineseLabel: '产品应用领域',
    },
    { 
      id: 'partners', 
      label: 'Partners', 
      chineseLabel: '合作伙伴',
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'panda-mn228':
        return <PandaMN228Tab dark={dark} />;
      case 'panda-1681':
        return <Panda1681Tab dark={dark} />;
      case 'panda-floong':  // 修正case
        return <PandaFLoongTab dark={dark} />;
      case 'product-applications':
        return <ProductApplicationsTab dark={dark} />;
      case 'partners':
        return <PartnersTab dark={dark} />;
      default:
        return <PandaMN228Tab dark={dark} />;
    }
  };

  // 内联样式对象...
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
    },
    tabBtnHover: {
      backgroundColor: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    },
    tabBtnActive: {
      backgroundColor: 'white',
      color: '#667eea',
      borderBottom: '3px solid #667eea',
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
      borderBottom: '3px solid #667eea',
    },
    tabIcon: {
      fontSize: '1.2rem',
    },
    tabLabel: {
      whiteSpace: 'nowrap',
    },
    contentWrapper: {
      backgroundColor: 'white',
      borderRadius: '0 0 10px 10px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    contentWrapperDark: {
      backgroundColor: '#1a202c',
      color: '#e2e8f0',
    },
  };

  // 动态生成按钮样式
  const getTabBtnStyle = (tabId) => {
    const isActive = activeTab === tabId;
    const baseStyle = { ...styles.tabBtn };
    
    if (dark) {
      Object.assign(baseStyle, styles.tabBtnDark);
    }
    
    if (isActive) {
      Object.assign(baseStyle, dark ? styles.tabBtnDarkActive : styles.tabBtnActive);
    }
    
    return baseStyle;
  };

  // 鼠标悬停状态
  const [hoveredTab, setHoveredTab] = useState(null);
  
  const handleMouseEnter = (tabId) => {
    setHoveredTab(tabId);
  };
  
  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <>
      {/* 内联样式标签 */}
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
            border-bottom: 3px solid #667eea;
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
                    const isHovered = hoveredTab === tab.id;
                    
                    // 添加悬停效果
                    if (isHovered) {
                      if (dark) {
                        Object.assign(btnStyle, styles.tabBtnDarkHover);
                      } else {
                        Object.assign(btnStyle, styles.tabBtnHover);
                      }
                    }
                    
                    return (
                      <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''} ${dark ? 'dark' : ''}`}
                        style={btnStyle}
                        onClick={() => setActiveTab(tab.id)}
                        onMouseEnter={() => handleMouseEnter(tab.id)}
                        onMouseLeave={handleMouseLeave}
                        title={tab.chineseLabel}
                      >
                        <span style={styles.tabIcon}>{tab.icon}</span>
                        <span style={styles.tabLabel}>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 内容 */}
        <div 
          className="tab-content-wrapper"
          style={{
            ...styles.contentWrapper,
            ...(dark ? styles.contentWrapperDark : {})
          }}
        >
          {renderTabContent()}
        </div>
      </div>
    </>
  );
};

export default TabContainer;