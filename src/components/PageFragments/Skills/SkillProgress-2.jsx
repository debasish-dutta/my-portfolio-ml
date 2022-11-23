import React from 'react';
import { Row, Col } from 'antd';

import ProgressBarB from '../../Progress/Progress';
import ProgressBarY from '../../Progress/ProgressY';

const SkillsProgress = () => (
  <div>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <h3>Technologies</h3>
        <ProgressBarY
          percent={80}
          text="Anaconda & Jupyter"
        />
        <ProgressBarY
          percent={80}
          text="MS Excel"
        />
        <ProgressBarY
          percent={80}
          text="NLP"
        />
        <ProgressBarY
          percent={80}
          text="Data Structures & Algorithims"
        />
        <ProgressBarY
          percent={68}
          text="Apache Spark"
        />
        <ProgressBarY
          percent={50}
          text="Azure"
        />
        <ProgressBarY
          percent={70}
          text="SQL and NoSQL"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <h3>Frameworks</h3>
        <ProgressBarB
          percent={85}
          text="Pandas & Numpy"
        />
        <ProgressBarB
          percent={80}
          text="Tensorflow"
        />
        <ProgressBarB
          percent={80}
          text="Keras"
        />
        <ProgressBarB
          percent={90}
          text="Pytorch"
        />
        <ProgressBarB
          percent={90}
          text="Sckit-learn"
        />
        <ProgressBarB
          percent={80}
          text="Matplotlib & Seaborn"
        />
        <ProgressBarB
          percent={80}
          text="Gatsby"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
