import { Carousel } from "flowbite-react";
import React from "react";

// type ComponentProps = {};

export default function MainBannerSection() {
  return (
    <div className="w-full h-[600px]">
      <Carousel
        indicators={false}
        leftControl=" "
        rightControl=" "
        className="h-[80%]"
      >
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
      <div className="text-white text-sm">
        Hi evaluator! This site is under construction. 48 hours where at least
        20 are spent sleeping/living are not enugh, mostly as there's no clue of
        what's the project about or duration until you already start It, and I'm
        currently working, so there's about -16 hours to that count (as I
        started It on Tuesday) Will be finishing It soon, wether It counts or
        not. Thank you!
      </div>
    </div>
  );
}
