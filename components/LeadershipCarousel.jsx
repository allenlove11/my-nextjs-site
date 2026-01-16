// components/LeadershipCarousel.jsx
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const LeadershipCarousel = () => {
  // 领导关怀数据 - 按id顺序对应图片 leader-1.jpg, leader-2.jpg 等
  const leadersData = [
    {
      id: 1,
      name: "Li Peng",
      position: "Party Secretary and Director of Sichuan Radio and Television Station",
      description: "Visited the company for inspection and research",
    },
    {
      id: 2,
      name: "Zuo Yongxiang",
      position: "Member of the Standing Committee of Sichuan Provincial Party Committee, Secretary of Mianyang Municipal Party Committee, and First Secretary of the Party Committee of Mianyang Military Sub-district",
      description: "Visited the company for inspection and research (when serving as Vice Governor and member of the Party Group of Sichuan Provincial People's Government, Secretary of Mianyang Municipal Party Committee, and First Secretary of the Party Committee of Mianyang Military Sub-district)",
    },
    {
      id: 3,
      name: "Liu Qibao",
      position: "President of the China-Europe Association",
      description: "Visited the company for inspection and research (when serving as member of the Political Bureau of the Central Committee, Secretary of the Secretariat of the Central Committee, and Minister of the Central Propaganda Department)",
    },
    {
      id: 4,
      name: "Cao Lijun",
      position: "Member of the Standing Committee of Sichuan Provincial Party Committee, Secretary of Chengdu Municipal Party Committee, Director of the Municipal Finance and Economics Committee, and First Secretary of the Party Committee of Chengdu Garrison",
      description: "Visited the company for inspection and research (when serving as member of the Standing Committee of Sichuan Provincial Party Committee and Secretary of Mianyang Municipal Party Committee)",
    },
    {
      id: 5,
      name: "Liu Chao",
      position: "Vice Governor, member of the Party Group, and Secretary of the Party Committee of the State-owned Assets Supervision and Administration Commission of Qinghai Provincial People's Government",
      description: "Visited the company for inspection and research (when serving as Secretary of Mianyang Municipal Party Committee and Secretary of Mianyang Municipal Working Committee of Sichuan Province)",
    },
    {
      id: 6,
      name: "Lin Shucheng",
      position: "Vice Chairman of the Sichuan Provincial Committee of the Chinese People's Political Consultative Conference",
      description: "Visited the company for inspection and research (when serving as Deputy Secretary of Mianyang Municipal Party Committee, Mayor of Mianyang, Deputy Secretary of Mianyang Municipal Working Committee, and Director of the Management Committee)",
    },
    {
      id: 7,
      name: "Yuan Fang",
      position: "Secretary of the Tongnan District Committee of Chongqing City",
      description: "Visited the company for inspection and research (when serving as Deputy Secretary of Mianyang Municipal Party Committee, Secretary of the Party Group, and Mayor of Mianyang Municipal People's Government)",
    }
  ];

  return (
    <div className="leadership-carousel-wrapper">
      <div className="leadership-carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          pagination={{
            clickable: true,
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
          className="leadership-swiper"
        >
          {leadersData.map((leader) => (
            <SwiperSlide key={leader.id}>
              <div className="leader-item">
                <div className="news-preview">
                  <figure className="np-thumbnail">
                    <div className="post-img">
                      <img 
                        src={`/assets/images/leader/leader-${leader.id}.jpg`} 
                        alt={leader.name}
                        className="leader-image"
                        onError={(e) => {
                          e.target.src = '/assets/images/placeholder.jpg';
                        }}
                      />
                    </div>
                  </figure>
                  <div className="np-caption">
                    <h4>{leader.name}</h4>
                    <p className="leader-position">{leader.position}</p>
                    <p className="leader-description">{leader.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 自定义导航按钮 */}
        <div className="custom-navigation">
          <button className="custom-prev">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="custom-next">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <style jsx>{`
        .leadership-carousel-wrapper {
          width: 100%;
          padding: 20px 0 40px;
        }

        .leadership-carousel-container {
          position: relative;
          padding: 0 20px;
        }

        .leadership-swiper {
          width: 100%;
          padding: 20px 0 50px;
        }

        /* 领导项 */
        .leader-item {
          height: 100%;
        }

        .news-preview {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .news-preview:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        /* 图片部分 */
        .np-thumbnail {
          margin: 0;
          height: 220px;
          overflow: hidden;
        }

        .post-img {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .leader-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .news-preview:hover .leader-image {
          transform: scale(1.05);
        }

        /* 内容部分 */
        .np-caption {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .np-caption h4 {
          margin: 0 0 10px 0;
          color: #2c3e50;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;
        }

        .leader-position {
          color: #0c5398;
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 12px 0;
          line-height: 1.4;
        }

        .leader-description {
          color: #666;
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
          flex-grow: 1;
        }

        /* 自定义导航按钮 */
        .custom-navigation {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 20px;
        }

        .custom-prev,
        .custom-next {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e9ecef;
          color: #0c5398;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }

        .custom-prev:hover,
        .custom-next:hover {
          background: #0c5398;
          color: white;
          border-color: #0c5398;
          transform: scale(1.1);
        }

        /* 自定义分页器 */
        .custom-bullet {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ddd;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          background: #0c5398;
          transform: scale(1.2);
        }

        /* 响应式设计 */
        @media (max-width: 1200px) {
          .np-thumbnail {
            height: 200px;
          }
          
          .np-caption h4 {
            font-size: 18px;
          }
          
          .leader-position {
            font-size: 13px;
          }
          
          .leader-description {
            font-size: 12px;
          }
        }

        @media (max-width: 992px) {
          .np-thumbnail {
            height: 180px;
          }
          
          .np-caption {
            padding: 15px;
          }
        }

        @media (max-width: 768px) {
          .leadership-carousel-container {
            padding: 0 10px;
          }
          
          .np-thumbnail {
            height: 160px;
          }
          
          .np-caption h4 {
            font-size: 16px;
            margin-bottom: 8px;
          }
          
          .leader-position {
            font-size: 12px;
            margin-bottom: 8px;
          }
          
          .leader-description {
            font-size: 11px;
          }
          
          .custom-prev,
          .custom-next {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
        }

        @media (max-width: 576px) {
          .np-thumbnail {
            height: 140px;
          }
          
          .np-caption {
            padding: 12px;
          }
          
          .np-caption h4 {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default LeadershipCarousel;