// components/DevelopmentTimeline.jsx
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const DevelopmentTimeline = () => {
  // 按照原网站的4屏数据结构
  const timelineSlides = [
    [
      { 
        year: "2024", 
        events: ["Mass production of China's first deep two-strong glass 'Panda-F.Loong'"]
      },
      { 
        year: "2022", 
        events: [
          "New float process high-alumina cover glass production line ignited and put into operation",
          "Possess two float process high-alumina cover glass production lines",
          "Grew into a domestic leading protective cover glass R&D, manufacturing, and complete solution provider"
        ]
      },
      { 
        year: "2021", 
        events: ["New float process high-alumina cover glass production line started construction"]
      }
    ],
    [
      { 
        year: "2020", 
        events: ["State-owned capital control by Kefa Group, Jingkai Investment Holding Group, and Gongying Assistance Fund"]
      },
      { 
        year: "2019", 
        events: [
          "High-alumina cover glass (two-strong) achieved batch production",
          "Successfully entered Xiaomi's two-strong glass resource pool, becoming the only domestic two-strong glass supplier"
        ]
      },
      { 
        year: "2017-2018", 
        events: [
          "Entered vivo's resource pool and became vivo's only domestic glass supplier",
          "High-alumina cover glass (two-strong) material formula successfully developed",
          "Won the National Science and Technology Progress Second Prize",
          "Won the Manufacturing Single Champion Demonstration Enterprise",
          "Won the Sichuan Province Patent First Prize"
        ]
      }
    ],
    [
      { 
        year: "2015-2016", 
        events: [
          "Expanded market share, achieving batch applications in LG, Huawei, Xiaomi, and Lenovo",
          "'Panda King' gradually gained market recognition"
        ]
      },
      { 
        year: "2014", 
        events: [
          "Registered 'Panda King' trademark",
          "Transitioned to producing 'Panda King' high-alumina cover glass (one-strong)",
          "Performance reached advanced industry levels",
          "Successfully entered Lenovo and Coolpad test certification, entered resource pool"
        ]
      },
      { 
        year: "2013", 
        events: [
          "PDP glass officially launched",
          "Achieved batch supply to Changhong"
        ]
      }
    ],
    [
      { 
        year: "2010-2012", 
        events: [
          "Company established",
          "China's first enterprise to research, develop, and produce PDP, breaking foreign technology monopoly"
        ]
      }
    ]
  ];

  return (
    <div className="development-timeline-wrapper">
      <div className="timeline-swiper-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={false}
          navigation={true}
          className="timeline-swiper"
        >
          {timelineSlides.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="timeline-slide">
                {/* 时间节点列表 */}
                <div className="timeline-nodes-container">
                  {slide.map((node, nodeIndex) => (
                    <div key={nodeIndex} className="timeline-node-item">
                      {/* 左侧的事件描述 */}
                      <div className="events-content">
                        {node.events.map((event, eventIndex) => (
                          <div key={eventIndex} className="event-item">
                            <span className="event-bullet">•</span>
                            <span className="event-text">{event}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* 连接线 */}
                      <div className="node-connector">
                        <div className="connector-line"></div>
                        <div className="year-node">
                          <div className="node-circle">
                            <div className="node-inner"></div>
                          </div>
                          <div className="year-text">{node.year}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .development-timeline-wrapper {
          width: 100%;
          padding: 40px 0;
        }

        .timeline-swiper-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .timeline-swiper {
          width: 100%;
          min-height: 300px;
        }

        .timeline-slide {
          position: relative;
          width: 100%;
          min-height: 300px;
        }

        /* 时间节点容器 */
        .timeline-nodes-container {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          padding: 0 20px;
          gap: 20px;
        }

        .timeline-node-item {
          position: relative;
          width: 30%;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* 左侧的事件描述 */
        .events-content {
          width: 100%;
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
          margin-bottom: 20px;
          min-height: 150px;
        }

        .event-item {
          display: flex;
          margin-bottom: 8px;
          color: #333;
          font-size: 13px;
          line-height: 1.5;
        }

        .event-item:last-child {
          margin-bottom: 0;
        }

        .event-bullet {
          color: #0c5398;
          font-weight: bold;
          margin-right: 8px;
          flex-shrink: 0;
        }

        .event-text {
          flex: 1;
        }

        /* 连接线 */
        .node-connector {
          position: relative;
          width: 2px;
          min-height: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .connector-line {
          width: 2px;
          height: 40px;
          background: #0c5398;
        }

        /* 年份节点 */
        .year-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
        }

        .node-circle {
          width: 24px;
          height: 24px;
          border: 3px solid #0c5398;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.2);
        }

        .node-inner {
          width: 8px;
          height: 8px;
          background: #0c5398;
          border-radius: 50%;
        }

        .year-text {
          margin-top: 8px;
          padding: 6px 12px;
          background: #0c5398;
          color: white;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
          white-space: nowrap;
          box-shadow: 0 3px 10px rgba(76, 175, 80, 0.3);
        }

        /* Swiper导航按钮 */
        .timeline-swiper .swiper-button-prev,
        .timeline-swiper .swiper-button-next {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 3px 15px rgba(0,0,0,0.1);
          color: #0c5398;
          transition: all 0.3s ease;
          top: 50%;
          transform: translateY(-50%);
        }

        .timeline-swiper .swiper-button-prev:after,
        .timeline-swiper .swiper-button-next:after {
          font-size: 20px;
          font-weight: bold;
        }

        .timeline-swiper .swiper-button-prev:hover,
        .timeline-swiper .swiper-button-next:hover {
          background: #0c5398;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }

        .timeline-swiper .swiper-button-prev {
          left: 0;
        }

        .timeline-swiper .swiper-button-next {
          right: 0;
        }

        /* 响应式设计 */
        @media (max-width: 1200px) {
          .events-content {
            padding: 15px;
            min-height: 120px;
          }
        }

        @media (max-width: 992px) {
          .timeline-nodes-container {
            gap: 15px;
            padding: 0 10px;
          }
          
          .events-content {
            padding: 12px;
            min-height: 100px;
          }
          
          .event-text {
            font-size: 12px;
          }
        }

        @media (max-width: 768px) {
          .timeline-nodes-container {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }
          
          .timeline-node-item {
            width: 100%;
            max-width: 500px;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
          
          .events-content {
            width: 70%;
            margin-bottom: 0;
            margin-right: 20px;
            min-height: auto;
          }
          
          .node-connector {
            order: -1;
            width: 2px;
            min-height: 100%;
            margin-right: 20px;
          }
          
          .connector-line {
            height: 20px;
          }
          
          .year-node {
            align-items: flex-start;
          }
          
          .timeline-swiper .swiper-button-prev,
          .timeline-swiper .swiper-button-next {
            width: 40px;
            height: 40px;
          }
          
          .timeline-swiper .swiper-button-prev:after,
          .timeline-swiper .swiper-button-next:after {
            font-size: 16px;
          }
        }

        @media (max-width: 576px) {
          .timeline-node-item {
            flex-direction: column;
            align-items: center;
          }
          
          .events-content {
            width: 100%;
            margin-right: 0;
            margin-bottom: 20px;
            order: 1;
          }
          
          .node-connector {
            order: 2;
            width: 100%;
            min-height: auto;
            margin-right: 0;
            align-items: center;
          }
          
          .connector-line {
            display: none;
          }
          
          .year-node {
            align-items: center;
          }
          
          .timeline-swiper .swiper-button-prev,
          .timeline-swiper .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default DevelopmentTimeline;