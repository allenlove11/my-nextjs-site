"use client";

import { Suspense } from "react";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import AboutTabs from "@/components/AboutTabs"; // 导入选项卡组件

const AboutContent = () => {
  return (
    <div className="about-area inner-page">
      <div className="container">
        
        {/* 添加选项卡组件 */}
        <AboutTabs />
      </div>
    </div>
  );
};

const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"About Us"} />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutContent />
      </Suspense>
      

      
    </ThrownLayout>
  );
};
export default page;