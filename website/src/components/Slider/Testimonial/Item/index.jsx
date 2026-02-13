import React from "react";
import { Col, Card } from 'antd';

import "./index.less";
import config from "../config.json"
import Actions from "../../../Actions";
import Cluar from "../../../../common/Cluar";

function Item({
  section,
  type,
  image,
  image_title,
  image_alt,
  title,
  content,
  link,
  action_uids
}) {
  const imageSrc =
    image?.indexOf("base64") === -1
      ? `/cluar/images/page_${section}/${image}`
      : image;

  return (
    <Col className={`slider__item__${type}`} xs={24} lg={24}>
      <Card title={Cluar.plainHTML(title)} variant="borderless">
        {Cluar.plainHTML(content)}
      </Card>
    </Col>
  );
}

export default Item;
