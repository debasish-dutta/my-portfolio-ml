import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

import AboutMe from '../../components/PageFragments/About/index';
import Stats from '../../components/PageFragments/About/stats';

const About = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="About Me"
        description="This page contains fun little facts about me."
        path="/about"
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Who am I?</h1>
        </div>
        <AboutMe />
        <Stats />
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default About;
