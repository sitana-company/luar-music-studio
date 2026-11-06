import React from 'react';
import { Col } from 'antd';
import './index.less';

function Item({ section, image, image_title, image_alt, title, content }) {
    const imageSrc =
        image?.indexOf("base64") === -1
            ? `/cluar/images/page_${section}/${image}`
            : image;

    return (
        <Col xs={24} md={6} className="listing__item">
            <div className="listing__item__photo">
                {image && (
                    <img src={imageSrc} alt={image_alt || ''} title={image_title} />
                )}
                {image_alt && (
                    <span className="listing__item__caption">{image_alt}</span>
                )}
            </div>
            <h4
                className="listing__item__name"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <div
                className="listing__item__role"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </Col>
    );
}

export default Item;