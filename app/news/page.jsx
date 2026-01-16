// app/news/page.jsx
"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import NewsNavbar from '@/components/news/NewsNavbar';
import NewsGrid from '@/components/news/NewsGrid';
import PageBanner from '@/components/PageBanner';
import { companyNewsData, industryNewsData, mediaNewsData } from '@/data/newsData';
import ThrownLayout from '../../layouts/ThrownLayout';

const NewsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || 'company-news';
  
  const [activeTab, setActiveTab] = useState(tabFromUrl);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 当URL参数变化时更新activeTab
  useEffect(() => {
    if (tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  // 当Tab切换时更新URL
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // 更新URL查询参数
    router.push(`/news?tab=${tab}`, { scroll: false });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      switch(activeTab) {
        case 'company-news':
          setNewsData(companyNewsData);
          break;
        case 'industry-trends':
          setNewsData(industryNewsData);
          break;
        case 'media-reports':
          setNewsData(mediaNewsData);
          break;
        default:
          setNewsData(companyNewsData);
      }
      setLoading(false);
    }, 300);
  }, [activeTab]);

  const pageContainerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa'
  };

  const contentContainerStyle = {
    width: '100%',
    maxWidth: '90%',
    margin: '3rem auto',
    padding: '0 15px'
  };

  const loadingStyle = {
    textAlign: 'center',
    padding: '3rem 0'
  };

  const spinnerStyle = {
    width: '3rem',
    height: '3rem',
    color: '#007bff'
  };

  return (
    <ThrownLayout>
      <div style={pageContainerStyle}>
        <PageBanner 
          pageName="News Center" 
          title="Latest News & Updates"
          subtitle="Stay updated with Hongke Innovation's latest developments"
          bgImage="/assets/images/xinwenzhongxin.jpg"
          height="400px"
        />
        
        <NewsNavbar activeTab={activeTab} onTabChange={handleTabChange} />
        
        <div style={contentContainerStyle}>
          {loading ? (
            <div style={loadingStyle}>
              <div style={spinnerStyle} className="spinner-border" role="status">
                <span style={{ visibility: 'hidden' }}>Loading...</span>
              </div>
              <p style={{ marginTop: '1rem', color: '#6c757d' }}>Loading news...</p>
            </div>
          ) : (
            <>
              <h2 style={{ 
                marginBottom: '2rem', 
                color: '#212529',
                fontSize: '2rem',
                fontWeight: '600'
              }} id={activeTab}>
                {activeTab === 'company-news' && 'Company News'}
                {activeTab === 'industry-trends' && 'Industry Trends'}
                {activeTab === 'media-reports' && 'Media Reports'}
              </h2>
              <NewsGrid news={newsData} />
            </>
          )}
        </div>
      </div>
    </ThrownLayout>
  );
};

export default NewsPage;