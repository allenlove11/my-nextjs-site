// app/products/panda-1681/page.jsx
"use client";
import ThrownLayout from '../../../layouts/ThrownLayout';
import PageBanner from '../../../components/PageBanner';
import Panda1681Tab from '../../../components/tabs/Panda1681Tab';
import TabNavigation from '../../../components/products/TabNavigation';

export default function Panda1681Page() {
  return (
    <div>
       <ThrownLayout header={4}>
        <PageBanner pageName={"Service Page"} />
      <TabNavigation activeTab="panda-1681" />
      <Panda1681Tab dark={false} />
      </ThrownLayout>
    </div>
  );
}