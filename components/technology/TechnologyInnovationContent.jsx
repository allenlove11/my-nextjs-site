"use client";

import { useState, useEffect } from 'react';
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

// --- 数据配置保持不变 ---
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
  <div className="platform-card shadow-sm h-100 bg-white rounded border overflow-hidden">
    <div className="platform-header p-3 bg-light border-bottom">
      <h5 className="platform-title mb-0 text-dark font-weight-bold" style={{fontSize: '1.1rem'}}>{title}</h5>
    </div>
    <div className="platform-image-wrapper p-3 text-center">
      <Image src={src} alt={title} width={600} height={400} className="img-fluid rounded" />
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

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const animationClass = isVisible ? 'fadeInUp animated' : '';

  return (
    <>
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .swiper-button-next, .swiper-button-prev { color: #0c5398 !important; }
      `}</style>
      
      <style jsx>{`
        .page-container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
        .tech-nav-bar { background: #0c5398; position: sticky; top: 0; z-index: 1050; }
        .tech-navmenu { display: flex; list-style: none; height: 70px; margin: 0; padding: 0; }
        .tech-navmenu li { flex: 1; }
        .tech-nav-link { 
          display: flex; align-items: center; justify-content: center; height: 100%; 
          color: white; text-decoration: none; font-weight: 600; transition: 0.3s; 
        }
        .tech-nav-link:hover { background: rgba(255,255,255,0.1); }

        .section-title { text-align: center; margin-bottom: 40px; }
        .section-title h2 { font-size: 2.2rem; color: #0c5398; font-weight: 700; }
        .section-title .divider { width: 50px; height: 3px; background: #0c5398; margin: 10px auto; }

        .tech-tabs-nav { display: flex; justify-content: center; border-bottom: 2px solid #eee; margin-bottom: 35px; }
        .tech-tab-link { 
          padding: 12px 30px; border: none; background: none; color: #777; 
          font-weight: 600; cursor: pointer; border-bottom: 3px solid transparent; 
        }
        .tech-tab-link.active { color: #0c5398; border-bottom-color: #0c5398; }

        /* Equipment Card 修复 */
        .equipment-card { background: white; border-radius: 10px; border: 1px solid #eee; overflow: hidden; height: 100%; transition: 0.3s; }
        .equipment-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        .equipment-image { width: 100%; height: 220px; position: relative; background: #f9f9f9; }
        .equipment-info { padding: 20px; }

        /* Patent Carousel 修复 */
        .patent-slide-card { 
          display: flex; flex-direction: column; align-items: center; 
          background: #fff; padding: 15px; border-radius: 8px; height: 100%; 
        }
        .patent-image-wrapper { width: 100%; position: relative; aspect-ratio: 3/4; margin-bottom: 10px; }

        .ip-grid-card {
          background: #fff; border: 1px solid #eef2f6; border-radius: 10px;
          padding: 20px; text-align: center; height: 100%;
        }

        .animated { animation: fadeInUp 0.6s ease-out forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <nav className="tech-nav-bar">
        <div className="page-container">
          <ul className="tech-navmenu">
            <li><a className="tech-nav-link" href="#process" onClick={(e) => handleScroll(e, 'process')}>Technological Process</a></li>
            <li><a className="tech-nav-link" href="#innovation" onClick={(e) => handleScroll(e, 'innovation')}>Innovation Capability</a></li>
          </ul>
        </div>
      </nav>

      <main className="mt-5 mb-5 page-container">
        {/* Section 1: Technological Process */}
        <section id="process" className={`mb-5 ${animationClass}`}>
          <div className="section-title">
            <h2>Technological Process</h2>
            <div className="divider"></div>
          </div>
          
          <div className="text-center">
            <div className="d-inline-block px-4 py-2 bg-primary text-white rounded-pill mb-3 font-weight-bold">
              Unique Float Glass Process
            </div>
            {/* 修复点：移除了固定的 aspectRatio，改用正常的 width/height 自动缩放 */}
            <div className="shadow-sm rounded border overflow-hidden bg-white">
              <Image 
                src="/assets/images/423fd7e0919544428134882915698abd.png" 
                alt="Float Glass Process" 
                width={1200} 
                height={600} 
                layout="responsive"
                priority 
                className="rounded"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Innovation Capability */}
        <section id="innovation" className={`mt-5 pt-2 ${animationClass}`}>
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
                <div className="row g-3 mb-5">
                  {IP_DATA.map((item, i) => (
                    <div key={i} className="col-md-4 col-sm-6">
                      <div className="ip-grid-card shadow-sm">
                        <i className={`bi ${item.icon} text-primary mb-2 d-block`} style={{fontSize:'1.5rem'}}></i>
                        <h6 className="font-weight-bold mb-1">{item.label}</h6>
                        <p className="text-muted small mb-0">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row g-4 mb-5">
                  <div className="col-lg-6">
                    <div className="p-3 shadow-sm bg-white rounded border h-100 text-center">
                      <h5 className="mb-3 text-primary font-weight-bold">R&D Investment Trend</h5>
                      <InvestmentChart />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-3 shadow-sm bg-white rounded border h-100 text-center">
                      <h5 className="mb-3 text-primary font-weight-bold">Patent Distribution</h5>
                      <div style={{ maxWidth: '350px', margin: '0 auto' }}><PatentChart /></div>
                    </div>
                  </div>
                </div>

                {/* Core Patents Carousel */}
                <div className="bg-light p-4 rounded border">
                  <h4 className="text-center mb-4 font-weight-bold">Core Technical Patents</h4>
                  <Swiper
                    modules={[Navigation, Autoplay, EffectCoverflow]}
                    effect="coverflow"
                    grabCursor centeredSlides loop
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    navigation
                    breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                    coverflowEffect={{ rotate: 10, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
                  >
                    {PATENT_SLIDES.map(slide => (
                      <SwiperSlide key={slide.id}>
                        <div className="patent-slide-card border shadow-sm">
                          <div className="patent-image-wrapper">
                            <Image src={slide.image} alt={slide.title} fill style={{ objectFit: 'contain' }} className="rounded" />
                          </div>
                          <p className="text-center font-weight-bold mt-2 text-dark small">{slide.title}</p>
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
                    <div className="equipment-card shadow-sm">
                      <div className="equipment-image">
                        <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div className="equipment-info">
                        <h6 className="font-weight-bold text-dark mb-2">{item.title}</h6>
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
      </main>
    </>
  );
};

export default TechnologyInnovationContent;