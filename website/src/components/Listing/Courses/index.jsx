import React from 'react';
import { Row } from 'antd';
import Item from './Item';
import config from "./config.json";
import Action from "../../Action";
import "./index.less";

const Courses = ({ section, type, title, content, items, actions, html_content, edit_mode }) => {
    const children = items.map(item => (
        <Item key={item.uid} {...{ section, type, ...item }} />
    ));

    const resolvedContent = edit_mode === 'html'
        ? (html_content || content)
        : content;

    return (
        <section className="listing__Courses">
            <div className="listing__wrapper">
                {/* texto fixo, não vem do drawer */}
                <p className="listing__badge">Cursos &amp; Serviços</p>

                <h1 dangerouslySetInnerHTML={{ __html: title }} />
                {/* classe própria, evita colidir com o <Row> (também é <div>) */}
                <div className="listing__intro" dangerouslySetInnerHTML={{ __html: resolvedContent }} />

                <Row className="listing__items" gutter={[24, 32]}>
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

export default Courses;