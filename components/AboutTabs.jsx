"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [navStyle, setNavStyle] = useState({});
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewDescription, setPreviewDescription] = useState("");

  const contentRefs = useRef({});
  const isManualScrolling = useRef(false); 
  const scrollTimeoutRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const [heights, setHeights] = useState({
    stickyTop: 80,
    tabNavHeight: 65,
    stickyThreshold: 500
  });

  // 1. 初始化高度响应式处理
  useEffect(() => {
    const updateHeights = () => {
      const isMobile = window.innerWidth <= 991;
      setHeights({
        stickyTop: isMobile ? 60 : 80,
        tabNavHeight: isMobile ? 55 : 65,
        stickyThreshold: isMobile ? 400 : 500
      });
    };
    updateHeights();
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  const { stickyTop, tabNavHeight, stickyThreshold } = heights;

  // 2. 核心跳转函数：精准计算位置并加锁
  const scrollToTab = useCallback((tabId, updateURL = true) => {
    const element = contentRefs.current[tabId];
    if (!element) return;

    isManualScrolling.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const rect = element.getBoundingClientRect();
    const absoluteElementTop = rect.top + window.scrollY;
    // 计算：元素顶部 - 主导航高 - Tab导航高
    const offsetPosition = absoluteElementTop - stickyTop - tabNavHeight + 2;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setActiveTab(tabId);
    if (updateURL) router.push(`/about?tab=${tabId}`, { scroll: false });

    // 锁定 1 秒，等待平滑滚动结束，防止被 onScroll 逻辑反向修改 URL
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);
  }, [router, stickyTop, tabNavHeight]);

  // 3. 处理初始加载 URL 匹配
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && (tab === "profile" || tab === "certification")) {
      const timer = setTimeout(() => scrollToTab(tab, false), 500);
      return () => clearTimeout(timer);
    }
  }, [searchParams, scrollToTab]);

  // 4. 处理自动监听高亮
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 导航条 Fixed 逻辑
      if (scrollY < stickyThreshold) {
        setNavStyle({ position: 'absolute', top: '-100px', left: 0, right: 0, zIndex: 1000 });
      } else {
        setNavStyle({ position: 'fixed', top: `${stickyTop}px`, left: 0, right: 0, zIndex: 1000 });
      }

      // 如果是手动点击跳转，跳过下方的自动判定
      if (isManualScrolling.current) return;

      const buffer = stickyTop + tabNavHeight + 150;
      const sections = Object.keys(contentRefs.current);

      for (const tabId of sections) {
        const element = contentRefs.current[tabId];
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollY + buffer >= top && scrollY + buffer < bottom) {
            if (activeTab !== tabId) {
              setActiveTab(tabId);
              router.replace(`/about?tab=${tabId}`, { scroll: false });
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab, router, stickyTop, tabNavHeight, stickyThreshold]);

  const tabs = [
    { id: "profile", name: "Company Profile" },
    { id: "certification", name: "Certification" },
  ];

  const openCertPreview = (imgSrc, title) => {
    setPreviewImage(imgSrc);
    setPreviewDescription(title);
    setPreviewModalOpen(true);
  };

  return (
    <div className="fullscreen-tabs-container">
      {/* 导航栏 */}
      <div className="about-tabs-navigation" style={navStyle}>
        <div className="tabs-inner-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => scrollToTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className="fullscreen-content-singlepage">
        {/* SECTION 1: COMPANY PROFILE */}
        <section id="profile" className="tab-content-section" ref={el => contentRefs.current.profile = el}>
          <div className="container-fluid">
            <div className="tab-content-inner">
              <div className="tab-header"><h2 className="tab-title">Company Profile</h2></div>
              
              <div className="tab-details">
                <div className="company-description-wrapper">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="description-text-content">
                        <h3 className="brand-heading">Panda Glass®</h3>
                        <p>Panda Glass is the flagship product brand of Sichuan Hongke Innovation Technology Co., Ltd., founded in December 2020. The company focuses on the R&D, manufacturing, and commercialization of high-performance electronic glass and advanced optical materials.</p>
                        <p>Panda Glass is the <strong>first company in China</strong> to industrialize both aluminosilicate and lithium-aluminosilicate cover glass, serving a wide range of applications including consumer electronics, automotive displays, industrial HMI, rail transportation, and aerospace.</p>
                        <p>The company operates two high-volume production lines with an annual capacity of <strong>20 million square meters</strong>, supporting glass thicknesses from 0.25 mm to 10.0 mm. Its flagship product line, <strong>PANDA KING®</strong> ultra-thin high-strength cover glass, holds a leading market position in China and ranks among the top suppliers globally.</p>
                        <p>Panda Glass maintains a comprehensive quality and compliance system and is certified to ISO 9001, ISO 14001, IATF 16949, and other international standards.</p>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="company-feature-image">
                        <img src="/assets/images/about/aboutus.jpg" alt="Panda Glass Production" />
                        <div className="image-decoration"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="company-info-cards">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="info-card">
                        <div className="card-icon"><img src="/assets/images/about/1.png" alt="icon" /></div>
                        <div className="card-content">
                          <h4>Total assets</h4>
                          <p className="card-text-large">2.6 Billion RMB</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="info-card">
                        <div className="card-icon"><img src="/assets/images/about/3.png" alt="icon" /></div>
                        <div className="card-content">
                          <h4>Staff</h4>
                          <p className="card-text-large">380+</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="info-card">
                        <div className="card-icon"><img src="/assets/images/about/2.png" alt="icon" /></div>
                        <div className="card-content">
                          <h4>Intellectual Property</h4>
                          <p className="card-text-large">370+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CERTIFICATION */}
        <section id="certification" className="tab-content-section" ref={el => contentRefs.current.certification = el}>
          <div className="container-fluid">
            <div className="tab-content-inner">
              <div className="tab-header"><h2 className="tab-title">Certification</h2></div>
              <div className="tab-details">
                <div className="certifications-grid">
                  {[
                    { img: "/assets/images/certifications/cert-1.jpg", title: "ISO 9001:2015 Quality", desc: "World-class quality management" },
                    { img: "/assets/images/certifications/cert-2.jpg", title: "ISO 14001:2015 Environmental", desc: "Environmental management excellence" },
                    { img: "/assets/images/certifications/cert-3.jpg", title: "IATF 16949:2016 Automotive", desc: "Automotive industry quality standards" },
                    { img: "/assets/images/certifications/cert-4.jpg", title: "ISO 45001:2018 Health & Safety", desc: "Occupational health and safety" },
                    { img: "/assets/images/certifications/cert-5.jpg", title: "ISO 27001:2013 Security", desc: "Information security management" },
                    { img: "/assets/images/certifications/cert-6.jpg", title: "QC080000 Hazardous Substance", desc: "Hazardous substance process management" },
                    { img: "/assets/images/certifications/cert-7.jpg", title: "RoHS & REACH Compliance", desc: "Environmental regulations compliant" },
                    { img: "/assets/images/certifications/cert-8.jpg", title: "UL2809 Validation", desc: "Environmental impact reduction" }
                  ].map((cert, index) => (
                    <div className="cert-item" key={index} onClick={() => openCertPreview(cert.img, cert.title)}>
                      <div className="cert-image-wrapper"><img src={cert.img} alt={cert.title} className="cert-img" /></div>
                      <div className="cert-info"><h4>{cert.title}</h4><p>{cert.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 预览模态框 */}
      {previewModalOpen && (
        <div className="preview-modal" onClick={() => setPreviewModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setPreviewModalOpen(false)}>&times;</span>
            <img src={previewImage} alt="Preview" style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
            <h4 style={{ textAlign: 'center', marginTop: '15px' }}>{previewDescription}</h4>
          </div>
        </div>
      )}

      <style jsx>{`
        .about-tabs-navigation { width: 100%; background: #fff; border-bottom: 1px solid #eee; display: flex; justify-content: center; height: 65px; }
        .tabs-inner-container { display: flex; width: 100%; max-width: 1200px; justify-content: center; }
        .tab-button { 
          flex: 1; max-width: 400px; padding: 0 22px; font-size: 1.1rem; cursor: pointer; 
          border: none; background: #f8f9fa; color: #333; font-weight: 600; transition: 0.3s;
          border-bottom: 4px solid transparent; height: 100%;
        }
        .tab-button.active { background: #0c5398; color: #fff; border-bottom: 4px solid #003e7e; }

        .fullscreen-tabs-container { width: 100vw; position: relative; left: 50%; margin-left: -50vw; background: #fff; }
        .tab-content-section { padding: 100px 0; border-bottom: 1px solid #eee; scroll-margin-top: 145px; }
        .tab-content-inner { max-width: 1300px; margin: 0 auto; padding: 0 20px; }
        .tab-title { font-size: 2.8rem; color: #0c5398; text-align: center; margin-bottom: 50px; font-weight: 700; position: relative; }
        .tab-title::after { content: ''; display: block; width: 60px; height: 4px; background: #0c5398; margin: 15px auto; }
        
        .company-description-wrapper { margin-bottom: 60px; }
        .brand-heading { font-size: 2.2rem; color: #333; margin-bottom: 25px; font-weight: 700; }
        .description-text-content p { font-size: 1.1rem; line-height: 1.8; color: #444; margin-bottom: 20px; text-align: justify; }
        .company-feature-image { position: relative; padding: 10px; }
        .company-feature-image img { width: 100%; border-radius: 8px; position: relative; z-index: 2; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .image-decoration { position: absolute; top: -10px; right: -10px; width: 70%; height: 70%; border: 12px solid #f0f4f8; z-index: 1; border-radius: 8px; }

        .company-info-cards { border-top: 1px solid #f0f0f0; padding-top: 40px; }
        .info-card { display: flex; align-items: center; background: #f8fafd; padding: 35px 25px; border-radius: 12px; margin-bottom: 20px; transition: 0.3s; border: 1px solid #eef2f6; }
        .info-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); border-color: #0c5398; }
        .card-icon { width: 55px; height: 55px; margin-right: 20px; flex-shrink: 0; }
        .card-icon img { width: 100%; height: 100%; object-fit: contain; }
        .card-content h4 { font-size: 0.95rem; color: #777; margin-bottom: 8px; text-transform: uppercase; font-weight: 600; }
        .card-text-large { font-size: 1.7rem; font-weight: 700; color: #0c5398; margin: 0; }

        .certifications-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px; }
        .cert-item { border: 1px solid #eee; padding: 20px; cursor: pointer; transition: 0.3s; background: #fff; }
        .cert-img { width: 100%; height: 350px; object-fit: contain; background: #f9f9f9; margin-bottom: 15px; }

        .preview-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; z-index: 9999; }
        .modal-content { background: #fff; padding: 30px; position: relative; max-width: 800px; width: 90%; }
        .close-modal { position: absolute; top: 10px; right: 20px; font-size: 30px; cursor: pointer; }

        @media (max-width: 991px) {
          .about-tabs-navigation { height: 55px; }
          .tab-content-section { padding: 60px 0; scroll-margin-top: 115px; }
          .tab-button { padding: 0 10px; font-size: 0.9rem; }
          .brand-heading { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
};

export default AboutTabs;