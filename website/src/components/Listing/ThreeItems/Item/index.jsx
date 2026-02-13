import React from 'react';
import { Col } from 'antd';

import './index.less';

function Item({ section, type, image, image_title, image_alt, title, content, link }) {
    const imageSrc =
        image?.indexOf("base64") === -1
            ? `/cluar/images/page_${section}/${image}`
            : image;

    return (
        <div className={`listing__item__${type}`} xs={24} lg={24}>
            <a href={link} alt={title} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <div className="circle-three">
                    <div className="icon-three">
                        <img
                            src={imageSrc}
                            alt={image_alt}
                            title={image_title}
                            style={{ width: '90px' }}
                        />
                    </div>
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: title }} style={{ textAlign: 'center', color: '#8a8a8a' }} />
                <p dangerouslySetInnerHTML={{ __html: content }} style={{ textAlign: 'center', color: '#8a8a8a' }} />
                <div
                    className="listing__item__bgimage"
                    style={{
                        backgroundImage: `url('/cluar/images/${section}/${image}')`,
                    }}
                ></div>
            </a>
        </div >
    );
}

export default Item;