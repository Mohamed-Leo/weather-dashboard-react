import {
  ClearDay,
  ClearNight,
  Cloudy,
  CloudyDay,
  CloudyNight,
  Drizzle,
  DrizzleHeavy,
  DrizzleRain,
  Dust,
  Fog,
  Mist,
  Rainy,
  RainyHeaviy,
  RainySnowy,
  Smoke,
  Snow,
  ThunderStormLight,
  ThunderStormLigthRain,
  Haze,
  Tornado,
  CloudyOverCast,
} from "@/constants/WeatherIcons";

const weatherDataIconsByCode = [
  // Thunderstorm
  {
    code: 200,
    icon: (width: number, height: number) => (
      <ThunderStormLigthRain width={width} height={height} />
    ),
  },
  {
    code: 201,
    icon: (width: number, height: number) => (
      <ThunderStormLigthRain width={width} height={height} />
    ),
  },
  {
    code: 202,
    icon: (width: number, height: number) => (
      <ThunderStormLigthRain width={width} height={height} />
    ),
  },
  {
    code: 210,
    icon: (width: number, height: number) => (
      <ThunderStormLight width={width} height={height} />
    ),
  },
  {
    code: 211,
    icon: (width: number, height: number) => (
      <ThunderStormLight width={width} height={height} />
    ),
  },
  {
    code: 212,
    icon: (width: number, height: number) => (
      <ThunderStormLigthRain width={width} height={height} />
    ),
  },
  {
    code: 221,
    icon: (width: number, height: number) => (
      <ThunderStormLight width={width} height={height} />
    ),
  },
  {
    code: 230,
    icon: (width: number, height: number) => (
      <ThunderStormLigthRain width={width} height={height} />
    ),
  },
  {
    code: 231,
    icon: (width: number, height: number) => (
      <ThunderStormLigthRain width={width} height={height} />
    ),
  },
  {
    code: 232,
    icon: (width: number, height: number) => (
      <ThunderStormLigthRain width={width} height={height} />
    ),
  },

  // Drizzle
  {
    code: 300,
    icon: (width: number, height: number) => (
      <Drizzle width={width} height={height} />
    ),
  },
  {
    code: 301,
    icon: (width: number, height: number) => (
      <Drizzle width={width} height={height} />
    ),
  },
  {
    code: 302,
    icon: (width: number, height: number) => (
      <DrizzleHeavy width={width} height={height} />
    ),
  },
  {
    code: 310,
    icon: (width: number, height: number) => (
      <DrizzleRain width={width} height={height} />
    ),
  },
  {
    code: 311,
    icon: (width: number, height: number) => (
      <DrizzleRain width={width} height={height} />
    ),
  },
  {
    code: 312,
    icon: (width: number, height: number) => (
      <DrizzleRain width={width} height={height} />
    ),
  },
  {
    code: 313,
    icon: (width: number, height: number) => (
      <DrizzleRain width={width} height={height} />
    ),
  },
  {
    code: 314,
    icon: (width: number, height: number) => (
      <DrizzleRain width={width} height={height} />
    ),
  },
  {
    code: 321,
    icon: (width: number, height: number) => (
      <DrizzleRain width={width} height={height} />
    ),
  },

  // Rain
  {
    code: 500,
    icon: (width: number, height: number) => (
      <Rainy width={width} height={height} />
    ),
  },
  {
    code: 501,
    icon: (width: number, height: number) => (
      <Rainy width={width} height={height} />
    ),
  },
  {
    code: 502,
    icon: (width: number, height: number) => (
      <RainyHeaviy width={width} height={height} />
    ),
  },
  {
    code: 503,
    icon: (width: number, height: number) => (
      <RainyHeaviy width={width} height={height} />
    ),
  },
  {
    code: 504,
    icon: (width: number, height: number) => (
      <RainyHeaviy width={width} height={height} />
    ),
  },
  {
    code: 511,
    icon: (width: number, height: number) => (
      <RainySnowy width={width} height={height} />
    ),
  },
  {
    code: 520,
    icon: (width: number, height: number) => (
      <RainyHeaviy width={width} height={height} />
    ),
  },
  {
    code: 521,
    icon: (width: number, height: number) => (
      <RainyHeaviy width={width} height={height} />
    ),
  },
  {
    code: 522,
    icon: (width: number, height: number) => (
      <RainyHeaviy width={width} height={height} />
    ),
  },
  {
    code: 531,
    icon: (width: number, height: number) => (
      <RainyHeaviy width={width} height={height} />
    ),
  },

  // Snow
  {
    code: 600,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },
  {
    code: 601,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },
  {
    code: 602,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },
  {
    code: 611,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },
  {
    code: 612,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },
  {
    code: 613,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },
  {
    code: 615,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },
  {
    code: 616,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },
  {
    code: 620,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },
  {
    code: 621,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },
  {
    code: 622,
    icon: (width: number, height: number) => (
      <Snow width={width} height={height} />
    ),
  },

  // Atmosphere
  {
    code: 701,
    icon: (width: number, height: number) => (
      <Mist width={width} height={height} />
    ),
  },
  {
    code: 711,
    icon: (width: number, height: number) => (
      <Smoke width={width} height={height} />
    ),
  },
  {
    code: 721,
    icon: (width: number, height: number) => (
      <Haze width={width} height={height} />
    ),
  },
  {
    code: 731,
    icon: (width: number, height: number) => (
      <Dust width={width} height={height} />
    ),
  },
  {
    code: 741,
    icon: (width: number, height: number) => (
      <Fog width={width} height={height} />
    ),
  },
  {
    code: 751,
    icon: (width: number, height: number) => (
      <Dust width={width} height={height} />
    ),
  },
  {
    code: 761,
    icon: (width: number, height: number) => (
      <Dust width={width} height={height} />
    ),
  },
  {
    code: 762,
    icon: (width: number, height: number) => (
      <Dust width={width} height={height} />
    ),
  },
  {
    code: 771,
    icon: (width: number, height: number) => (
      <Dust width={width} height={height} />
    ),
  },
  {
    code: 781,
    icon: (width: number, height: number) => (
      <Tornado width={width} height={height} />
    ),
  },

  // Clear
  {
    code: 800,
    icon: (width: number, height: number, dayOrNight?: string) =>
      dayOrNight?.includes("d") ? (
        <ClearDay width={width} height={height} />
      ) : (
        <ClearNight width={width} height={height} />
      ),
  },

  // Clouds
  {
    code: 801,
    icon: (width: number, height: number, dayOrNight?: string) =>
      dayOrNight?.includes("d") ? (
        <CloudyDay width={width} height={height} />
      ) : (
        <CloudyNight width={width} height={height} />
      ),
  },
  {
    code: 802,
    icon: (width: number, height: number) => (
      <Cloudy width={width} height={height} />
    ),
  },
  {
    code: 803,
    icon: (width: number, height: number) => (
      <CloudyOverCast width={width} height={height} />
    ),
  },
  {
    code: 804,
    icon: (width: number, height: number) => (
      <CloudyOverCast width={width} height={height} />
    ),
  },
];

export default weatherDataIconsByCode;
