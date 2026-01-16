// ProductApplicationsTab.jsx
"use client";

import React from 'react';

const ProductApplicationsTab = ({ dark }) => {
  const applications = [
    {
      id: 1,
      title: "Smartphones",
      image: "/assets/images/yingyong/shouji.jpeg",
      delay: "0.1s"
    },
    {
      id: 2,
      title: "Tablet Computers",
      image: "/assets/images/yingyong/pingban.jpg",
      delay: "0.2s"
    },
    {
      id: 3,
      title: "Wearable Devices",
      image: "/assets/images/yingyong/zhinengchuandai.jpeg",
      delay: "0.3s"
    },
    {
      id: 4,
      title: "Automotive Smart Cockpit",
      image: "/assets/images/yingyong/qichezuocang.png",
      delay: "0.4s"
    },
    {
      id: 5,
      title: "High-speed Train Windows",
      image: "/assets/images/yingyong/gaotie.jpg",
      delay: "0.5s"
    },
    {
      id: 6,
      title: "Aviation",
      image: "/assets/images/yingyong/hangkong.jpeg",
      delay: "0.6s"
    },
    {
      id: 7,
      title: "Smart Home",
      image: "/assets/images/yingyong/zhinengjiaju.png",
      delay: "0.7s"
    },
    {
      id: 8,
      title: "Medical Equipment",
      image: "/assets/images/yingyong/yiliaoshebei.jpeg",
      delay: "0.8s"
    },
    {
      id: 9,
      title: "LIDAR",
      image: "/assets/images/yingyong/jihuoleida.jpg",
      delay: "0.9s"
    },
    {
      id: 10,
      title: "Industrial Control",
      image: "/assets/images/yingyong/gongkong.jpg",
      delay: "0.10s"
    },
    {
      id: 11,
      title: "Photovoltaic & Solar Thermal",
      image: "/assets/images/yingyong/guangfuguangre.jpg",
      delay: "0.11s"
    },
    {
      id: 12,
      title: "Diving Equipment",
      image: "/assets/images/yingyong/qianshui.jpg",
      delay: "0.12s"
    }
  ];

  return (
    <section className={`product-applications-section ${dark ? "dark" : ""}`}>
      <div className="container mt-5 mb-5" style={{maxWidth: '90%'}}>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-title text-center">
              <h2>Product Application Areas</h2>
              <hr style={{width: '100px', margin: '20px auto 40px', borderTop: '2px solid #667eea'}} />
              <p className="text-muted" style={{maxWidth: '800px', margin: '0 auto 40px'}}>
                Our products are widely used in various high-tech fields, providing advanced glass solutions for different industries and applications.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row blog-grid">
          {applications.map((app) => (
            <div 
              key={app.id}
              className="col-md-6 col-lg-4 wow fadeInUp animated"
              style={{visibility: 'visible', animationDelay: app.delay, animationName: 'fadeInUp'}}
            >
              <div className="news-preview">
                <figure className="np-thumbnail">
                  <div className="post-img">
                    <img 
                      src={app.image} 
                      alt={app.title}
                      style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px 8px 0 0'}}
                    />
                  </div>
                </figure>
                <div 
                  className="np-caption box-shadow"
                  style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '0 0 8px 8px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <h4 
                    style={{
                      margin: 0,
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: '#333'
                    }}
                  >
                    {app.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductApplicationsTab;