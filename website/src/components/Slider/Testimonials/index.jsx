import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import Item from "./Item";

import "./index.less";

function Testimonials({ section, type, items }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    const total = items.length;

    return (
        <div className={`slider__${type}`}>
            <div className="slider__wrapper">
                {/* texto fixo, não vem do drawer */}
                <p className="slider__badge">Depoimentos</p>

                <div ref={sliderRef} className="keen-slider">
                    {items.map((item) => (
                        <Item key={item.uid} {...{ section, type, ...item }} />
                    ))}
                </div>

                {loaded && instanceRef.current && total > 1 && (
                    <div className="slider__nav">
                        <button
                            type="button"
                            className="slider__nav__arrow"
                            onClick={() => instanceRef.current?.prev()}
                            aria-label="Depoimento anterior"
                        >
                            ←
                        </button>
                        <span className="slider__nav__counter">
                            {currentSlide + 1} / {total}
                        </span>
                        <button
                            type="button"
                            className="slider__nav__arrow"
                            onClick={() => instanceRef.current?.next()}
                            aria-label="Próximo depoimento"
                        >
                            →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Testimonials;