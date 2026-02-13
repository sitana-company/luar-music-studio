import React from 'react';

import Cluar from '../../../common/Cluar';
import Actions from '../../Actions';
import config from './config.json';

import './index.less';

const BottomTitle = ({ section, type, title, content, actions }) => {
    return (
        <div className="content-text">
            <div className="text">
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
                {title ? <div className="text__title-border"></div> : null}
            </div>
            {config.action && (
                <div>
                    <Actions {... { section, type, actions }} />
                </div>
            )}
        </div>
    );
};

export default BottomTitle;