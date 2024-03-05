"use client";

import { Slider } from "~/app/components/slider";
import { TypeOfProducts } from "./components/typeOfProducts";
import { EmblaOptionsType } from 'embla-carousel'
import { EmblaCarousel } from "./components/categorySlider";

import './base.css'
import './embla.css'

export default function Home() {

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 3
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="home-page-wrap">
      <Slider />
      <TypeOfProducts />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
