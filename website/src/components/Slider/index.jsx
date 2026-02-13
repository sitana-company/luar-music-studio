import React from 'react';

import Default from './Default';
import Testimonial from './Testimonial';

const Slider = (props) => {
  let layout = null;

  if (props.type == 'Default') {
    layout = (
      <Default
        {...props}
      />
    );
  } else if (props.type === "Testimonial") {
    layout = (
      <Testimonial
        {...props}
      />
    );
  } else {
    layout = (
      <Default
        {...props}
      />
    );
  }

  return <section className="slider">{layout}</section>;
}

export default Slider;