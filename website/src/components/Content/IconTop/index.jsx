import React from 'react';

import Cluar from '../../../common/Cluar';
import Actions from '../../Actions';
import config from './config.json';

import './index.less';

const IconTop = ({ section, type, title, content, image_title, image_alt, imageSrc, imageStyle, actions }) => {
    return (
        <div className="icon-content">
            <div className="icon-top">
                <div className="icon">
                    <img
                        src={imageSrc}
                        alt={image_alt}
                        title={image_title}
                        style={imageStyle}
                    />
                </div>
                <div className="text-icon">
                    <h1>{Cluar.plainHTML(title)}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </div>
    );
};

export default IconTop;