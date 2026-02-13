import React from 'react';
import Cluar from '../../../../common/Cluar';
import { Col, Card } from 'antd';

import './index.less';

function Item({ section, type, image, image_title, image_alt, title, content, link }) {
    const imageSrc =
        image?.indexOf("base64") === -1
            ? `/cluar/images/page_${section}/${image}`
            : image;

    const { Meta } = Card;

    return (
        <Col className="circle-image" span={24}>
            <a href={link} alt={Cluar.plainHTML(title)} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <h3 style={{ textAlign: 'center', fontSize: '32px', paddingBottom: '10px' }}>{title}</h3>
                <div className='rectangle'></div>
                <p dangerouslySetInnerHTML={{ __html: content }} style={{ textAlign: 'center', color: '#8a8a8a', paddingTop: '10px' }} />

                <div className="circle">
                    <div className="icon">
                        <img
                            src={imageSrc}
                            alt={image_alt}
                            title={image_title}
                        />
                    </div>
                    <div className="text-icon">
                        <h1 dangerouslySetInnerHTML={{ __html: title }} />
                    </div>
                </div>

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