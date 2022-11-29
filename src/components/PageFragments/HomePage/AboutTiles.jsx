import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `Ohaiyoo !! This is Debasish Dutta. I'm a Data Scientist and Machine Learning Enthusiast, 
  well versed in programming and love to experiment with different languages and ML libaries. I have been working with <b>Machine learning</b> and <b>Deep learning</b> since 2019. I have built many different <b> ML, DL & TL</b> models and have a well-to-do experience in data analytics and visualization too.`,
  // paraTwo: `Along with <b>Python</b> as my choice of programming language, I also have the working knowledge of <b>C</b> & <b>C++</b> as well as <b>Javascript</b> and database languages like <b>SQL</b> and <b>NoSQL</b>. 
  // With some hands-on experience working with web technologies like <b>Flask & React-Gatsby</b> and cloud technologies like <b>AWS/Azure</b> , furthermore I have deployed applications in Heroku and AWS. On going my passion, I have been occasionally contributing my experiences and skills to the open-source community and writting blogs. I'm a keen learner and a self-taught programmer with a tremendous love for tech.`,
};
const AboutTiles = () => {
  const description = `${stripTags(pageText.paraOne)}`;
  return (
    <>
      <div>
        <SEO
          title="Debasish Dutta"
          description={description}
          path=""
          keywords={['Debasish', 'Dutta', 'Data Scientist', 'Machine Learning', 'Software Developer', 'Computer Science Research', 'Computer Scientist', 'CS R&D']}
        />
        <h1 className="titleSeparate">Home</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        {/* <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} /> */}
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Assam, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="processor.png"
            alt="graduation image"
            textH4="Focused On"
            textH3="Computer Science Research"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="noodles.png"
            alt="food image"
            textH4="Love Food"
            textH3="Foodie for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutTiles;
