import React from 'react';
import { Row, Col } from 'antd';

import Cluar from '../../../common/Cluar';
import Actions from '../../Actions';
import config from './config.json';

import './index.less';


const ImageAllLeft = ({ section, type, title, content, image_title, image_alt, imageSrc, imageStyle, actions }) => {
  return (
    <div className="content__wrapper content__wrapper__image-left-middle content--full-width">
      <div className="content__image-left-middle">
        <Row>
          <Col span={12}>
            <div className="image">
              <img
                src={imageSrc}
                alt={image_alt}
                title={image_title}
                style={imageStyle}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="text">
              <div className='content-text'>
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ImageAllLeft;