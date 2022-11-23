import React from 'react';
import { Row, Col } from 'antd';
import style from './stats.module.less';

const Stats = () => {
    return(
    <>
        <h4>Languages Used</h4>
        <figure className={style.wakastats}>
            <embed src="https://wakatime.com/share/@ddmasterdon/12e96a39-8bff-4e9e-be7b-c9552e744c18.svg" />
        </figure>
    </>
    );
}

export default Stats;
