// PartnersTab.jsx
"use client";

import React from 'react';

const PartnersTab = ({ dark }) => {
  const partnerCategories = [
    {
      id: "terminal-customers",
      title: "End Customers",
      images: [
        "/assets/images/brand/7.jpg",
        "/assets/images/brand/2.jpg",
        "/assets/images/brand/6.jpg",
        "/assets/images/brand/33006.jpg",
        "/assets/images/brand/4.jpg",
        "/assets/images/brand/1.jpg",
        "/assets/images/brand/5.jpg",
        "/assets/images/brand/8.jpg",
        "/assets/images/brand/9.jpg",
        "/assets/images/brand/10.jpg",
        "/assets/images/brand/113477.jpg",
        "/assets/images/brand/12.jpg"
      ]
    },
    {
      id: "odm-customers",
      title: "ODM Customers",
      images: [
        "/assets/images/brand/172895848.jpg",
        "/assets/images/brand/21910.jpg",
        "/assets/images/brand/55750.jpg",
        "/assets/images/brand/68116.jpg",
        "/assets/images/brand/36214.jpg"
      ]
    },
    {
      id: "module-factory-customers",
      title: "Module Factory Customers",
      images: [
        "/assets/images/brand/19856.jpg",
        "/assets/images/brand/28566.jpg",
        "/assets/images/brand/36273.jpg",
        "/assets/images/brand/78807.jpg",
        "/assets/images/brand/58547.jpg",
        "/assets/images/brand/67460.jpg",
        "/assets/images/brand/92194.jpg",
        "/assets/images/brand/huikelogo.png"
      ]
    },
    {
      id: "cover-plate-factory-customers",
      title: "Cover Plate Factory Customers",
      images: [
        "/assets/images/brand/17607.jpg",
        "/assets/images/brand/44364.jpg",
        "/assets/images/brand/24374.jpg",
        "/assets/images/brand/54296.jpg",
        "/assets/images/brand/38500.jpg",
        "/assets/images/brand/78040.jpg",
        "/assets/images/brand/45517.jpg"
      ]
    }
  ];

  return (
    <section className={`partners-section ${dark ? "dark" : ""}`}>
      <div className="container mt-5 mb-5">
        <p className="text-center" style={{ marginBottom: '20px', color: dark ? '#e2e8f0' : '#666' }}>
          (The following ranking is in no particular order)
        </p>
        
        {partnerCategories.map((category, index) => (
          <div 
            key={category.id} 
            className="row partner-category mb-5"
          >
            <div 
              className="col-md-12 col-lg-3 wow fadeInLeft animated" 
              style={{ 
                visibility: 'visible', 
                animationName: 'fadeInLeft',
                marginBottom: '20px'
              }}
            >
              <h3 
                className="partner-category-title"
                style={{
                  textAlign: 'center',
                  background: 'linear-gradient(70deg, #0c5398, #0f6ec6)',
                  color: '#fff',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px 10px',
                  borderRadius: '8px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  margin: 0
                }}
              >
                {category.title}
              </h3>
            </div>
            
            <div 
              className="col-md-12 col-lg-9 wow fadeInRight animated" 
              style={{ 
                visibility: 'visible', 
                animationName: 'fadeInRight' 
              }}
            >
              <div className="row">
                {category.images.map((image, imgIndex) => (
                  <div 
                    key={`${category.id}-${imgIndex}`} 
                    className="col-md-6 col-lg-3 mb-4"
                  >
                    <div 
                      className="partner-item"
                      style={{
                        backgroundColor: dark ? '#2d3748' : 'white',
                        padding: '15px',
                        borderRadius: '8px',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <img 
                        src={image} 
                        alt={`Partner ${imgIndex + 1}`} 
                        style={{
                          maxWidth: '100%',
                          maxHeight: '80px',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx global>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .wow.fadeInLeft {
          animation-name: fadeInLeft;
          animation-duration: 0.8s;
          animation-fill-mode: both;
        }
        
        .wow.fadeInRight {
          animation-name: fadeInRight;
          animation-duration: 0.8s;
          animation-fill-mode: both;
        }
        
        .partners-section.dark .partner-item {
          background-color: #2d3748;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 991px) {
          .partner-category-title {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersTab;