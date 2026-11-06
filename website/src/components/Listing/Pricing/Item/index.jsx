import React from 'react';
import './index.less';

function Item({ title, content }) {
    return (
        <li className="listing__item">
            <h4 dangerouslySetInnerHTML={{ __html: title }} />
            <div
                className="listing__item__content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </li>
    );
}

export default Item;