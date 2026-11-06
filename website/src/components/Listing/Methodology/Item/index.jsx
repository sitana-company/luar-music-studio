import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

function Item({ title, content }) {
    return (
        <Col xs={24} md={8} className="listing__item">
            <span className="listing__item__bar" />
            <h4 dangerouslySetInnerHTML={{ __html: title }} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Col>
    );
}

export default Item;