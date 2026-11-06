import React from 'react';
import { Row, Col } from 'antd';

import Cluar from '../../../common/Cluar';
import Action from '../../Action';
import config from './config.json';

import './index.less';


const ImageLeft = ({ section, type, title, content, image_title, image_alt, imageSrc, imageStyle, actions, html_content, edit_mode }) => {

  const resolvedContent = edit_mode === 'html'
    ? (html_content || content)
    : content;

  return (
    <div className="content-image-left">
      <Row gutter={[64, 32]} align="middle">
        <Col md={12} xs={24}>
          <div className="content-image-left__frame">
            <img
              src={imageSrc}
              alt={image_alt}
              title={image_title}
              style={imageStyle}
            />
            {image_alt && (
              <span className="content-image-left__caption">{image_alt}</span>
            )}
          </div>
        </Col>
        <Col md={12} xs={24}>
          <div className="text">
            <p className="content-image-left__badge">Sobre Nós</p>

            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <div dangerouslySetInnerHTML={{ __html: resolvedContent }} />

            {config.action && (
              <div className="content-image-left__actions">
                <Action {...{ section, type, actions }} />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ImageLeft;