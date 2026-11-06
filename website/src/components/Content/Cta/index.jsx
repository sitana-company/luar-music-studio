import React from 'react';
import Action from '../../Action';
import config from './config.json';

import './index.less';

const Cta = ({ section, type, title, content, actions, html_content, edit_mode }) => {
    const resolvedContent = edit_mode === 'html'
        ? (html_content || content)
        : content;

    return (
        <section className="content-cta">
            <div className="content-cta__wrapper">
                <div className="content-cta__text">
                    {/* legenda pequena, vem do campo "content" (não hardcoded) */}
                    <div
                        className="content-cta__label"
                        dangerouslySetInnerHTML={{ __html: resolvedContent }}
                    />
                    {/* número/telefone em destaque, vem do campo "title" */}
                    <h1 dangerouslySetInnerHTML={{ __html: title }} />
                </div>

                {config.action && (
                    <div className="content-cta__actions">
                        <Action {...{ section, type, actions }} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cta;