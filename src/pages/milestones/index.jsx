import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import Timeline from '../../components/PageFragments/Timeline/index';

const Milestones = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Milestones"
        description="This page is for my milestones."
        path="/milestones"
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Milestones</h1>
        </div>
        
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Milestones;
