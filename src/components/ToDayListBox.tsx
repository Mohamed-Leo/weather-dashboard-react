import ToDayBox from "./ToDayBox";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IWeatherForecast } from "@/store";
import useGetToDayForeCast from "@/hooks/useGetToDayForeCast";

interface IToDayBoxProps {
  backGround: string;
  foreCastFivedays: IWeatherForecast;
}

function ToDayListBox({ foreCastFivedays, backGround = "" }: IToDayBoxProps) {
  // get today forecast by using the useGetToDayForeCast custom hook---
  const toDayForeCast = useGetToDayForeCast(foreCastFivedays);

  // plugin for Carousel----
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <div
      className={`today-list-boxes w-full flex gap-3 lg:gap-1 flex-wrap justify-center ${backGround} p-5 rounded-3xl`}
    >
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-56 sm:max-w-sm md:max-w-60 lg:max-w-sm xl:max-w-md"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {toDayForeCast.map((todayCast) => (
            <CarouselItem
              key={todayCast.dt_txt}
              className="basis-1/3 lg:basis-1/3"
            >
              <ToDayBox key={todayCast.dt_txt} todayForeCastData={todayCast} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default ToDayListBox;
