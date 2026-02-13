import React from 'react';
import { Col, Card, Image } from 'antd';

import Cluar from '../../../../common/Cluar';

import './index.less';

function Item({ section, type, image, image_title, image_alt, title, content, link }) {
    const imageSrc =
        image?.indexOf("base64") === -1
            ? `/cluar/images/page_${section}/${image}`
            : image;

    return (
        <Col className={`listing__item__${type}`} span={24} style={{ padding: 0, margin: 0 }}>
            <a href={link} alt={title} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <div className="rectangle-container">
                    <div className="image-rectangle">
                        <Image
                            src={imageSrc}
                            alt={image_alt}
                            title={image_title}
                            width="100%"
                            height="100%"
                            style={{ objectFit: 'cover' }}
                            preview={{
                                mask: (
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ color: '#fff', margin: 0 }}>{Cluar.plainHTML(title)}</p>
                                        <small style={{ color: '#ccc' }}>{Cluar.plainHTML(content)}</small>
                                    </div>
                                ),
                            }}
                        />
                    </div>
                </div>


            </a>
        </Col>
    );
}

export default Item;