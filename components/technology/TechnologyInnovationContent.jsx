// components/technology/TechnologyInnovationContent.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// 导入轮播图组件
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

// 动态导入图表组件
import dynamic from 'next/dynamic';
const PatentChart = dynamic(() => import('./PatentChart'), { ssr: false });
const InvestmentChart = dynamic(() => import('./InvestmentChart'), { ssr: false });

const TechnologyInnovationContent = ({ dark = false }) => {
  const [activeTab, setActiveTab] = useState('intellectual-property');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = {
    process: useRef(null),
    innovation: useRef(null)
  };

  // 平滑滚动到对应的部分
  const scrollToSection = (sectionId) => {
    if (sectionRefs[sectionId]?.current) {
      sectionRefs[sectionId].current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  // 观察元素是否进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // 专利轮播图数据
  const patentSlides = [
    { 
      id: 1, 
      image: '/assets/images/qqjietu20230309151452.jpg', 
      title: 'An Alkali-containing Glass and Its Strengthening Method' 
    },
    { 
      id: 2, 
      image: '/assets/images/qqjietu20230309151432.jpg', 
      title: 'Inorganic Chemically Strengthened Glass and Its Preparation Method and Application' 
    },
    { 
      id: 3, 
      image: '/assets/images/qqjietu20230309151342.jpg', 
      title: 'Glass-ceramics and Its Preparation Method and Application' 
    },
    { 
      id: 4, 
      image: '/assets/images/qqjietu20230309151403.jpg', 
      title: 'Inorganic Strengthened Glass and Its Preparation Method and Application' 
    },
    { 
      id: 5, 
      image: '/assets/images/qqjietu20230309151243.jpg', 
      title: 'A Flexible Glass and Its Preparation Method and Manufacturing Device' 
    },
    { 
      id: 6, 
      image: '/assets/images/qqjietu20230309151522.jpg', 
      title: 'Chemically Strengthened Glass and Its Preparation Method and Application' 
    }
  ];

  // 实验设备数据
  const equipmentData = [
    { 
      id: 1, 
      image: '/assets/images/tupian22869.png', 
      title: 'Thermal Expansion Coefficient Tester',
      description: 'Precise measurement of glass thermal expansion properties'
    },
    { 
      id: 2, 
      image: '/assets/images/tupian25522.png', 
      title: 'Differential Scanning Calorimeter (DSC)',
      description: 'Analysis of thermal transitions and glass transition temperatures'
    },
    { 
      id: 3, 
      image: '/assets/images/tupian23154.png', 
      title: 'Scanning Electron Microscope (SEM)',
      description: 'High-resolution imaging of glass microstructure'
    },
    { 
      id: 4, 
      image: '/assets/images/tupian22158.png', 
      title: 'X-ray Fluorescence Spectrometer (XRF)',
      description: 'Elemental composition analysis'
    },
    { 
      id: 5, 
      image: '/assets/images/tupian22529.png', 
      title: 'Scattered Light Photoelastic Stress Meter',
      description: 'Stress distribution measurement in glass'
    },
    { 
      id: 6, 
      image: '/assets/images/tupian24194.png', 
      title: 'Vickers Hardness Tester',
      description: 'Mechanical hardness testing'
    },
    { 
      id: 7, 
      image: '/assets/images/tupian29079.png', 
      title: 'Image Measuring Instrument',
      description: 'Precision dimensional measurement'
    },
    { 
      id: 8, 
      image: '/assets/images/tupian24096.png', 
      title: 'High Temperature Imaging Furnace',
      description: 'Real-time observation of glass behavior at high temperatures'
    },
    { 
      id: 9, 
      image: '/assets/images/tupian21353.png', 
      title: 'Near Infrared UV-Visible Spectrophotometer',
      description: 'Optical property analysis'
    }
  ];

  return (
    <>
      <style jsx>{`
        /* 导航样式 */
        .tech-navmenu {
          display: flex;
          width: 100%;
          margin: 0;
          padding: 0;
          list-style: none;
          background: #0c5398;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .tech-navmenu li {
          flex: 1;
          text-align: center;
        }
        
        .tech-nav-link {
          display: block;
          padding: 20px 15px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
          position: relative;
          overflow: hidden;
        }
        
        .tech-nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .tech-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: white;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .tech-nav-link:hover::after {
          width: 80%;
        }
        
        /* 标题样式 */
        .section-title {
          position: relative;
          padding-bottom: 20px;
          margin-bottom: 40px;
          text-align: center;
        }
        
        .section-title h2 {
          font-size: 2.5rem;
          color: #0c5398;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .section-title span {
          display: block;
          font-size: 1.2rem;
          color: #666;
          font-weight: 400;
          margin-top: 5px;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: #0c5398;
          border-radius: 2px;
        }
        
        /* Tab导航样式 */
        .tech-tabs-nav {
          display: flex;
          justify-content: center;
          border-bottom: 2px solid #e9ecef;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        
        .tech-tab-link {
          padding: 15px 30px;
          border: none;
          background: none;
          color: #666;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          border-bottom: 3px solid transparent;
          white-space: nowrap;
        }
        
        .tech-tab-link:hover {
          color: #0c5398;
        }
        
        .tech-tab-link.active {
          color: #0c5398;
          border-bottom-color: #0c5398;
        }
        
        .tech-tab-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #0c5398;
        }
        
        /* Tab内容样式 */
        .tech-tab-content {
          animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* 卡片样式 */
        .equipment-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid #e9ecef;
        }
        
        .equipment-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        
        .equipment-image {
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        
        .equipment-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .equipment-card:hover .equipment-image img {
          transform: scale(1.1);
        }
        
        .equipment-info {
          padding: 20px;
        }
        
        .equipment-info h3 {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 10px;
          font-weight: 600;
        }
        
        .equipment-info p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        /* 专利轮播样式 */
        .patent-carousel {
          position: relative;
          padding: 0 50px;
        }
        
        .patent-slide {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .patent-image {
          height: 200px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 15px;
        }
        
        .patent-image img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        
        .patent-title {
          font-size: 1rem;
          color: #333;
          font-weight: 600;
          text-align: center;
          line-height: 1.4;
        }
        
        /* 图表容器样式 */
        .chart-container {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          height: 100%;
        }
        
        /* 创新平台样式 */
        .innovation-platform {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .platform-image {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          margin: 20px auto;
          display: inline-block;
        }
        
        .platform-title {
          font-size: 1.5rem;
          color: #010212;
          font-weight: 400;
          margin-bottom: 20px;
        }
        
        /* 动画效果 */
        .wow {
          visibility: visible;
          animation-name: fadeInUp;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
          .tech-navmenu {
            flex-direction: column;
          }
          
          .tech-navmenu li {
            width: 100%;
          }
          
          .tech-nav-link {
            padding: 15px 10px;
            font-size: 1rem;
          }
          
          .section-title h2 {
            font-size: 2rem;
          }
          
          .section-title span {
            font-size: 1rem;
          }
          
          .tech-tabs-nav {
            flex-direction: column;
            align-items: center;
          }
          
          .tech-tab-link {
            width: 100%;
            text-align: center;
            padding: 12px 20px;
            border-bottom: 1px solid #eee;
          }
          
          .patent-carousel {
            padding: 0 20px;
          }
          
          .equipment-image {
            height: 180px;
          }
        }
        
        @media (max-width: 576px) {
          .section-title h2 {
            font-size: 1.8rem;
          }
          
          .patent-carousel {
            padding: 0 10px;
          }
          
          .equipment-info {
            padding: 15px;
          }
          
          .equipment-info h3 {
            font-size: 1.1rem;
          }
        }
        .innovation-platforms-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            gap: 40px;
            margin-top: 20px;
          }
          
          .platform-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            border: 1px solid #e9ecef;
          }
          
          .platform-content {
            padding: 0;
          }
          
          .platform-header {
            padding: 25px 25px 15px;
            text-align: center;
            border-bottom: 1px solid #f0f0f0;
          }
          
          .platform-title {
            font-size: 1.4rem;
            color: #333;
            font-weight: 500;
            margin: 0;
            line-height: 1.3;
          }
          
          .platform-image-wrapper {
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }
          
          .platform-image {
            position: relative;
            width: 100%;
            max-width: 600px;
            height: 400px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .platform-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          
          /* 响应式设计 */
          @media (max-width: 992px) {
            .innovation-platforms-container {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            
            .platform-title {
              font-size: 1.3rem;
            }
            
            .platform-image {
              height: 350px;
            }
          }
          
          @media (max-width: 768px) {
            .innovation-platforms-container {
              gap: 25px;
            }
            
            .platform-title {
              font-size: 1.2rem;
            }
            
            .platform-image {
              height: 300px;
            }
            
            .platform-header {
              padding: 20px 15px 10px;
            }
          }
          
          @media (max-width: 576px) {
            .innovation-platforms-container {
              gap: 20px;
            }
            
            .platform-image {
              height: 250px;
            }
            
            .platform-title {
              font-size: 1.1rem;
            }
          }
      `}</style>
      
      {/* 导航菜单 */}
      <section className="container-fluid" style={{ marginTop: '2px', padding: 0 }}>
        <ul className="tech-navmenu">
          <li style={{ width: 'calc(100%/2 - 1px)' }}>
            <a 
              className="tech-nav-link" 
              href="#technological-process"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('process');
              }}
            >
              Technological Process
            </a>
          </li>
          <li style={{ width: 'calc(100%/2 - 1px)' }}>
            <a 
              className="tech-nav-link" 
              href="#innovation-capability"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('innovation');
              }}
            >
              Innovation Capability
            </a>
          </li>
        </ul>
      </section>
      
      {/* 主要内容区域 */}
      <section className="mt-5 mb-5" style={{ overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '90%' }}>
          <div className="row">
            {/* 工艺流程部分 */}
            <div 
              className="col-12 wow animated" 
              id="technological-process"
              ref={sectionRefs.process}
              style={{ 
                visibility: isVisible ? 'visible' : 'hidden',
                animationName: isVisible ? 'fadeInUp' : 'none'
              }}
            >
              <div className="section-title">
                <h2>Technological Process</h2>
                <span>Advanced Manufacturing Technology</span>
              </div>
              
              <div 
                className="col-12 wow animated" 
                style={{ 
                  visibility: isVisible ? 'visible' : 'hidden',
                  animationName: isVisible ? 'fadeInUp' : 'none',
                  animationDelay: '0.3s'
                }}
              >
                <div className="about_text" style={{ marginTop: '20px' }}>
                  <p style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <span style={{ 
                      backgroundColor: '#0c5398', 
                      color: '#fff', 
                      padding: '12px 30px',
                      display: 'inline-block',
                      borderRadius: '4px',
                      fontWeight: '600',
                      fontSize: '1.2rem'
                    }}>
                      Unique Float Glass Process
                    </span>
                  </p>
                  <div style={{ textAlign: 'center' }}>
                    <Image 
                      src="/assets/images/423fd7e0919544428134882915698abd.png" 
                      alt="Float Glass Process Diagram" 
                      width={1600} 
                      height={800}
                      style={{ 
                        maxWidth: '100%', 
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* 创新能力部分 */}
            <div 
              className="col-12 wow animated mt-5" 
              id="innovation-capability"
              ref={sectionRefs.innovation}
              style={{ 
                visibility: isVisible ? 'visible' : 'hidden',
                animationName: isVisible ? 'fadeInUp' : 'none'
              }}
            >
              <div className="section-title">
                <h2>Innovation Capability</h2>
                <span>Driving Technological Advancement</span>
              </div>
              
              <div 
                className="col-12 wow animated" 
                style={{ 
                  visibility: isVisible ? 'visible' : 'hidden',
                  animationName: isVisible ? 'fadeInUp' : 'none',
                  animationDelay: '0.3s'
                }}
              >
                {/* Tab导航 */}
                <div className="tech-tabs-nav">
                  <button
                    className={`tech-tab-link ${activeTab === 'intellectual-property' ? 'active' : ''}`}
                    onClick={() => setActiveTab('intellectual-property')}
                  >
                    Intellectual Property
                  </button>
                  <button
                    className={`tech-tab-link ${activeTab === 'equipment' ? 'active' : ''}`}
                    onClick={() => setActiveTab('equipment')}
                  >
                    Advanced Laboratory Equipment
                  </button>
                  <button
                    className={`tech-tab-link ${activeTab === 'platform' ? 'active' : ''}`}
                    onClick={() => setActiveTab('platform')}
                  >
                    Technology Innovation Platform
                  </button>
                </div>
                
                {/* Tab内容 */}
                <div className="tech-tab-content">
                  {/* 知识产权 */}
                  {activeTab === 'intellectual-property' && (
                    <div className="tab-pane">
                      <div className="row">
                        <div className="col-12">
                          <div className="about_text" style={{ padding: '0 20px' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                              <strong>National/Provincial Key Special Projects:</strong> 66 items
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                              <strong>Total Patent Applications:</strong> 370 (114 invention patents)
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                              <strong>Core Formula Patents:</strong> 65 applications, 46 authorized
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                              <strong>PCT International Patent Applications:</strong> 7 (entered into US, Japan, South Korea, Europe, Africa and other countries/regions)
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                              <strong>Registered Trademarks:</strong> 13
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                              <strong>Computer Software Copyrights:</strong> 8 applications
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                              <strong>Standards:</strong> Led formulation of 5 national standards, participated in 2 group standards
                            </p>
                          </div>
                          
                          {/* 图表 */}
                          <div className="row mt-5 mb-5">
                            <div className="col-md-6 mb-4 mb-md-0">
                              <div className="chart-container">
                                <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#0c5398' }}>
                                  Patent Distribution
                                </h3>
                                <PatentChart />
                              </div>
                            </div>
                            
                            <div className="col-md-6">
                              <div className="chart-container">
                                <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#0c5398' }}>
                                  R&D Investment Trend
                                </h3>
                                <InvestmentChart />
                              </div>
                            </div>
                          </div>
                          
                       
                      {/* 专利轮播部分 - 修改为支持竖版图片 */}
      <div className="row mt-5">
        <div className="col-12">
          <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#0c5398' }}>
            Key Patents
          </h3>
          <div className="patent-carousel">
            <Swiper
              modules={[Navigation, Autoplay, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="swiper-container"
            >
              {patentSlides.map((patent) => (
                <SwiperSlide key={patent.id}>
                  <div className="patent-slide">
                    <div className="vertical-image-container">
                      <Image 
                        src={patent.image} 
                        alt={patent.title}
                        width={300}
                        height={400} // 高度大于宽度，适应竖版图片
                        className="vertical-image"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                    <p className="patent-title">{patent.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* 先进的实验设备 */}
                  {activeTab === 'equipment' && (
                    <div className="tab-pane">
                      <div className="row">
                        {equipmentData.map((equipment, index) => (
                          <div 
                            key={equipment.id}
                            className="col-md-6 col-lg-4 mb-4 wow animated"
                            style={{ 
                              visibility: isVisible ? 'visible' : 'hidden',
                              animationDelay: `${index * 0.1}s`,
                              animationName: isVisible ? 'fadeInUp' : 'none'
                            }}
                          >
                            <div className="equipment-card">
                              <div className="equipment-image">
                                <Image 
                                  src={equipment.image} 
                                  alt={equipment.title}
                                  width={400}
                                  height={200}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                              </div>
                              <div className="equipment-info">
                                <h3>{equipment.title}</h3>
                                {equipment.description && (
                                  <p>{equipment.description}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* 技术创新平台 */}
                  {activeTab === 'platform' && (
                    <div className="tab-pane">
                    <div className="row">
                      <div className="col-12">
                        {/* 技术创新平台容器 */}
                        <div className="innovation-platforms-container">
                          {/* 第一个平台 */}
                          <div className="platform-card">
                            <div className="platform-content">
                              <div className="platform-header">
                                <h3 className="platform-title">Sichuan Provincial Enterprise Technology Center</h3>
                              </div>
                              <div className="platform-image-wrapper">
                                <div className="platform-image">
                                  <Image 
                                    src="/assets/images/19526.jpg" 
                                    alt="Sichuan Provincial Enterprise Technology Center"
                                    width={500}
                                    height={350}
                                    className="platform-img"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                  
                          {/* 第二个平台 */}
                          <div className="platform-card">
                            <div className="platform-content">
                              <div className="platform-header">
                                <h3 className="platform-title">Mianyang Touch Screen Protective Glass Engineering Technology Research Center</h3>
                              </div>
                              <div className="platform-image-wrapper">
                                <div className="platform-image">
                                  <Image 
                                    src="/assets/images/weixintupian20250428145444115.jpg" 
                                    alt="Mianyang Touch Screen Protective Glass Engineering Technology Research Center"
                                    width={500}
                                    height={350}
                                    className="platform-img"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyInnovationContent;