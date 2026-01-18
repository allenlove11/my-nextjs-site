// components/news/NewsCard.jsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const NewsCard = ({ 
  id,
  date,
  title,
  imageUrl,
  altText,
  externalLink,
  internalLink,
  delay = 0.1,
  isVisible = true,
  category = "Company News" // 新增分类标签
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [readTime, setReadTime] = useState("3 min read"); // 新增阅读时间

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.visitsadd) {
      window.visitsadd(id);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // 计算阅读时间（基于标题长度）
  useEffect(() => {
    const words = title.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    setReadTime(`${minutes} min read`);
  }, [title]);

  const cardContainerStyle = {
    padding: '0 15px',
    marginBottom: '2rem',
    visibility: isVisible ? 'visible' : 'hidden',
    animationDelay: `${delay}s`,
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#212529',
    display: 'block',
    height: '100%'
  };

  const newsPreviewStyle = {
    height: '100%',
    border: '1px solid #f0f2f5',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
    boxShadow: isHovered 
      ? '0 15px 30px rgba(0, 0, 0, 0.12)' 
      : '0 5px 15px rgba(0,0,0,0.05)',
    transform: isHovered ? 'scale(1.02)' : 'scale(1)'
  };

  // 增大图片区域高度
  const thumbnailStyle = {
    margin: 0,
    overflow: 'hidden',
    height: '300px', // 从200px增加到300px
    backgroundColor: '#f8f9fa',
    position: 'relative',
    borderBottom: '1px solid #f0f2f5'
  };

  const captionStyle = {
    padding: '1.25rem',
    backgroundColor: 'white'
  };

  const metaInfoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem'
  };

  const dateStyle = {
    color: '#6c757d',
    fontSize: '0.8rem',
    fontWeight: '500'
  };

  const readTimeStyle = {
    color: '#6c757d',
    fontSize: '0.8rem',
    fontWeight: '500'
  };

  const categoryStyle = {
    display: 'inline-block',
    backgroundColor: '#e6f7ff',
    color: '#1890ff',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    marginBottom: '0.5rem'
  };

  // 缩短文字区域
  const titleStyle = {
    color: '#212529',
    fontSize: '1.1rem',
    lineHeight: '1.4',
    margin: 0,
    fontWeight: '400',
    display: '-webkit-box',
    WebkitLineClamp: 2, // 保持2行但通过字体大小控制高度
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    minHeight: '2.8em' // 缩短文字区域高度
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%'
  };

  // 渲染图片内容
  const renderImage = () => {
    if (imageError || !imageUrl) {
      return (
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f8f9fa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6c757d',
          fontSize: '14px'
        }}>
          No Image
        </div>
      );
    }

    if (imageUrl.endsWith('.gif')) {
      return (
        <img 
          src={imageUrl} 
          alt="GIF" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      );
    }

    return (
      <Image
        src={imageUrl}
        alt={altText || title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ 
          objectFit: 'cover',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.5s ease'
        }}
        onError={handleImageError}
      />
    );
  };

  const cardContent = (
    <div 
      style={newsPreviewStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure style={thumbnailStyle}>
        <div style={imageContainerStyle}>
          {renderImage()}
        </div>
      </figure>
      <div style={captionStyle}>
        <div style={categoryStyle}>{category}</div>
        <h4 style={titleStyle}>{title}</h4>
        <div style={metaInfoStyle}>
          <span style={dateStyle}>{date}</span>
          <span style={readTimeStyle}>{readTime}</span>
        </div>
      </div>
    </div>
  );

  const linkProps = externalLink ? {
    href: externalLink,
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {
    href: internalLink || '#'
  };

  return (
    <div style={cardContainerStyle}>
      <a 
        {...linkProps}
        onClick={handleClick}
        style={linkStyle}
      >
        {cardContent}
      </a>
    </div>
  );
};

export default NewsCard;