"use client";
import ThrownLayout from "@/layouts/ThrownLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const page = () => {
  return (
    <>
      <style jsx>{`
        .fullscreen-banner {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          overflow: hidden;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }
        .fullscreen-banner .banner-carousel,
        .fullscreen-banner .swiper,
        .fullscreen-banner .swiper-slide {
          width: 100vw;
          min-height: 100vh;
        }
        .fullscreen-banner .swiper-slide {
          position: relative;
        }
        .fullscreen-banner .image-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .fullscreen-banner .container {
          position: relative;
          z-index: 2;
          height: 100vh;
          display: flex;
          align-items: center;
        }
        /* 标题美化样式 */
        .slider-main-title {
          width: 100%;
          text-align: center;
          margin-bottom: 30px;
        }
        .slider-main-title h1 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          margin-bottom: 15px;
        }
        .title-line {
          display: block;
          margin-bottom: 10px;
        }
        .highlight {
          color: #ffffff; /* 高亮颜色，可根据需要调整 */
          font-weight: 800;
        }
        .subtitle {
          font-size: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .slider-content.style-five {
          width: 100%;
          text-align: center;
        }
        /* 响应式调整 */
        @media (max-width: 768px) {
          .slider-main-title h1 {
            font-size: 2.2rem;
          }
          .title-line {
            margin-bottom: 8px;
          }
          .subtitle {
            font-size: 1.2rem;
            padding: 0 20px;
          }
        }
        @media (max-width: 480px) {
          .slider-main-title h1 {
            font-size: 1.8rem;
          }
          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
      
      <ThrownLayout header={4}>
        <section className="banner-section style-five fullscreen-banner">
          <div className="banner-carousel">
            <Swiper {...sliderProps.hero2}>
              <SwiperSlide className="slide-item one">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: 'url("/assets/images/slider/slider.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <div className="container">
                  <div className="slider-content style-five">
                    <div className="slider-main-title">
                      <h1>
                        <span className="title-line">China's Premier Provider of 
                          <span className="highlight"> Touch Screen Cover Glass</span>,
                        </span>
                        <span className="title-line">Specializing in 
                          <span className="highlight"> R&D, Manufacturing, and Complete Solutions</span>.
                        </span>
                      </h1>
                    </div>
                    <div className="slider-discripton">
                      <p className="subtitle">
                        Leading the industry with innovative technology, precision engineering, 
                        and comprehensive integrated solutions for global partners.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </ThrownLayout>
    </>
  );
};
export default page;