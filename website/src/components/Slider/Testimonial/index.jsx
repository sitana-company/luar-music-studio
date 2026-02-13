import React from "react";
import { Col } from "antd";

import Item from "./Item";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"

import "./index.less";

function Testimonial({
  section,
  type,
  image,
  image_title,
  image_alt,
  title,
  content,
  items,
  uid,
  actions
}) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 4,
    },
  });

  const children = [];

  for (const item of items) {
    children.push(
      <Col key={item.uid} span={6} className="keen-slider__slide">
        <Item {...{ type, ...item }} />
      </Col>
    );
  }

  return (
    <div
      ref={sliderRef}
      className={`Testimonial keen-slider`}
    >
      {children}
    </div>
  );
}

export default Testimonial;
