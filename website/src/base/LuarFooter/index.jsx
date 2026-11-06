import React from "react";
import { Layout, Row, Col } from "antd";
import Configuration from "../../components/Configuration";
import Cluar from "../../common/Cluar";

import "./index.less";

const { Footer } = Layout;

function LuarFooter() {
    return (
        <Footer className="luar-footer">
            {/* ── Footer Principal ── */}
            <div className="luar-footer__main">
                <div className="luar-footer__wrapper">
                    <Row gutter={[32, 32]} align="stretch">
                        {/* Coluna logo + descrição */}
                        <Col xs={24} lg={8}>
                            <div className="luar-footer__brand">
                                <img
                                    alt="logo"
                                    src={
                                        Cluar.configuration("logo-footer") !== "logo-footer"
                                            ? `${Cluar.configuration("logo-footer")}`
                                            : "/images/logo.png"
                                    }
                                />

                                <p>
                                    <Configuration parameter="footer-description" />
                                </p>
                            </div>
                        </Col>

                        {/* Coluna Páginas */}
                        <Col xs={24} lg={8}>
                            <div className="luar-footer__col">
                                <h4>
                                    <Configuration parameter="footer-col1-title" />
                                </h4>
                                <ul>
                                    <li>
                                        <a href={`/${Cluar.currentLanguage().locale}/`}>
                                            <Configuration parameter="footer-col1-link1" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`/${Cluar.currentLanguage().locale}/sobre`}>
                                            <Configuration parameter="footer-col1-link2" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`/${Cluar.currentLanguage().locale}/cursos`}>
                                            <Configuration parameter="footer-col1-link3" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`/${Cluar.currentLanguage().locale}/contacto`}>
                                            <Configuration parameter="footer-col1-link4" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        {/* Coluna Contacto */}
                        <Col xs={24} lg={8}>
                            <div className="luar-footer__col">
                                <h4>
                                    <Configuration parameter="footer-col2-title" />
                                </h4>
                                <ul className="luar-footer__contact-list">
                                    <li>
                                        <Configuration parameter="footer-address" multilines />
                                    </li>
                                    <li>
                                        <a href={`tel:${Cluar.configuration("footer-phone")}`}>
                                            <Configuration parameter="footer-phone" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`mailto:${Cluar.configuration("footer-email")}`}>
                                            <Configuration parameter="footer-email" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="luar-footer__bottom">
                <span>
                    <Configuration parameter="footer-copyright" />
                </span>
            </div>
        </Footer>
    );
}

export default LuarFooter;