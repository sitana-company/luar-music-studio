import React from 'react';
import Item from './Item';
import config from "./config.json";
import Action from "../../Action";
import "./index.less";

const Pricing = ({ section, type, title, content, items, actions, html_content, edit_mode }) => {
    const children = items.map(item => (
        <Item key={item.uid} {...{ section, type, ...item }} />
    ));

    const resolvedContent = edit_mode === 'html'
        ? (html_content || content)
        : content;

    return (
        <section className="listing__Pricing">
            <div className="listing__wrapper">
                <p className="listing__badge">Planos</p>

                <h1 dangerouslySetInnerHTML={{ __html: title }} />
                <div className="listing__intro" dangerouslySetInnerHTML={{ __html: resolvedContent }} />

                <ul className="listing__items">{children}</ul>

                {config.action && (
                    <div className="listing__actions">
                        <Action {...{ section, type, actions }} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Pricing;