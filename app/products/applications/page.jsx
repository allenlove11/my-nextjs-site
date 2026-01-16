// app/products/applications/page.jsx
"use client";
import ThrownLayout from '../../../layouts/ThrownLayout';
import PageBanner from '../../../components/PageBanner';
import ProductApplicationsTab from '../../../components/tabs/ProductApplicationsTab';
import TabNavigation from '../../../components/products/TabNavigation';

export default function ApplicationsPage() {
  return (
    <div>
      <ThrownLayout header={4}>
        <PageBanner pageName={"Service Page"} />
      <TabNavigation activeTab="applications" />
      <ProductApplicationsTab dark={false} />
      </ThrownLayout>
    </div>
  );
}