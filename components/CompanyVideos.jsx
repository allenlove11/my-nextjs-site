// components/CompanyVideos.jsx
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const CompanyVideos = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");

  // 视频数据
  const videos = [
    {
      id: 1,
      title: "Hongke Innovation (Focus Interview)",
      description: "Featured on CCTV's Focus Interview program",
      src: "/assets/video/fangtan.mp4",
      thumbnail: "/assets/images/video/video-1.jpg"
    },
    {
      id: 2,
      title: "CCTV Special Broadcast: Deepening Reform",
      description: "Featured on CCTV's special program on deepening reform",
      src: "/assets/video/yangshi.mp4",
      thumbnail: "/assets/images/video/video-2.jpg"
    },
    {
      id: 3,
      title: "Panda King Promotional Video",
      description: "Official promotional video for Panda King glass products",
      src: "/assets/video/PandaKing.mp4",
      thumbnail: "/assets/images/video/video-3.jpg"
    },
    {
      id: 4,
      title: "Company Showcase",
      description: "An overview of our manufacturing facilities and technology",
      src: "/assets/video/pandaking2.mp4",
      thumbnail: "/assets/images/video/video-4.jpg"
    }
  ];

  // 打开视频模态框
  const openVideoModal = (src, title) => {
    setCurrentVideoSrc(src);
    setCurrentVideoTitle(title);
    setVideoModalOpen(true);
  };

  // 关闭视频模态框
  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setCurrentVideoSrc("");
    setCurrentVideoTitle("");
  };

  return (
    <div className="company-videos-wrapper">
      <div className="videos-carousel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
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
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          className="videos-swiper"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div 
                className="video-item"
                onClick={() => openVideoModal(video.src, video.title)}
              >
                <div className="video-thumbnail">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="video-thumb"
                    onError={(e) => {
                      e.target.src = '/assets/images/placeholder.jpg';
                    }}
                  />
                  <div className="play-button">
                    <i className="bi bi-play-circle"></i>
                  </div>
                </div>
                <div className="video-info">
                  <h4 className="video-title">{video.title}</h4>
                  <p className="video-description">{video.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 视频预览模态框 */}
      {videoModalOpen && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeVideoModal}>&times;</span>
            <div className="video-player-container">
              <h3 className="video-modal-title">{currentVideoTitle}</h3>
              <div className="video-player-wrapper">
                <video 
                  src={currentVideoSrc} 
                  controls
                  autoPlay
                  className="video-player"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .company-videos-wrapper {
          width: 100%;
          padding: 20px 0 40px;
        }

        .videos-carousel {
          position: relative;
          padding: 0 20px;
        }

        .videos-swiper {
          width: 100%;
          padding: 20px 0 50px;
        }

        /* 视频项 */
        .video-item {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          height: 100%;
        }

        .video-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        /* 视频缩略图 */
        .video-thumbnail {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .video-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .video-item:hover .video-thumb {
          transform: scale(1.05);
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: rgba(0,0,0,0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 30px;
          transition: all 0.3s ease;
        }

        .video-item:hover .play-button {
          background: rgba(76, 175, 80, 0.9);
          transform: translate(-50%, -50%) scale(1.1);
        }

        /* 视频信息 */
        .video-info {
          padding: 20px;
          flex-grow: 1;
        }

        .video-title {
          font-size: 16px;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 10px 0;
          line-height: 1.4;
        }

        .video-description {
          font-size: 13px;
          color: #666;
          line-height: 1.5;
          margin: 0;
        }

        /* Swiper导航按钮 */
        .videos-swiper .swiper-button-prev,
        .videos-swiper .swiper-button-next {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 3px 15px rgba(0,0,0,0.1);
          color: #4CAF50;
          transition: all 0.3s ease;
        }

        .videos-swiper .swiper-button-prev:after,
        .videos-swiper .swiper-button-next:after {
          font-size: 20px;
          font-weight: bold;
        }

        .videos-swiper .swiper-button-prev:hover,
        .videos-swiper .swiper-button-next:hover {
          background: #4CAF50;
          color: white;
          transform: scale(1.1);
        }

        /* 分页器 */
        .videos-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ddd;
          opacity: 0.7;
        }

        .videos-swiper .swiper-pagination-bullet-active {
          background: #4CAF50;
          opacity: 1;
        }

        /* 视频模态框 */
        .video-modal {
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

        .close-modal:hover {
          background: #4CAF50;
          color: white;
        }

        .video-player-container {
          padding: 20px;
        }

        .video-modal-title {
          color: #2c3e50;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          text-align: center;
        }

        .video-player-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
        }

        .video-player {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* 响应式设计 */
        @media (max-width: 1200px) {
          .video-thumbnail {
            height: 160px;
          }
          
          .video-info {
            padding: 15px;
          }
          
          .video-title {
            font-size: 15px;
          }
          
          .video-description {
            font-size: 12px;
          }
        }

        @media (max-width: 992px) {
          .video-thumbnail {
            height: 140px;
          }
          
          .play-button {
            width: 50px;
            height: 50px;
            font-size: 25px;
          }
        }

        @media (max-width: 768px) {
          .videos-carousel {
            padding: 0 10px;
          }
          
          .video-thumbnail {
            height: 130px;
          }
          
          .video-info {
            padding: 12px;
          }
          
          .videos-swiper .swiper-button-prev,
          .videos-swiper .swiper-button-next {
            width: 40px;
            height: 40px;
          }
          
          .videos-swiper .swiper-button-prev:after,
          .videos-swiper .swiper-button-next:after {
            font-size: 16px;
          }
          
          .video-modal-title {
            font-size: 20px;
          }
        }

        @media (max-width: 576px) {
          .video-thumbnail {
            height: 120px;
          }
          
          .video-title {
            font-size: 14px;
          }
          
          .video-modal {
            padding: 10px;
          }
          
          .modal-content {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyVideos;