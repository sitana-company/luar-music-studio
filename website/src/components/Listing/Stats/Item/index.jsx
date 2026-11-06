import React from 'react';
import { Col } from 'antd';
import './index.less';

function Item({ title, content }) {
    return (
        <Col
            xs={{ flex: '0 0 100%' }}
            sm={{ flex: '0 0 auto' }}
            className="listing__item"
        >
            <h3 className="listing__item__number" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="listing__item__label" dangerouslySetInnerHTML={{ __html: content }} />
        </Col>
    );
}
export default Item;