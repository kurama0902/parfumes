"use client";

import { Slider } from "~/app/components/slider";
import { TypeOfProducts } from "./components/typeOfProducts";

export default function Home() {
  return (
    <div className="home-page-wrap">
      <Slider />
      <TypeOfProducts/>
    </div>
  );
}
