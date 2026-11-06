import React from 'react';
import { Row } from 'antd';
import Item from './Item';
import config from "./config.json";
import Action from "../../Action";
import "./index.less";

const Methodology = ({ section, type, title, content, items, actions, html_content, edit_mode }) => {
    const children = items.map(item => (
        <Item key={item.uid} {...{ section, type, ...item }} />
    ));

    const resolvedContent = edit_mode === 'html' ? (html_content || content) : content;

    return (
        <section className="listing__Methodology">
            <div className="listing__wrapper">
                <p className="listing__badge">Metodologia</p>
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
                <div dangerouslySetInnerHTML={{ __html: resolvedContent }} className="listing__intro" />

                <Row className="listing__items" gutter={[40, 32]}>
                    {children}
                </Row>

                {config.action && (
                    <div className="listing__actions">
                        <Action {...{ section, type, actions }} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Methodology;