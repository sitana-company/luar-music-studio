import React from 'react';
import { Row, Col } from "antd";

import Item from './Item';
import config from "./config.json"
import Actions from "../../Actions";

const ThreeItems = (
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
            <Col key={item.uid} span={8}>
                <Item {...{ type, ...item }} />
            </Col>
        );
    }

    return (
        <Row className={`listing__${type}`}>
            <Row gutter={[24, 24]} justify="start">
                <Col span={8}>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </Col>
            </Row>

            <Row gutter={[24, 24]} justify="start">
                {children}
            </Row>
        </Row>

    );
}

export default ThreeItems;