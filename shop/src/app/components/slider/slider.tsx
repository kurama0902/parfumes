import React, { ReactNode, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import "./style.css";

export function Slider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <div className="hit-sales-wrap">
            <div className="hit-sales">
              <h1 className="hit-sales-label">ХІТ ПРОДАЖУ</h1>
              <h1 className="hit-sales-product">Дистилятор для ефірних масел</h1>
              <div className="hit-sale-price-wrap">
                <p className="hit-sales-price-label">Ціна</p>
                <p className="hit-sales-price">1987 грн</p>
              </div>
              <button className="hit-buy-btn">Замовити</button>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <div
      onClick={props.onClick}
      className={`arrow-wrap ${props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
    >
      <svg
        width="17.846283"
        height="28.000000"
        viewBox="0 0 17.8463 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.left && (
          <path
            id="Vector"
            d="M17.8463 24.1537L7.69257 14L17.8463 3.84631L14 0L0 14L14 28L17.8463 24.1537Z"
            fill="#FFFFFF"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        )}
        {!props.left && (
          <path
            id="Vector"
            d="M0 3.84631L10.1537 14L0 24.1537L3.84631 28L17.8463 14L3.84631 0L0 3.84631Z"
            fill="#FFFFFF"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        )}
      </svg>
    </div>
  );
}
