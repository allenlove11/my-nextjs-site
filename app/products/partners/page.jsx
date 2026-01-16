// app/products/partners/page.jsx
"use client";
import ThrownLayout from '../../../layouts/ThrownLayout';
import PageBanner from '../../../components/PageBanner';
import PartnersTab from '../../../components/tabs/PartnersTab';
import TabNavigation from '../../../components/products/TabNavigation';

export default function PartnersPage() {
  return (
    <div>
       <ThrownLayout header={4}>
        <PageBanner pageName={"Service Page"} />
      <TabNavigation activeTab="partners" />
      <PartnersTab dark={false} />
      </ThrownLayout>
    </div>
  );
}