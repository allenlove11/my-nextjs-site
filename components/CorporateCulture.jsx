// components/CorporateCulture.jsx
"use client";

const CorporateCulture = () => {
  const cultureData = [
    {
      id: 1,
      title: "Corporate Vision",
      description: "Committed to becoming an internationally competitive high-alumina cover glass complete solution expert",
      image: "/assets/images/culture/culture-1.jpg"
    },
    {
      id: 2,
      title: "Corporate Spirit",
      description: "Inheriting harmony between people and enterprise, staying true to the original aspiration, surpassing without limits, and innovating to break conventions",
      image: "/assets/images/culture/culture-2.jpg"
    },
    {
      id: 3,
      title: "Corporate Philosophy",
      description: "Dare to compete, be good at competing, and win the competition",
      image: "/assets/images/culture/culture-3.jpg"
    }
  ];

  return (
    <div className="corporate-culture-wrapper">
      <div className="about_text row">
        {cultureData.map((item) => (
          <div key={item.id} className="culture-column col-md-4 col-12">
            <div 
              className="culture-imagebox"
              style={{ 
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* 图片背景 */}
            </div>
            <div className="culture-title">
              {item.title}<i></i>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .corporate-culture-wrapper {
          width: 100%;
          padding: 20px 0 40px;
        }

        .about_text.row {
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
        }

        .culture-column {
          padding: 0;
          display: flex;
          flex-direction: column;
          height: 400px;
          position: relative;
          overflow: hidden;
        }

        .culture-imagebox {
          flex: 1;
          width: 100%;
          position: relative;
          transition: transform 0.6s ease;
        }

        .culture-column:hover .culture-imagebox {
          transform: scale(1.05);
        }

        .culture-imagebox::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
        }

        .culture-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px 20px;
          color: white;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          z-index: 2;
        }

        .culture-title i {
          display: block;
          width: 40px;
          height: 3px;
          background: #4CAF50;
          margin: 15px 0 20px 0;
        }

        .culture-title h3 {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: white;
        }

        .culture-title p {
          font-size: 15px;
          line-height: 1.5;
          margin: 0;
          opacity: 0.9;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .culture-column {
            height: 350px;
            margin-bottom: 0;
          }
          
          .culture-title {
            padding: 20px 15px;
          }
          
          .culture-title p {
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          .culture-column {
            height: 300px;
            margin-bottom: 0;
          }
          
          .culture-title h3 {
            font-size: 20px;
          }
          
          .culture-title p {
            font-size: 13px;
            line-height: 1.4;
          }
          
          .culture-title i {
            width: 30px;
            height: 2px;
            margin: 10px 0 15px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CorporateCulture;