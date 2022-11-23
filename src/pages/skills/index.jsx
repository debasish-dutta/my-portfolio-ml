import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import TopSkill from '../../components/PageFragments/Skills/TopSkills';
import Skill from '../../components/PageFragments/Skills/SkillProgress';
import Skill2 from '../../components/PageFragments/Skills/SkillProgress-2';

const Skills = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Skills"
        description="This page defines my skills set."
        path="/skills"
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Skills</h1>
        </div>
        <TopSkill />
        <br />
        <Skill />
        <br />
        <Skill2 />
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Skills;
