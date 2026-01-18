import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const BASE_URL = "https://www.panda-glass.cn";

const timelineData = [
  {
    items: [
      { date: "2024", content: ["● Mass production of China's first deep double-strengthened glass 'Panda-F.Loong'."], isMiddle: false },
      { date: "2022", content: ["● New float process high-aluminum cover glass production line put into operation.", "● Owning two float process high-aluminum cover glass production lines.", "● Leading domestic provider of protective cover glass solutions."], isMiddle: true },
      { date: "2021", content: ["● Groundbreaking of the new float process high-aluminum cover glass production line."], isMiddle: false }
    ]
  },
  {
    items: [
      { date: "2020", content: ["● Controlled by state-owned capital including Kefa Group and Jingkai Investment Holding Group."], isMiddle: false },
      { date: "2019", content: ["● Mass production of double-strengthened glass achieved.", "● Successfully entered Xiaomi's supplier pool as the sole domestic provider."], isMiddle: true },
      { date: "2017-2018", content: ["● Became the sole domestic glass supplier for vivo.", "● Won the Second Prize of National Science and Technology Progress Award.", "● Awarded as the Individual Champion Demonstration Enterprise."], isMiddle: false }
    ]
  },
  {
    items: [
      { date: "2015-2016", content: ["● Market share expansion with applications in LG, Huawei, Xiaomi, and Lenovo.", "● 'King Panda' brand gradually gained market recognition."], isMiddle: false },
      { date: "2014", content: ["● Registered 'King Panda' trademark.", "● Shifted to production of 'King Panda' high-aluminum cover glass (single-strengthened).", "● Performance reached advanced industry standards."], isMiddle: true },
      { date: "2013", content: ["● PDP glass officially rolled off the line.", "● Achieved mass supply to Changhong."], isMiddle: false }
    ]
  },
  {
    items: [
      { date: "2010-2012", content: ["● Company established.", "● China's first R&D and production of PDP, breaking international technology monopoly."], isMiddle: false }
    ]
  }
];

export default function HistoryTimeline() {
  return (
    <section className="timeline-section">
      <div className="wave-line-desktop">
        <img src={`${BASE_URL}/template/pc/cn/images/lc-quxian.png`} alt="Curve" />
      </div>

      <div className="timeline-container">
        <div className="timeline-header">
          <h2>
            Development History
            <span>OUR JOURNEY & MILESTONES</span>
          </h2>
        </div>

        <Swiper 
          modules={[Navigation]} 
          navigation 
          slidesPerView={1} 
          className="history-swiper"
        >
          {timelineData.map((slide, pageIdx) => (
            <SwiperSlide key={pageIdx}>
              <div 
                className="timeline-slide-layout" 
                style={{ 
                  justifyContent: slide.items.length < 3 ? 'flex-start' : 'center' 
                }}
              >
                {slide.items.map((item, i) => (
                  <div 
                    key={i} 
                    className={`node-item ${item.isMiddle ? 'node-down' : 'node-up'}`}
                    style={{ 
                      zIndex: 10 - i,
                      flex: slide.items.length < 3 ? '0 0 33.33%' : '1' 
                    }}
                  >
                    <div className="line-axis">
                      <div className="dot-marker" />
                      <div className="content-payload">
                        <span className="year-label">{item.date}</span>
                        <div className="info-card">
                          {item.content.map((text, tidx) => (
                            <p key={tidx}>{text}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .timeline-section {
          position: relative; width: 100vw; left: 50%; margin-left: -50vw;
          min-height: 1050px; padding: 80px 0; overflow: visible;
          background: rgba(255, 255, 255, 0.85) url(${BASE_URL}/template/pc/cn/images/lc_bg.jpg) center/cover;
          background-blend-mode: overlay;
        }

        .wave-line-desktop {
          position: absolute; top: 48%; left: 0; width: 100%; z-index: 1; pointer-events: none;
        }
        .wave-line-desktop img { width: 100%; }

        .timeline-container { position: relative; z-index: 2; width: 100%; }
        .timeline-header { text-align: center; margin-bottom: 60px; }
        .timeline-header h2 { font-size: 38px; color: #111; font-weight: bold; }
        .timeline-header span { display: block; font-size: 16px; color: #666; margin-top: 12px; }

        .timeline-slide-layout { 
          display: flex; width: 94%; margin: 0 auto; height: 850px; position: relative; 
        }

        .node-item { position: relative; display: flex; justify-content: center; }
        
        /* 默认样式：保持 80px 和 520px */
        .node-up { transform: translateY(80px); }
        .node-down { transform: translateY(520px); }

        /* 精准修复：仅每一页的第一个 node-item 额外下移 100px */
        .node-item:first-child { transform: translateY(180px); }

        .line-axis { position: relative; width: 2px; height: 220px; background: #005bac; }
        .dot-marker { 
          position: absolute; width: 16px; height: 16px; background: #005bac; 
          border-radius: 50%; left: -7px; box-shadow: 0 0 12px rgba(0,91,172,0.4);
          z-index: 10;
        }
        .node-up .dot-marker { bottom: 0; }
        .node-down .dot-marker { top: 0; }
        /* 确保第一个项目的圆点依然在轴线底部 */
        .node-item:first-child .dot-marker { bottom: 0; }

        .content-payload { position: absolute; left: 20px; width: 330px; z-index: 20; }
        .node-up .content-payload { bottom: 60px; }
        .node-down .content-payload { top: 20px; }
        /* 确保第一个项目的文案框位置同步 */
        .node-item:first-child .content-payload { bottom: 60px; }

        .year-label { font-size: 26px; font-weight: bold; color: #005bac; display: block; margin-bottom: 12px; }
        .info-card { 
          background: rgba(255,255,255,0.95); padding: 22px; border-radius: 0 15px 15px 15px;
          border-left: 5px solid #005bac; box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          text-align: left;
        }
        .info-card p { font-size: 16px; color: #222; margin-bottom: 10px; line-height: 1.6; }

        .history-swiper { overflow: visible !important; }
        .swiper-wrapper { overflow: visible !important; }
        .swiper-pagination { display: none !important; }

        @media (max-width: 991px) {
          .timeline-section { min-height: auto; padding: 40px 0; overflow: hidden; }
          .wave-line-desktop { display: none; }
          .timeline-slide-layout { 
            flex-direction: column !important; height: auto; width: 100%; 
            padding: 0 20px 40px 40px; box-sizing: border-box; 
          }
          /* 移动端必须取消所有位移 */
          .node-item { transform: none !important; display: block !important; width: 100% !important; flex: none !important; }
          .line-axis { 
            width: 100%; height: auto; background: none; 
            border-left: 2px solid #005bac; padding-bottom: 40px; 
          }
          .dot-marker { left: -9px; top: 0 !important; }
          .content-payload { 
            position: relative; left: 20px; top: 0 !important; bottom: auto !important;
            width: calc(100% - 20px) !important; 
          }
        }
      `}</style>
    </section>
  );
}