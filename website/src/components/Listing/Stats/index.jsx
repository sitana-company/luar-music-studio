import React from 'react';
import { Row } from 'antd';
import Item from './Item';
import config from "./config.json";
import Action from "../../Action";
import "./index.less";

const Stats = ({ section, type, items, actions }) => {
  const children = items.map(item => (
    <Item key={item.uid} {...{ section, type, ...item }} />
  ));

  return (
    <section className="listing__Stats">
      <div className="listing__wrapper">
        <Row className="listing__items" justify="space-between" wrap gutter={[40, 32]}>
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

export default Stats;