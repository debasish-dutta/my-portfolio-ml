import React from 'react';

import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
    paraOne: `Ohaiyoo !! This is Debasish Dutta. I'm a Data Scientist and Machine Learning Enthusiast, 
    well versed in programming and love to experiment with different languages and ML libaries. I have been working with <b>Machine learning</b> and <b>Deep learning</b> since 2019. I have built many different <b> ML, DL & TL</b> models and have a well-to-do experience in data analytics and visualization too.`,
    paraTwo: `Along with <b>Python</b> as my choice of programming language, I also have the working knowledge of <b>C</b> & <b>C++</b> as well as <b>Javascript</b> and database languages like <b>SQL</b> and <b>NoSQL</b>. 
    With some hands-on experience working with web technologies like <b>Flask & React-Gatsby</b> and cloud technologies like <b>AWS/Azure</b> , furthermore I have deployed applications in Heroku and AWS. On going my passion, I have been occasionally contributing my experiences and skills to the open-source community and writting blogs. I'm a keen learner and a self-taught programmer with a tremendous love for tech.`,
  };

const AboutMe = () => {
  const description = `${stripTags(pageText.paraOne)} ${stripTags(pageText.paraTwo)}`;
  return (  
    <>
    <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Debasish', 'Dutta', 'Data Scientist', 'Machine Learning', 'Software Developer', 'Computer Science Research', 'Computer Scientist', 'CS R&D']}
        />
        {/* <h1 className="titleSeparate">Home</h1> */}
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
    </>
  );
}
 
export default AboutMe;