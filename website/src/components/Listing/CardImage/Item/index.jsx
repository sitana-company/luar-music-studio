import React from 'react';
import { Col, Card } from 'antd';
import Cluar from '../../../../common/Cluar';

import './index.less';

function Item({ section, type, image, image_title, image_alt, title, content, link }) {
    const imageSrc =
        image?.indexOf("base64") === -1
            ? `/cluar/images/page_${section}/${image}`
            : image;

    const { Meta } = Card;

    return (
        <Col className={`listing__item__${type}`} xs={24} lg={24}>
            <a href={link} alt={Cluar.plainHTML(title)} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Card
                    hoverable
                    cover={<img alt="image_alt" src={imageSrc} style={{ height: '190px', width: "100%", objectFit: "cover" }} />}
                >
                    <Meta title={Cluar.plainHTML(title)} description={Cluar.plainHTML(content)} />
                </Card>

                <div
                    className="listing__item__bgimage"
                    style={{
                        backgroundImage: `url('/cluar/images/${section}/${image}')`,
                    }}
                ></div>
            </a>
        </Col>
    );
}

export default Item;