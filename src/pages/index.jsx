import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutTiles from '../components/PageFragments/HomePage/AboutTiles';
// import Skills from '../components/PageFragments/HomePage/SkillProgress';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutTiles />
          {/* <Skills /> */}
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
