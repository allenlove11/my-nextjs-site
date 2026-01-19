"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// 导入 Swiper 相关组件和样式
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

const PatentChart = dynamic(() => import('./PatentChart'), { ssr: false });
const InvestmentChart = dynamic(() => import('./InvestmentChart'), { ssr: false });

// --- 数据配置区 ---
const PATENT_SLIDES = [
  { id: 1, image: '/assets/images/qqjietu20230309151452.jpg', title: 'An Alkali-containing Glass and Its Strengthening Method' },
  { id: 2, image: '/assets/images/qqjietu20230309151432.jpg', title: 'Inorganic Chemically Strengthened Glass and Its Preparation Method and Application' },
  { id: 3, image: '/assets/images/qqjietu20230309151342.jpg', title: 'Glass-ceramics and Its Preparation Method and Application' },
  { id: 4, image: '/assets/images/qqjietu20230309151403.jpg', title: 'Inorganic Strengthened Glass and Its Preparation Method and Application' },
  { id: 5, image: '/assets/images/qqjietu20230309151243.jpg', title: 'A Flexible Glass and Its Preparation Method and Manufacturing Device' },
  { id: 6, image: '/assets/images/qqjietu20230309151522.jpg', title: 'Chemically Strengthened Glass and Its Preparation Method and Application' }
];

const EQUIPMENT_DATA = [
  { id: 1, image: '/assets/images/tupian22869.png', title: 'Thermal Expansion Coefficient Tester', description: 'Precise measurement of glass thermal expansion properties' },
  { id: 2, image: '/assets/images/tupian25522.png', title: 'Differential Scanning Calorimeter (DSC)', description: 'Analysis of thermal transitions and glass transition temperatures' },
  { id: 3, image: '/assets/images/tupian23154.png', title: 'Scanning Electron Microscope (SEM)', description: 'High-resolution imaging of glass microstructure' },
  { id: 4, image: '/assets/images/tupian22158.png', title: 'X-ray Fluorescence Spectrometer (XRF)', description: 'Elemental composition analysis' },
  { id: 5, image: '/assets/images/tupian22529.png', title: 'Scattered Light Photoelastic Stress Meter', description: 'Stress distribution measurement in glass' },
  { id: 6, image: '/assets/images/tupian24194.png', title: 'Vickers Hardness Tester', description: 'Mechanical hardness testing' },
  { id: 7, image: '/assets/images/tupian29079.png', title: 'Image Measuring Instrument', description: 'Precision dimensional measurement' },
  { id: 8, image: '/assets/images/tupian24096.png', title: 'High Temperature Imaging Furnace', description: 'Real-time observation of glass behavior at high temperatures' },
  { id: 9, image: '/assets/images/tupian21353.png', title: 'Near Infrared UV-Visible Spectrophotometer', description: 'Optical property analysis' }
];

const IP_DATA = [
  { label: 'Key Projects', value: '66 National/Provincial Items', icon: 'bi-trophy' },
  { label: 'Patent Applications', value: '370 (114 Inventions)', icon: 'bi-lightbulb' },
  { label: 'Core Formulas', value: '65 Apps, 46 Authorized', icon: 'bi-funnel' },
  { label: 'PCT International', value: '7 Applications (US, EU, etc.)', icon: 'bi-globe' },
  { label: 'Registered Trademarks', value: '13 Items', icon: 'bi-shield-check' },
  { label: 'Standards Led', value: '5 National, 2 Group Standards', icon: 'bi-journal-check' }
];

const PlatformCard = ({ title, src }) => (
  <div className="platform-card shadow-sm h-100">
    <div className="platform-header">
      <h3 className="platform-title">{title}</h3>
    </div>
    <div className="platform-image-wrapper p-3 text-center">
      <Image src={src} alt={title} width={600} height={400} className="img-fluid rounded shadow-sm" />
    </div>
  </div>
);

const TechnologyInnovationContent = () => {
  const [activeTab, setActiveTab] = useState('intellectual-property');
  const [isVisible, setIsVisible] = useState(false);
  const NAV_HEIGHT = 80;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 增强版滚动修复函数
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
      // 双重保险：防止异步加载导致的位置偏移
      setTimeout(() => {
        const checkTop = element.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
        if (Math.abs(window.pageYOffset - checkTop) > 5) {
          window.scrollTo({ top: checkTop, behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const animationClass = isVisible ? 'fadeInUp animated' : '';

  return (
    <>
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 80px; }
      `}</style>
      
      <style jsx>{`
        .tech-navmenu { 
          display: flex; width: 100%; margin: 0; padding: 0; 
          list-style: none; background: #0c5398; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.15); height: 80px;
        }
        .tech-navmenu li { flex: 1; height: 100%; }
        .tech-nav-link { 
          display: flex; align-items: center; justify-content: center;
          height: 100%; color: white; text-decoration: none; 
          font-weight: 600; font-size: 1.1rem; transition: 0.3s;
          position: relative;
        }
        .tech-nav-link:hover { background: rgba(255,255,255,0.1); }
        /* 悬停条改为白色 */
        .tech-nav-link::after { 
          content: ''; position: absolute; bottom: 0; left: 50%; 
          width: 0; height: 4px; background: #ffffff; 
          transition: 0.3s; transform: translateX(-50%); 
        }
        .tech-nav-link:hover::after { width: 60%; }

        .section-title { text-align: center; margin-bottom: 50px; }
        .section-title h2 { font-size: 2.6rem; color: #0c5398; font-weight: 700; margin-bottom: 15px; }
        .section-title .divider { width: 60px; height: 4px; background: #0c5398; margin: 0 auto; }

        .tech-tabs-nav { display: flex; justify-content: center; border-bottom: 2px solid #eee; margin-bottom: 40px; }
        .tech-tab-link { 
          padding: 15px 35px; border: none; background: none; 
          color: #777; font-weight: 600; cursor: pointer; 
          transition: 0.3s; border-bottom: 4px solid transparent;
        }
        .tech-tab-link.active { color: #0c5398; border-bottom-color: #0c5398; }

        .ip-grid-card {
          background: #fff; border: 1px solid #eef2f6; border-radius: 12px;
          padding: 20px; text-align: center; transition: 0.3s;
        }
        .ip-grid-card:hover { border-color: #0c5398; background: #f8fbff; transform: translateY(-3px); }
        .ip-icon { font-size: 1.8rem; color: #0c5398; margin-bottom: 10px; display: block; }

        .equipment-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); transition: 0.3s; height: 100%; }
        .equipment-card:hover { transform: translateY(-8px); box-shadow: 0 12px 25px rgba(0,0,0,0.15); }
        .equipment-image { height: 240px; position: relative; background: #f5f5f5; }

        .animated { animation: fadeInUp 0.8s ease-out forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 768px) {
          .tech-navmenu { height: auto; flex-direction: column; }
          .tech-nav-link { padding: 15px; }
        }
      `}</style>

      {/* 导航栏 */}
      <nav className="container-fluid p-0 sticky-top" style={{ top: '0', zIndex: '1050' }}>
        <ul className="tech-navmenu">
          <li><a className="tech-nav-link" href="#process" onClick={(e) => handleScroll(e, 'process')}>Technological Process</a></li>
          <li><a className="tech-nav-link" href="#innovation" onClick={(e) => handleScroll(e, 'innovation')}>Innovation Capability</a></li>
        </ul>
      </nav>

      <main className="mt-5 mb-5">
        <div className="container" style={{ maxWidth: '94%' }}>
          
          {/* Section 1: Technological Process */}
          <section id="process" className={`mb-5 pb-5 ${animationClass}`}>
            <div className="section-title">
              <h2>Technological Process</h2>
              <div className="divider"></div>
            </div>
            
            <div className="text-center mt-4">
              <div className="d-inline-block px-4 py-2 bg-primary text-white rounded-pill mb-4 font-weight-bold shadow-sm">
                Unique Float Glass Process
              </div>
              <div className="shadow-lg rounded-xl overflow-hidden bg-white">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7' }}>
                  <Image src="/assets/images/423fd7e0919544428134882915698abd.png" alt="Float Glass Process" fill priority style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Innovation Capability */}
          <section id="innovation" className={`mt-5 pt-4 ${animationClass}`}>
            <div className="section-title">
              <h2>Innovation Capability</h2>
              <div className="divider"></div>
            </div>

            <div className="tech-tabs-nav">
              {['intellectual-property', 'equipment', 'platform'].map(id => (
                <button 
                  key={id}
                  className={`tech-tab-link ${activeTab === id ? 'active' : ''}`}
                  onClick={() => setActiveTab(id)}
                >
                  {id.replace('-', ' ').toUpperCase()}
                </button>
              ))}
            </div>

            <div className="tech-tab-content">
              {activeTab === 'intellectual-property' && (
                <div className="animated">
                  {/* 文字排版优化：网格化显示 */}
                  <div className="row g-3 mb-5">
                    {IP_DATA.map((item, i) => (
                      <div key={i} className="col-md-4 col-sm-6">
                        <div className="ip-grid-card h-100">
                          <i className={`bi ${item.icon} ip-icon`}></i>
                          <h6 className="text-dark font-weight-bold mb-1">{item.label}</h6>
                          <p className="text-muted small mb-0">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 两个图表并排放置 */}
                  <div className="row g-4 mb-5">
                    <div className="col-lg-6">
                      <div className="p-4 shadow-sm bg-white rounded border h-100 text-center">
                        <h5 className="mb-4 text-primary font-weight-bold">R&D Investment Trend</h5>
                        <InvestmentChart />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="p-4 shadow-sm bg-white rounded border h-100 text-center">
                        <h5 className="mb-4 text-primary font-weight-bold">Patent Distribution</h5>
                        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                          <PatentChart />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 核心专利轮播 */}
                  <div className="patent-carousel-wrapper bg-light p-4 rounded-xl border">
                    <h4 className="text-center mb-5 text-dark font-weight-bold">Core Technical Patents</h4>
                    <Swiper
                      modules={[Navigation, Autoplay, EffectCoverflow]}
                      effect="coverflow"
                      grabCursor centeredSlides loop
                      slidesPerView={1}
                      autoplay={{ delay: 3500 }}
                      navigation
                      breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                      coverflowEffect={{ rotate: 15, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
                    >
                      {PATENT_SLIDES.map(slide => (
                        <SwiperSlide key={slide.id}>
                          <div className="patent-slide mx-2 shadow-sm border bg-white p-3 rounded">
                            <Image src={slide.image} alt={slide.title} width={300} height={400} className="img-fluid rounded" />
                            <p className="text-center font-weight-bold mt-3 px-2 text-dark small" style={{ minHeight: '40px' }}>{slide.title}</p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              )}

              {activeTab === 'equipment' && (
                <div className="row g-4 animated">
                  {EQUIPMENT_DATA.map((item) => (
                    <div key={item.id} className="col-md-6 col-lg-4">
                      <div className="equipment-card">
                        <div className="equipment-image">
                          <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="equipment-info p-4">
                          <h5 className="font-weight-bold text-dark mb-2">{item.title}</h5>
                          <div className="divider-sm mb-3" style={{width:'30px', height:'2px', background:'#0c5398'}}></div>
                          <p className="small text-muted mb-0">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'platform' && (
                <div className="row g-4 animated">
                  <div className="col-lg-6">
                    <PlatformCard title="Sichuan Provincial Enterprise Technology Center" src="/assets/images/19526.jpg" />
                  </div>
                  <div className="col-lg-6">
                    <PlatformCard title="Mianyang Touch Screen Protective Glass Engineering Research Center" src="/assets/images/weixintupian20250428145444115.jpg" />
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default TechnologyInnovationContent;