// app/products/panda-floong/page.jsx
"use client";
import ThrownLayout from '../../../layouts/ThrownLayout';
import PageBanner from '../../../components/PageBanner';
import PandaFLoongTab from '../../../components/tabs/PandaFLoongTab';
import TabNavigation from '../../../components/products/TabNavigation';

export default function PandaFLoongPage() {
  return (
    <div>
      <ThrownLayout header={4}>
        <PageBanner pageName={"Service Page"} />
      <TabNavigation activeTab="panda-floong" />
      <PandaFLoongTab dark={false} />
      </ThrownLayout>
    </div>
  );
}