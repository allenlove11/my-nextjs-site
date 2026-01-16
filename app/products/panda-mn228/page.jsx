// app/products/panda-mn228/page.jsx
"use client";
import ThrownLayout from '../../../layouts/ThrownLayout';
import PageBanner from '../../../components/PageBanner';
import PandaMN228Tab from '../../../components/tabs/PandaMN228Tab';
import TabNavigation from '../../../components/products/TabNavigation';


export default function PandaMN228Page() {
  return (
    <div>
        <ThrownLayout >
        <PageBanner pageName={"Service Page"} />
      <TabNavigation activeTab="panda-mn228" />
      <PandaMN228Tab dark={false} />
      </ThrownLayout>
    </div>
  );
}