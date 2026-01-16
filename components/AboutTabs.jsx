// components/AboutTabs.jsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import HonorsCarousel from "../components/HonorsCarousel.jsx";
import DevelopmentHistory from "@/components/DevelopmentHistory";
import LeadershipCarousel from "@/components/LeadershipCarousel";
import CorporateCulture from "@/components/CorporateCulture";
import CompanyVideos from "@/components/CompanyVideos";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [navStyle, setNavStyle] = useState({});
  const tabsContainerRef = useRef(null);
  const aboutNavRef = useRef(null);
  const contentRefs = useRef({});
  const isScrollingRef = useRef(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // 定义关键位置
  const INITIAL_TOP = -120; // 初始固定位置
  const STICKY_TOP = 100;   // 主导航高度
  const STICKY_THRESHOLD = 550; // 触发粘性的滚动位置
  
  // 在组件顶部添加状态
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewDescription, setPreviewDescription] = useState("");

  // 从URL参数获取tab
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
      setTimeout(() => {
        scrollToTab(tab, false);
      }, 100);
    }
  }, [searchParams]);

  // 监听滚动，控制导航栏位置
  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;
    
    const updateNavPosition = () => {
      const scrollY = window.scrollY;
      
      if (scrollY < STICKY_THRESHOLD) {
        // 在触发点之前，使用绝对定位，保持位置不变
        setNavStyle({
          position: 'absolute',
          top: `${INITIAL_TOP}px`,
          left: 0,
          right: 0,
          zIndex: 1000
        });
      } else {
        // 超过触发点，切换到固定定位
        setNavStyle({
          position: 'fixed',
          top: `${STICKY_TOP}px`,
          left: 0,
          right: 0,
          zIndex: 1000
        });
      }
      
      // 高亮对应的选项卡
      const activeScrollPosition = scrollY + 200;
      
      Object.keys(contentRefs.current).forEach(tabId => {
        const element = contentRefs.current[tabId];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (activeScrollPosition >= offsetTop && activeScrollPosition < offsetTop + offsetHeight) {
            setActiveTab(tabId);
            router.replace(`/about?tab=${tabId}`, { scroll: false });
          }
        }
      });
      
      ticking = false;
    };
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavPosition);
        ticking = true;
      }
    };
    
    // 初始设置
    updateNavPosition();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router]);

  // 检查选项卡滚动位置
  const checkScrollPosition = () => {
    if (!tabsContainerRef.current) return;
    
    const container = tabsContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
  };

  // 滚动选项卡
  const scrollTabs = (direction) => {
    if (!tabsContainerRef.current) return;
    
    const container = tabsContainerRef.current;
    const scrollAmount = 200;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // 滚动到指定tab
  const scrollToTab = useCallback((tabId, updateURL = true) => {
    if (isScrollingRef.current) return;
    
    const element = contentRefs.current[tabId];
    if (element) {
      isScrollingRef.current = true;
      
      // 计算滚动位置
      const elementPosition = element.offsetTop;
      
      // 判断导航栏当前是否处于粘性状态
      const scrollY = window.scrollY;
      const isSticky = scrollY >= STICKY_THRESHOLD;
      
      // 计算偏移量
      let offsetPosition = elementPosition;
      
      if (isSticky) {
        // 粘性状态：需要减去导航栏高度
        offsetPosition = elementPosition - STICKY_TOP - 20;
      } else if (scrollY < INITIAL_TOP) {
        // 在初始位置之前：需要减去导航栏的初始位置
        offsetPosition = elementPosition - INITIAL_TOP - 20;
      } else {
        // 在两者之间：直接滚动到元素位置
        offsetPosition = elementPosition - STICKY_TOP - 20;
      }
      
      // 确保最小值为0
      offsetPosition = Math.max(offsetPosition, 0);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      if (updateURL) {
        router.push(`/about?tab=${tabId}`, { scroll: false });
      }
      
      setActiveTab(tabId);
      
      // 平滑滚动导航到当前激活的tab
      if (tabsContainerRef.current) {
        setTimeout(() => {
          const activeElement = tabsContainerRef.current.querySelector(`[data-tab="${tabId}"]`);
          if (activeElement) {
            activeElement.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
            });
          }
        }, 300);
      }
      
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  }, [router]);

  const tabs = [
    { id: "profile", name: "ABOUT US" },
    { id: "honors", name: "Company Honors" },
    { id: "certification", name: "System Certification" },
    { id: "history", name: "Development History" },
    { id: "leadership", name: "Leadership Care" },
    { id: "culture", name: "Corporate Culture" },
    { id: "organization", name: "Organization Structure" },
    { id: "video", name: "Company Video" },
  ];

  const handleTabClick = (tabId) => {
    scrollToTab(tabId);
  };

  // 添加预览方法
  const openCertPreview = (imgSrc, title) => {
    setPreviewImage(imgSrc);
    setPreviewDescription(title);
    setPreviewModalOpen(true);
  };

  // 添加关闭预览方法
  const closePreview = () => {
    setPreviewModalOpen(false);
  };

  return (
    <div className="fullscreen-tabs-container">
      {/* 导航栏 */}
      <div 
        ref={aboutNavRef}
        className="about-tabs-navigation"
        style={navStyle}
      >
        {/* 左侧滚动箭头 */}
        {showLeftArrow && (
          <button 
            className="tab-scroll-button left" 
            onClick={() => scrollTabs('left')}
            aria-label="Scroll left"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
        )}
        
        {/* 选项卡容器 */}
        <div 
          className="tabs-scroll-container" 
          ref={tabsContainerRef}
          onScroll={checkScrollPosition}
        >
          <div className="tabs-inner-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
                data-tab={tab.id}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        
      </div>

      {/* 占位符 - 当导航栏切换为fixed时防止内容跳动 */}
      <div 
        className="about-nav-placeholder" 
        style={{ height: '60px' }}
      />

      {/* 全屏选项卡内容 - 单页滚动 */}
      <div className="fullscreen-content-singlepage">
       {/* 公司简介 - 优化后的布局 */}
<section 
  id="profile" 
  className="tab-content-section" 
  ref={el => contentRefs.current.profile = el}
>
  <div className="container-fluid">
    <div className="tab-content-inner">
      <div className="tab-header">
        <h1 className="tab-title">ABOUT US</h1>
      </div>
      
      <div className="tab-details">
        <div className="company-intro-container">
          {/* 顶部图片区域 */}
          <div className="company-image-section">
            <div className="company-main-image">
              <img 
                src="/assets/images/about/aboutus.jpg" 
                alt="About Us" 
                className="img-fluid"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>Innovation Excellence</h3>
                  <p>Leading the future of touch screen technology</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 公司信息卡片 */}
          <div className="company-info-cards">
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <div className="info-card">
        <div className="card-icon">
          <img 
            src="/assets/images/about/1.png" 
            alt="Founded Icon" 
            className="card-icon-img"
          />
        </div>
        <div className="card-content">
          <h4>Total assets</h4>
          <p className="card-text-large">2.6 Billion RMB</p>
        </div>
      </div>
    </div>
    
    <div className="col-lg-4 col-md-6">
      <div className="info-card">
        <div className="card-icon">
          <img 
            src="/assets/images/about/3.png" 
            alt="Capital Icon" 
            className="card-icon-img"
          />
        </div>
        <div className="card-content">
          <h4>Staff</h4>
          <p className="card-text-large">380</p>
        </div>
      </div>
    </div>
    
    <div className="col-lg-4 col-md-6">
      <div className="info-card">
        <div className="card-icon">
          <img 
            src="/assets/images/about/2.png" 
            alt="Capacity Icon" 
            className="card-icon-img"
          />
        </div>
        <div className="card-content">
          <h4>Intellectual property</h4>
          <p className="card-text-large">370</p>
        </div>
      </div>
    </div>
  </div>
</div>
          
          {/* 公司简介文字内容 */}
          <div className="company-description">
            <div className="row">
              <div className="col-lg-6">
                <div className="description-block">
                  <h3 className="description-title">
                    <i className="bi bi-award"></i> Company Overview
                  </h3>
                  <p>Sichuan Hongke Innovation Technology Co., Ltd., established on December 28, 2020, with a registered capital of 1.188 billion RMB, is a state-owned enterprise controlled by Kefa Group, Gongying Assistance Fund, and Jingkai Investment Holding Group. It primarily engages in the research, development, manufacturing, and sales of protective glass for smart terminal displays, special glass for aerospace, and new optical materials.</p>
                  <p>It is the first high-tech enterprise in China to simultaneously achieve the industrialization of high-alumina cover glass and lithium-aluminum-silicon cover glass.</p>
                </div>
                
                <div className="description-block">
                  <h3 className="description-title">
                    <i className="bi bi-shield-check"></i> Quality Certifications
                  </h3>
                  <p>The company possesses a comprehensive quality management and customer service system and has passed ISO9001, ISO14001, ISO45001, QC08000, ISO27001, IATF16949, and UL2809 international management system certifications.</p>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="description-block">
                  <h3 className="description-title">
                    <i className="bi bi-trophy"></i> Honors & Awards
                  </h3>
                  <p>The company has been awarded numerous honors, including:</p>
                  <ul className="honors-list">
                    <li>National Specialized, Refined, and Innovative "Little Giant" Enterprise</li>
                    <li>First Prize of Science and Technology Progress Award from the Chinese Materials Research Society</li>
                    <li>National Intelligent Manufacturing Demonstration Factory</li>
                    <li>National Green Factory</li>
                    <li>National High-tech Enterprise</li>
                    <li>Second Prize of Sichuan Provincial Science and Technology Progress Award in 2023</li>
                  </ul>
                </div>
                
                <div className="description-block">
                  <h3 className="description-title">
                    <i className="bi bi-box-seam"></i> Flagship Product
                  </h3>
                  <p>Its flagship product, "PANDA KING," a high-strength, ultra-thin, high-alumina cover glass, is primarily used in smartphones, iPads, smart wearables, automotive smart cockpits, industrial control systems, high-speed rail, and aviation, holding the number one market share in China and number two globally.</p>
                </div>
              </div>
            </div>
            
            {/* 全宽内容块 */}
            <div className="description-block full-width">
              <h3 className="description-title">
                <i className="bi bi-tv"></i> Media Recognition
              </h3>
              <p>The company was featured in a special report on CCTV's Focus Interview program, titled "Hidden Champion: The Little Giant in Mobile Phones," and subsequently appeared on CCTV's special programs "Comprehensive Deepening Reform and the Myriad Aspects of Chinese Modernization" and "A New Chapter in Reform and Opening Up: Sichuan Chapter" in July 2024, receiving consecutive special reports.</p>
            </div>
          </div>
          
          {/* 关键数据统计 */}
          <div className="company-stats">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-number">#1</div>
                  <div className="stat-label">Market Share in China</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-number">#2</div>
                  <div className="stat-label">Global Market Share</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Production Lines</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-number">0.25-10.0mm</div>
                  <div className="stat-label">Product Thickness Range</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    

        {/* 公司荣誉 */}
        <section 
          id="honors" 
          className="tab-content-section" 
          ref={el => contentRefs.current.honors = el}
        >
          <div className="container-fluid">
            <div className="tab-content-inner">
              <div className="tab-header">
                <h1 className="tab-title">Company Honors</h1>
                <p className="tab-intro">We are honored to have received numerous awards and recognitions for our technological innovations, product quality, and business excellence. These achievements reflect our commitment to excellence and continuous improvement.</p>
              </div>
              
              <div className="tab-details">
                {/* 使用荣誉轮播组件 */}
                <HonorsCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* 体系认证 */}
        <section 
  id="certification" 
  className="tab-content-section" 
  ref={el => contentRefs.current.certification = el}
>
  <div className="container-fluid">
    <div className="tab-content-inner">
      <div className="tab-header">
        <h1 className="tab-title">System Certification</h1>
        <p className="tab-intro">Our commitment to quality is demonstrated through our comprehensive certification portfolio. We adhere to the highest international standards to ensure product excellence and customer satisfaction.</p>
      </div>
      
      <div className="tab-details">
        <div className="certification-content">
          <div className="certifications-grid">
            {[
              { 
                img: "/assets/images/certifications/cert-1.jpg", 
                title: "ISO 9001:2015 Quality Management System",
                description: "Certified for world-class quality management standards"
              },
              { 
                img: "/assets/images/certifications/cert-2.jpg", 
                title: "ISO 14001:2015 Environmental Management System",
                description: "Certified for environmental management excellence"
              },
              { 
                img: "/assets/images/certifications/cert-3.jpg", 
                title: "IATF 16949:2016 Automotive Quality Management",
                description: "Certified for automotive industry quality standards"
              },
              { 
                img: "/assets/images/certifications/cert-4.jpg", 
                title: "ISO 45001:2018 Occupational Health & Safety",
                description: "Certified for occupational health and safety management"
              },
              { 
                img: "/assets/images/certifications/cert-5.jpg", 
                title: "ISO 27001:2013 Information Security",
                description: "Certified for information security management system"
              },
              { 
                img: "/assets/images/certifications/cert-6.jpg", 
                title: "QC080000 Hazardous Substance Process Management",
                description: "Certified for hazardous substance process management"
              },
              { 
                img: "/assets/images/certifications/cert-7.jpg", 
                title: "RoHS & REACH Compliance",
                description: "Compliant with environmental regulations"
              },
              { 
                img: "/assets/images/certifications/cert-8.jpg", 
                title: "UL2809 Environmental Claim Validation",
                description: "Validated for environmental impact reduction claims"
              }
            ].map((cert, index) => (
              <div className="cert-item" key={index}>
                <div 
                  className="cert-image-wrapper"
                  onClick={() => openCertPreview(cert.img, cert.title)}
                >
                  <img 
                    src={cert.img} 
                    alt={cert.title}
                    className="cert-img"
                    onError={(e) => {
                      e.target.src = '/assets/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* 预览模态框 - 竖版图片适配 */}
{previewModalOpen && (
        <div className="preview-modal" onClick={closePreview}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closePreview}>&times;</span>
            <div className="preview-image-container">
              <img 
                src={previewImage} 
                alt={previewDescription} 
                className="preview-img"
              />
            </div>
          </div>
        </div>
      )}

      
        {/* 发展历程 */}
        <section 
  id="history" 
  className="tab-content-section" 
  ref={el => contentRefs.current.history = el}
>
  <div className="container-fluid">
    <div className="tab-content-inner">
      <div className="tab-header">
        <h1 className="tab-title">Development History</h1>
        <p className="tab-intro">From our founding to becoming an industry leader, our journey is marked by continuous innovation, expansion, and achievement in touch screen technology.</p>
      </div>
      
      <div className="tab-details">
        {/* 使用DevelopmentHistory组件 */}
        <DevelopmentHistory />
      </div>
    </div>
  </div>
</section>

        {/* 领导关怀 */}
        <section 
  id="leadership" 
  className="tab-content-section" 
  ref={el => contentRefs.current.leadership = el}
>
  <div className="container-fluid">
    <div className="tab-content-inner">
      <div className="tab-header">
        <h1 className="tab-title">Leadership Care</h1>
        <p className="tab-intro">Our company has received visits and guidance from leaders at all levels, whose support and concern have been a strong driving force for our development.</p>
      </div>
      
      <div className="tab-details">
        {/* 使用LeadershipCarousel组件 */}
        <LeadershipCarousel />
      </div>
    </div>
  </div>
</section>

        {/* 企业文化 */}
        <section 
  id="culture" 
  className="tab-content-section" 
  ref={el => contentRefs.current.culture = el}
>
  <div className="container-fluid">
    <div className="tab-content-inner">
      <div className="tab-header">
        <h1 className="tab-title">Corporate Culture</h1>
        <p className="tab-intro">Our culture is built on a foundation of innovation, collaboration, and excellence. We believe that a strong corporate culture drives success and fosters growth for both our company and our employees.</p>
      </div>
      
      <div className="tab-details">
        {/* 使用CorporateCulture组件 */}
        <CorporateCulture />
      </div>
    </div>
  </div>
</section>

        {/* 组织机构 */}
        <section 
  id="organization" 
  className="tab-content-section" 
  ref={el => contentRefs.current.organization = el}
>
  <div className="container-fluid">
    <div className="tab-content-inner">
      <div className="tab-header">
        <h1 className="tab-title">Organization Structure</h1>
        <p className="tab-intro">Our streamlined organizational structure enables efficient decision-making and rapid response to market changes. We maintain a flat hierarchy to encourage open communication and collaboration across all departments.</p>
      </div>
      
      <div className="tab-details">
        <div className="organization-content">
          <div className="org-image-container">
            <img 
              src="/assets/images/organization.jpg" 
              alt="Company Organization Structure"
              className="org-image"
              onError={(e) => {
                e.target.src = '/assets/images/placeholder.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* 公司视频 */}
        <section 
  id="video" 
  className="tab-content-section" 
  ref={el => contentRefs.current.video = el}
>
  <div className="container-fluid">
    <div className="tab-content-inner">
      <div className="tab-header">
        <h1 className="tab-title">Company Videos</h1>
        <p className="tab-intro">Watch our corporate videos to learn more about our technology, manufacturing process, and commitment to innovation. Discover how we are shaping the future of touch screen technology.</p>
      </div>
      
      <div className="tab-details">
        {/* 使用CompanyVideos组件 */}
        <CompanyVideos />
      </div>
    </div>
  </div>
</section>
      </div>

      <style jsx>{`
  /* ===== About页面导航样式 ===== */
  .about-tabs-navigation {
    background: #0c5398;
    padding: 0;
    overflow: hidden;
    margin-bottom: 0;
  }
  
  .tabs-scroll-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0;
  }
  
  .tabs-inner-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    padding: 0;
    min-width: min-content;
    width: 100%;
    justify-content: center;
  }
  
  /* 未选中状态：灰色背景，黑色文字 */
  .tab-button {
    padding: 20px 30px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    background-color: #f5f5f5; /* 灰色背景 */
    color: #333; /* 黑色文字 */
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    min-width: 200px;
    justify-content: center;
    border-bottom: 3px solid transparent;
    text-decoration: none;
    white-space: nowrap;
  }
  
  .tab-button:hover {
    background-color: #e0e0e0; /* 悬停时稍深的灰色 */
    color: #333; /* 保持黑色文字 */
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  /* 选中状态：蓝色背景，白色文字 */
  .tab-button.active {
    background-color: #0c5398; /* 蓝色背景 */
    color: white; /* 白色文字 */
    border-bottom-color: white; /* 白色下边框 */
  }
  
  /* 移除滚动按钮样式 */
  .tab-scroll-button,
  .tab-scroll-button.left,
  .tab-scroll-button.right {
    display: none;
  }
  
  /* ===== 全局样式 ===== */
  h3 {
    color: #0c5398;
    margin-bottom: 20px;
    font-weight: 600;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    font-size: 1.1rem;
  }
  
  .img-fluid {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  }
  
  /* ===== 容器和布局 ===== */
  .fullscreen-tabs-container {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background: #fff;
  }
  
  .fullscreen-content-singlepage {
    width: 100vw;
    background: #fff;
  }
  
  .tab-content-section {
    padding: 60px 0;
    border-bottom: 1px solid #eee;
    scroll-margin-top: 200px;
  }
  
  .tab-content-section:last-child {
    border-bottom: none;
  }
  
  .tab-content-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .tab-header {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .tab-title {
    font-size: 3rem;
    font-weight: 700;
    color: #0c5398;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
  }
  
  .tab-title:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #0154f7;
    border-radius: 2px;
  }
  
  .tab-intro {
    font-size: 1.2rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto 30px;
    line-height: 1.8;
  }
  
  .tab-details {
    margin-top: 40px;
  }
  
  /* ===== 导航系统 ===== */
  .initial-tabs-navigation {
    background: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
    position: fixed;
    z-index: 999;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
  }
  
  .initial-tabs-navigation.sticky-active {
    top: 100px !important;
  }
  
  .tab-scroll-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #e9ecef;
    color: #666;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
  
  .tab-scroll-button:hover {
    background: #0c5398;
    color: #fff;
    border-color: #0c5398;
  }
  
  .tab-scroll-button.left {
    left: 20px;
  }
  
  .tab-scroll-button.right {
    right: 20px;
  }
  
  /* ===== 卡片通用样式 ===== */
  .info-card,
  .honor-card,
  .cert-card,
  .value-card {
    background: #fff;
    border-radius: 10px;
    padding: 30px 20px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    border: 1px solid #e9ecef;
    transition: all 0.3s ease;
    height: 100%;
  }
  
  .info-card:hover,
  .honor-card:hover,
  .cert-card:hover,
  .value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  }
  
  .honor-icon,
  .cert-icon,
  .value-icon {
    font-size: 2.5rem;
    color: #0c5398;
    margin-bottom: 20px;
  }
  
  .card-icon {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card-icon-img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  
  .card-content h4 {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  .card-text-large {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0c5398;
    margin: 0;
  }
  
  /* ===== 公司简介相关 ===== */
  .company-info-cards {
    margin-bottom: 50px;
  }
  
  .info-card:hover {
    border-color: #0154f7;
  }
  
  .company-intro-container {
    width: 100%;
  }
  
  .company-image-section {
    margin-bottom: 50px;
  }
  
  .company-main-image {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  
  .company-main-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .company-main-image:hover img {
    transform: scale(1.05);
  }
  
  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    padding: 40px 30px 20px;
    color: white;
  }
  
  .overlay-content h3 {
    font-size: 2rem;
    color: white;
    margin-bottom: 10px;
  }
  
  .overlay-content p {
    color: rgba(255,255,255,0.9);
    font-size: 1.1rem;
  }
  
  .company-description {
    margin-bottom: 50px;
  }
  
  .description-block {
    margin-bottom: 40px;
    padding: 30px;
    background: white;
    border-radius: 10px;
    border-left: 4px solid #0154f7;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }
  
  .description-block.full-width {
    padding: 30px;
    background: white;
    border-radius: 10px;
    border-left: 4px solid #0154f7;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }
  
  .description-title {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .description-title i {
    color: #0154f7;
  }
  
  .company-description p {
    color: #666;
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  
  .honors-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .honors-list li {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    color: #666;
    position: relative;
    padding-left: 25px;
  }
  
  .honors-list li:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #0154f7;
    font-weight: bold;
  }
  
  .company-stats {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 10px;
    padding: 40px 20px;
    margin-top: 30px;
  }
  
  .stat-item {
    text-align: center;
    padding: 20px 0;
  }
  
  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: #0c5398;
    margin-bottom: 10px;
    line-height: 1;
  }
  
  .stat-label {
    font-size: 1rem;
    color: #666;
    font-weight: 500;
  }
  
  /* ===== 认证证书网格 ===== */
  .certifications-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 40px;
  }
  
  .cert-item {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
  }
  
  .cert-item:hover {
    transform: translateY(-5px);
  }
  
  .cert-image-wrapper {
    width: 100%;
    height: 220px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    cursor: pointer;
  }
  
  .cert-img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    padding: 10px;
    transition: transform 0.3s ease;
  }
  
  .cert-image-wrapper:hover .cert-img {
    transform: scale(1.05);
  }
  
  .cert-info {
    padding: 15px;
  }
  
  .cert-title {
    font-size: 14px;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 8px;
    line-height: 1.4;
  }
  
  .cert-description {
    font-size: 12px;
    color: #666;
    line-height: 1.5;
    margin: 0;
  }
  
  /* ===== 组织架构图片 ===== */
  .organization-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    padding: 20px 0;
  }
  
  .org-image-container {
    width: 100%;
    max-width: 1000px;
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .org-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .org-image:hover {
    transform: scale(1.01);
  }
  
  /* ===== 预览模态框 ===== */
  .preview-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.95);
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .modal-content {
    position: relative;
    width: auto;
    max-width: 90%;
    max-height: 90%;
    background: transparent;
    overflow: visible;
  }
  
  .close-modal {
    position: fixed;
    top: 20px;
    right: 20px;
    color: white;
    font-size: 30px;
    cursor: pointer;
    z-index: 2001;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
    border-radius: 50%;
    border: 2px solid white;
  }
  
  .close-modal:hover {
    background: rgba(76, 175, 80, 0.8);
  }
  
  .preview-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }
  
  .preview-img {
    max-width: 80vw;
    max-height: 85vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  }
  
  /* 针对竖版图片的优化 */
  .preview-img[src*="cert-"] {
    max-width: 50vw;
    max-height: 90vh;
  }
  
  /* ===== 响应式设计 ===== */
  @media (max-width: 1200px) {
    .tab-title {
      font-size: 2.5rem;
    }
    
    .certifications-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }
    
    .stat-number {
      font-size: 2.5rem;
    }
  }
  
  @media (max-width: 992px) {
    .company-main-image img {
      height: 300px;
    }
    
    .card-icon-img {
      width: 50px;
      height: 50px;
    }
    
    .card-text-large {
      font-size: 1.3rem;
    }
  }
  
  @media (max-width: 768px) {
    .fullscreen-content-singlepage {
      margin-top: 400px;
    }
    
    .initial-tabs-navigation {
      top: 400px;
      height: 50px;
      padding: 0 10px;
    }
    
    .initial-tabs-navigation.sticky-active {
      top: 120px !important;
    }
    
    .tab-content-section {
      padding: 40px 0;
      min-height: 100vh;
    }
    
    .tab-title {
      font-size: 2rem;
    }
    
    .tab-button {
      padding: 10px 20px;
      font-size: 14px;
    }
    
    .tab-scroll-button {
      width: 35px;
      height: 35px;
      font-size: 16px;
    }
    
    .overlay-content h3 {
      font-size: 1.5rem;
    }
    
    .description-block {
      padding: 20px;
    }
    
    .stat-number {
      font-size: 2rem;
    }
    
    .certifications-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    
    .cert-image-wrapper {
      height: 150px;
    }
    
    .org-image-container {
      padding: 15px;
    }
    
    .organization-content {
      margin-top: 30px;
    }
    
    .modal-content {
      max-width: 95%;
      max-height: 95%;
    }
    
    .preview-img {
      max-width: 90vw;
      max-height: 80vh;
    }
    
    .preview-img[src*="cert-"] {
      max-width: 80vw;
      max-height: 85vh;
    }
    
    .close-modal {
      top: 10px;
      right: 10px;
      width: 35px;
      height: 35px;
      font-size: 25px;
    }
  }
  
  @media (max-width: 576px) {
    .fullscreen-content-singlepage {
      margin-top: 350px;
    }
    
    .initial-tabs-navigation {
      top: 350px;
      height: 45px;
      padding: 0 5px;
    }
    
    .initial-tabs-navigation.sticky-active {
      top: 80px !important;
    }
    
    .tab-button {
      padding: 8px 15px;
      font-size: 13px;
    }
    
    .tab-title {
      font-size: 1.8rem;
    }
    
    .tab-intro {
      font-size: 1rem;
    }
    
    .tab-scroll-button {
      display: none;
    }
    
    .company-main-image img {
      height: 250px;
    }
    
    .overlay-content h3 {
      font-size: 1.3rem;
    }
    
    .overlay-content p {
      font-size: 1rem;
    }
    
    .info-card {
      padding: 20px 15px;
    }
    
    .card-text-large {
      font-size: 1.2rem;
    }
    
    .card-icon-img {
      width: 40px;
      height: 40px;
    }
    
    .certifications-grid {
      grid-template-columns: 1fr;
      max-width: 300px;
      margin: 40px auto 0;
    }
    
    .cert-image-wrapper {
      height: 180px;
    }
    
    .org-image-container {
      padding: 10px;
    }
    
    .organization-content {
      margin-top: 20px;
    }
    
    .preview-modal {
      padding: 10px;
    }
    
    .preview-img {
      max-width: 95vw;
      max-height: 75vh;
    }
    
    .preview-img[src*="cert-"] {
      max-width: 90vw;
      max-height: 80vh;
    }
  }
`}</style>
    </div>
  );
};

// 辅助函数
function getValueIcon(index) {
  const icons = ['lightbulb', 'shield-check', 'people', 'star', 'person-check'];
  return icons[index] || 'star';
}

export default AboutTabs;