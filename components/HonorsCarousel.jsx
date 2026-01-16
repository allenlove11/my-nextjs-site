// components/HonorsCarousel.jsx
"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const HonorsCarousel = () => {
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewDescription, setPreviewDescription] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // 图片和描述的正确对应关系
  // 假设我们有17张不同的图片，但18个描述
  // 我们需要创建一个映射数组
  const honorsMapping = [
    { image: "honors-1.jpg", description: "Manufacturing Single Champion Demonstration Enterprise" },
    { image: "honors-2.jpg", description: "Mianyang Touch Screen Protective Glass Engineering Technology Research Center" },
    { image: "honors-3.jpg", description: "Advanced foreign trade enterprises" },
    { image: "honors-4.jpg", description: "Green factory" },
    { image: "honors-5.jpg", description: "First Prize for Scientific and Technological Progress from the Chinese Materials Research Society" },
    { image: "honors-6.jpg", description: "Sichuan Province Innovative Enterprises" },
    { image: "honors-7.jpg", description: "Outstanding Enterprises in Technological Innovation" },
    { image: "honors-8.jpg", description: "Specialized, refined and innovative 'little giant' enterprises" },
    { image: "honors-9.jpg", description: "Sichuan Provincial Enterprise Technology Center" },
    { image: "honors-10.jpg", description: "National Science and Technology Progress Award" },
    { image: "honors-11.jpg", description: "Top 50 Manufacturing Enterprises in Mianyang in 2025" },
    { image: "honors-12.jpg", description: "National-level intelligent manufacturing demonstration factory" },
    { image: "honors-13.jpg", description: "Major Scientific and Technological Advances in Mianyang City in 2024" },
    { image: "honors-14.jpg", description: "Top Ten Innovative Enterprises in Mianyang" },
    { image: "honors-15.jpg", description: "Specialized, Refined and Innovative Small and Medium-sized Enterprises in Sichuan Province" },
    { image: "honors-16.jpg", description: "Sichuan Provincial Famous Brand Products" },
    { image: "honors-17.jpg", description: "High-tech enterprises" },
    // 注意：这里少一张图片，我们需要决定如何处理
  ];

  // 打开预览模态框
  const openPreview = (index) => {
    if (index < honorsMapping.length) {
      setPreviewImage(`/assets/images/honors/${honorsMapping[index].image}`);
      setPreviewDescription(honorsMapping[index].description);
    } else {
      // 如果索引超出范围，使用默认值
      setPreviewImage(`/assets/images/honors/honors-${index + 1}.jpg`);
      setPreviewDescription("荣誉证书");
    }
    setPreviewModalOpen(true);
  };

  // 关闭预览模态框
  const closePreview = () => {
    setPreviewModalOpen(false);
  };

  // 处理轮播变化
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="honors-carousel-wrapper">
      <div className="honors-carousel-container">
        {/* 主轮播 - 使用实际的数据数量 */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay, EffectCoverflow]}
          spaceBetween={-80} // 负间距让卡片重叠
          slidesPerView={3} // 一屏显示3个
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          navigation={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0, // 不旋转
            stretch: 0, // 不拉伸
            depth: 300, // 深度，控制卡片之间的层次感
            modifier: 1.8, // 效果强度
            slideShadows: false, // 关闭阴影
          }}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              coverflowEffect: {
                stretch: 0,
                depth: 100,
                modifier: 1
              }
            },
            576: {
              slidesPerView: 2,
              spaceBetween: -40,
              coverflowEffect: {
                stretch: 0,
                depth: 150,
                modifier: 1.2
              }
            },
            768: {
              slidesPerView: 3,
              spaceBetween: -60,
              coverflowEffect: {
                stretch: 0,
                depth: 200,
                modifier: 1.5
              }
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: -80,
              coverflowEffect: {
                stretch: 0,
                depth: 300,
                modifier: 1.8
              }
            }
          }}
          className="honors-swiper"
        >
          {honorsMapping.map((honor, index) => (
            <SwiperSlide key={index}>
              <div 
                className={`honor-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => openPreview(index)}
              >
                <div className="honor-image-wrapper">
                  <img 
                    src={`/assets/images/honors/${honor.image}`} 
                    alt={`荣誉证书 ${index + 1}`}
                    className="honor-image"
                    onError={(e) => {
                      e.target.src = '/assets/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="honor-text">
                  <p className="honor-description">
                    {honor.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 预览模态框 */}
      {previewModalOpen && (
        <div className="preview-modal" onClick={closePreview}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closePreview}>&times;</span>
            <div className="preview-content">
              <div className="preview-image-wrapper">
                <img src={previewImage} alt="荣誉证书预览" />
              </div>
              <div className="preview-text">
                <p>{previewDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* 荣誉轮播包装器 */
        .honors-carousel-wrapper {
          width: 100%;
          margin: 0 auto;
          padding: 40px 0 20px;
        }

        .honors-carousel-container {
          position: relative;
          height: 550px; /* 容器高度，比卡片稍高，防止重叠 */
        }

        /* 主轮播样式 */
        .honors-swiper {
          width: 100%;
          height: 100%;
        }

        /* 荣誉项 */
        .honor-item {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
          cursor: pointer;
          transform: scale(0.85);
          opacity: 0.5;
          height: 500px; /* 固定卡片高度为500px */
          width: 100%;
        }

        .honor-item.active {
          transform: scale(1);
          opacity: 1;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
          z-index: 10;
        }

        /* 图片容器 - 占总高度的76% */
        .honor-image-wrapper {
          width: 100%;
          height: 380px; /* 380px / 500px = 76% */
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
        }

        /* 图片本身 - 根据原始尺寸自适应 */
        .honor-image {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain; /* 保持图片原始比例 */
          transition: transform 0.4s ease;
        }

        .honor-item.active .honor-image {
          transform: scale(1.05);
        }

        /* 文字区域 - 占总高度的24% */
        .honor-text {
          padding: 15px 10px;
          border-top: 1px solid #eee;
          min-height: 120px; /* 120px / 500px = 24% */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: white;
          flex-grow: 1;
        }

        .honor-description {
          margin: 0;
          color: #333;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 500;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* 最多显示2行 */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .honor-item.active .honor-description {
          font-weight: 600;
          font-size: 18px;
        }

        /* Swiper导航按钮 */
        .honors-swiper .swiper-button-next,
        .honors-swiper .swiper-button-prev {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 3px 15px rgba(0,0,0,0.1);
          color: #4CAF50;
          transition: all 0.3s ease;
        }

        .honors-swiper .swiper-button-next:after,
        .honors-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .honors-swiper .swiper-button-next:hover,
        .honors-swiper .swiper-button-prev:hover {
          background: #4CAF50;
          color: white;
          transform: scale(1.1);
        }

        /* 预览模态框 */
        .preview-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.9);
          z-index: 2000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .modal-content {
          position: relative;
          max-width: 800px;
          max-height: 90%;
          background: white;
          border-radius: 12px;
          overflow: auto;
        }

        .close-modal {
          position: absolute;
          top: 10px;
          right: 15px;
          color: #333;
          font-size: 28px;
          cursor: pointer;
          z-index: 10;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50%;
        }

        .preview-content {
          display: flex;
          flex-direction: column;
        }

        .preview-image-wrapper {
          width: 100%;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
        }

        .preview-image-wrapper img {
          max-width: 100%;
          max-height: 500px;
          object-fit: contain;
        }

        .preview-text {
          padding: 20px;
          border-top: 1px solid #eee;
          text-align: center;
        }

        .preview-text p {
          margin: 0;
          color: #333;
          font-size: 16px;
          line-height: 1.6;
        }

        /* 响应式设计 */
        @media (max-width: 1200px) {
          .honors-carousel-container {
            height: 500px;
          }
          
          .honor-item {
            height: 450px;
            transform: scale(0.8);
          }
          
          .honor-item.active {
            transform: scale(0.95);
          }
          
          .honor-image-wrapper {
            height: 342px; /* 450px * 76% = 342px */
          }
          
          .honor-text {
            min-height: 108px; /* 450px * 24% = 108px */
          }
          
          .honor-description {
            font-size: 14px;
          }
        }

        @media (max-width: 992px) {
          .honors-carousel-container {
            height: 460px;
          }
          
          .honor-item {
            height: 420px;
            transform: scale(0.75);
          }
          
          .honor-item.active {
            transform: scale(0.9);
          }
          
          .honor-image-wrapper {
            height: 319px; /* 420px * 76% = 319px */
          }
          
          .honor-text {
            min-height: 101px; /* 420px * 24% = 101px */
          }
        }

        @media (max-width: 768px) {
          .honors-carousel-container {
            height: 420px;
          }
          
          .honor-item {
            height: 380px;
            transform: scale(0.7);
          }
          
          .honor-item.active {
            transform: scale(0.85);
          }
          
          .honor-image-wrapper {
            height: 289px; /* 380px * 76% = 289px */
          }
          
          .honor-text {
            min-height: 91px; /* 380px * 24% = 91px */
            padding: 10px 8px;
          }
          
          .honor-description {
            font-size: 12px;
          }
          
          .honors-swiper .swiper-button-next,
          .honors-swiper .swiper-button-prev {
            width: 40px;
            height: 40px;
          }
          
          .honors-swiper .swiper-button-next:after,
          .honors-swiper .swiper-button-prev:after {
            font-size: 16px;
          }
        }

        @media (max-width: 576px) {
          .honors-carousel-container {
            height: 380px;
          }
          
          .honor-item {
            height: 340px;
            transform: scale(0.85);
            opacity: 0.7;
          }
          
          .honor-item.active {
            transform: scale(1);
            opacity: 1;
          }
          
          .honor-image-wrapper {
            height: 258px; /* 340px * 76% = 258px */
          }
          
          .honor-text {
            min-height: 82px; /* 340px * 24% = 82px */
          }
          
          .honor-description {
            font-size: 11px;
            -webkit-line-clamp: 2; /* 在小屏幕上显示2行 */
          }
          
          .honors-swiper .swiper-button-next,
          .honors-swiper .swiper-button-prev {
            display: none;
          }
        }

        @media (max-width: 360px) {
          .honors-carousel-container {
            height: 340px;
          }
          
          .honor-item {
            height: 300px;
            transform: scale(0.8);
          }
          
          .honor-item.active {
            transform: scale(0.95);
          }
          
          .honor-image-wrapper {
            height: 228px; /* 300px * 76% = 228px */
          }
          
          .honor-text {
            min-height: 72px; /* 300px * 24% = 72px */
          }
          
          .honor-description {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default HonorsCarousel;