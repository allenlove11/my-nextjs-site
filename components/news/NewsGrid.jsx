// components/news/NewsGrid.jsx
"use client";

import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import Pagination from '../../components/components/Pagination';

const NewsGrid = ({ news }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);
  const itemsPerPage = 6;

  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 初始设置
    setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 根据窗口宽度计算网格布局
  const getGridStyle = () => {
    if (windowWidth < 768) {
      return {
        display: 'block',
        width: '100%'
      };
    } else if (windowWidth < 1024) {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
        width: '100%'
      };
    } else {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        width: '100%'
      };
    }
  };

  // 计算分页
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const gridContainerStyle = {
    ...getGridStyle(),
    marginBottom: '3rem',
    transition: 'all 0.3s ease'
  };

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '3rem 0',
    color: '#6c757d',
    fontSize: '1.1rem'
  };

  const loadingStyle = {
    textAlign: 'center',
    padding: '2rem 0',
    color: '#6c757d'
  };

  if (windowWidth === 0) {
    return (
      <div style={loadingStyle}>
        <div>Loading layout...</div>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div style={emptyStateStyle}>
        <p>No news available at the moment.</p>
      </div>
    );
  }

  return (
    <div>
      {/* 响应式网格布局 */}
      <div style={gridContainerStyle}>
        {currentNews.map((item, index) => (
          <NewsCard
            key={item.id || index}
            {...item}
            delay={0.1 + (index % 6) * 0.1}
            isVisible={index < 6}
          />
        ))}
      </div>
      
      {/* 分页组件 */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default NewsGrid;