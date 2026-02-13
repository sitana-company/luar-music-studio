import React from 'react';
import { Row, Col } from "antd";

import Item from './Item';
import './index.less';
import config from "./config.json"
import Actions from "../../Actions";

const RectangleImage = (
    { section,
        type,
        image,
        image_title,
        image_alt,
        title,
        content,
        items,
        actions }) => {
    const children = [];

    for (const item of items) {
        children.push(
            <Col key={item.uid} span={6} style={{ padding: 0, margin: 0 }} >
                <Item {...{ type, ...item }} />
            </Col>
        );
    }

    return (
        <Row className="rectangle-image">
            <Col span={24}>
                <Row gutter={[24, 24]} justify="start">
                    <Col span={6}>
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </Col>
                </Row>
            </Col>

            <Col span={24}>
                <Row gutter={[24, 24]} justify="start">
                    {children}
                </Row>
            </Col>
        </Row>
    );
}

export default RectangleImage;