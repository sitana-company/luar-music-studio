import React from "react";
import "./index.less";

function Item({ title, content }) {
    return (
        <div className="slider__item__Testimonials keen-slider__slide">
            <blockquote
                className="slider__item__quote"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <div
                className="slider__item__author"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}

export default Item;