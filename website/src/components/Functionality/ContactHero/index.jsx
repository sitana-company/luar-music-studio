import React, { useState } from 'react';
import { Row, Col, Form, Input, Select, Button, notification } from 'antd';
import _service from '@netuno/service-client';
import Cluar from '../../../common/Cluar';
import config from "./config.json";

import './index.less';

const { TextArea } = Input;

const SUBJECT_OPTIONS = [
    { value: 'test-class', dictionary: 'contact-form-subject-test-class' },
    { value: 'budget', dictionary: 'contact-form-subject-budget' },
    { value: 'other', dictionary: 'contact-form-subject-other' },
];

function ContactHero({ section, type, title, content, html_content, edit_mode }) {
    const [loading, setLoading] = useState(false);

    const resolvedContent = edit_mode === 'html'
        ? (html_content || content)
        : content;

    const address = Cluar.configuration('contact-address');
    const phone = Cluar.configuration('contact-phone');
    const email = Cluar.configuration('contact-email');
    const hours = Cluar.configuration('contact-hours');

    const mapSrc = address
        ? `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
        : null;

    const validateMessages = {
        required: Cluar.plainTranslation('contact-form-validate-message-required'),
        types: {
            email: Cluar.plainTranslation('contact-form-validate-message-email'),
        },
    };

    const handleFinish = (values) => {
        values.contactForm.locale = window.localStorage.getItem('locale');
        setLoading(true);

        const fail = () => {
            setLoading(false);
            notification.error({
                message: title,
                description: Cluar.plainTranslation('contact-form-fail'),
                top: 100,
            });
        };

        _service({
            url: 'contact',
            method: 'POST',
            data: { ...values.contactForm },
            success: (response) => {
                if (response.json && response.json.result === true) {
                    setLoading(false);
                    notification.success({
                        message: title,
                        description: Cluar.plainTranslation('contact-form-success'),
                        top: 100,
                    });
                } else {
                    fail();
                }
            },
            fail: (e) => {
                console.error('ContactHero failed:', e);
                fail();
            },
        });
    };

    return (
        <section className="contact-hero">
            <div className="contact-hero__wrapper">
                <p className="contact-hero__badge">Contacto</p>

                {/* align="top" garante que as colunas não estiquem para igualar a altura */}
                <Row gutter={[64, 40]} align="top" className="contact-hero__grid">
                    {/* ── Coluna esquerda: título, descrição, info, mapa ── */}
                    <Col xs={24} md={12} className="contact-hero__info">
                        <h1 dangerouslySetInnerHTML={{ __html: title }} />
                        <div dangerouslySetInnerHTML={{ __html: resolvedContent }} />

                        <dl className="contact-hero__details">
                            {address && (
                                <div className="contact-hero__details__row">
                                    <dt>{Cluar.plainTranslation('contact-hero-address-label')}</dt>
                                    <dd>{address}</dd>
                                </div>
                            )}
                            {phone && (
                                <div className="contact-hero__details__row">
                                    <dt>{Cluar.plainTranslation('contact-hero-phone-label')}</dt>
                                    <dd><a href={`tel:${phone}`}>{phone}</a></dd>
                                </div>
                            )}
                            {email && (
                                <div className="contact-hero__details__row">
                                    <dt>{Cluar.plainTranslation('contact-hero-email-label')}</dt>
                                    <dd><a href={`mailto:${email}`}>{email}</a></dd>
                                </div>
                            )}
                            {hours && (
                                <div className="contact-hero__details__row">
                                    <dt>{Cluar.plainTranslation('contact-hero-hours-label')}</dt>
                                    <dd>{hours}</dd>
                                </div>
                            )}
                        </dl>

                        {mapSrc && (
                            <div className="contact-hero__map">
                                <iframe
                                    src={mapSrc}
                                    title={Cluar.plainTranslation('contact-hero-map-caption')}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <span className="contact-hero__map__caption">
                                    {Cluar.plainTranslation('contact-hero-map-caption')}
                                </span>
                            </div>
                        )}
                    </Col>

                    {/* ── Coluna direita: formulário ── */}
                    <Col xs={24} md={12} className="contact-hero__form">
                        <Form
                            validateMessages={validateMessages}
                            onFinish={handleFinish}
                            layout="vertical"
                            requiredMark={false}
                            className="contact-hero__form-inner"
                        >
                            <Row gutter={0}>
                                <Col span={24}>
                                    <Form.Item
                                        label={Cluar.plainTranslation('contact-form-name')}
                                        name={['contactForm', 'name']}
                                        rules={[{ required: true }]}
                                    >
                                        <Input variant="borderless" />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label={Cluar.plainTranslation('contact-form-email')}
                                        name={['contactForm', 'email']}
                                        rules={[{ required: true, type: 'email' }]}
                                    >
                                        <Input variant="borderless" />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label={Cluar.plainTranslation('contact-form-subject')}
                                        name={['contactForm', 'subject']}
                                        rules={[{ required: true }]}
                                        initialValue={SUBJECT_OPTIONS[0].value}
                                    >
                                        <Select variant="borderless">
                                            {SUBJECT_OPTIONS.map((option) => (
                                                <Select.Option key={option.value} value={option.value}>
                                                    {Cluar.plainTranslation(option.dictionary)}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={24} className="contact-hero__message">
                                    <Form.Item
                                        label={Cluar.plainTranslation('contact-form-message')}
                                        name={['contactForm', 'message']}
                                        rules={[{ required: true }]}
                                    >
                                        <TextArea variant="borderless" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item className="contact-hero__submit">
                                <Button htmlType="submit" block loading={loading}>
                                    {Cluar.plainTranslation('contact-form-send')}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default ContactHero;