// app/technology-innovation/page.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import TechnologyInnovationContent from '../../components/technology/TechnologyInnovationContent';
import ThrownLayout from '../../layouts/ThrownLayout';
import PageBanner from '../../components/PageBanner';

const TechnologyInnovationPage = () => {
    const scrollTargetRef = useRef(null);
    
    useEffect(() => {
      // 处理页面加载时的锚点跳转
      const handleHashChange = () => {
        if (window.location.hash) {
          const targetId = window.location.hash.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            setTimeout(() => {
              targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }, 300);
          }
        }
      };
      
      // 初始加载时检查hash
      handleHashChange();
      
      // 监听hash变化
      window.addEventListener('hashchange', handleHashChange);
      
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }, []);
  
    return (
      <ThrownLayout>
        <PageBanner 
          pageName="Technology Innovation" 
          bgImage="/assets/images/technology-innovation-banner.jpg"
          title="Technology Innovation"
          subtitle="Driving the Future of Glass Technology"
          height="450px"
        />
        <TechnologyInnovationContent />
      </ThrownLayout>
    );
  };
  
  export default TechnologyInnovationPage;