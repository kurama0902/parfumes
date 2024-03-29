"use client";

import { Slider } from "~/app/components/slider";
import { TypeOfProducts } from "./components/typeOfProducts";
import { EmblaOptionsType } from 'embla-carousel'
import { EmblaCarousel } from "./components/categorySlider";
import { Proposal } from "./components/proposal";
import { ProductInfo } from "./components/productInfo";
import { ReviewsInfo } from "./components/reviewsInfo";
import { WhyUs } from "./components/whyUs";
import { Footer } from "./components/Footer";


import './base.css'
import './embla.css'

export default function Home() {

  const OPTIONS: EmblaOptionsType = { loop: false }
  const SLIDE_COUNT = 3
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="home-page-wrap">
      <Slider />
      <TypeOfProducts />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} sectionName="ТОП ПРОДАЖУ">
        <ProductInfo />
      </EmblaCarousel>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} sectionName="НОВИНКИ">
        <ProductInfo />
      </EmblaCarousel>
      <Proposal/>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} sectionName="МИ РЕКОМЕНДУЄМО">
        <ProductInfo />
      </EmblaCarousel>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} sectionName="Скидки">
        <ProductInfo sale={true} />
      </EmblaCarousel>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} sectionName={'ВІДГУКИ'}>
        <ReviewsInfo />
      </EmblaCarousel>
      <WhyUs />
      <Footer />
    </div>
  );
}
