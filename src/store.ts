import { create } from "zustand";

export interface ICity {
  name: string;
  state?: string;
  country: string;
  lat: number;
  lon: number;
}

export interface IWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  timezone: number;
  visibility: number;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
}

export interface IairPollution {
  coord: {
    lon: number;
    lat: number;
  };
  list: [
    {
      main: {
        aqi: number;
      };
      components: {
        co: number;
        n: number;
        no2: number;
        o3: number;
        so2: number;
        pm2_5: number;
        pm10: number;
        nh3: number;
      };
      dt: number;
    },
  ];
}

export interface IForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface ICityInfoForecast {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface IWeatherForecast {
  cod: string;
  message: number;
  cnt: number;
  list: IForecastItem[];
  city: ICityInfoForecast;
  weather: IWeather;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
}

interface IWeatherStore {
  city: ICity[];
  weatherData: IWeather | undefined;
  airPollution: IairPollution | undefined;
  foreCastFivedays: IWeatherForecast | undefined;
  setCity: (city: ICity[]) => void;
  setWeatherData: (fetchedWeatherData: IWeather) => void;
  setAirPollution: (fetchedAirPollutionData: IairPollution) => void;
  setForeCastFivedays: (fetchedForeCastData: IWeatherForecast) => void;
}

export const useWeatherStore = create<IWeatherStore>((set) => ({
  city: [],
  weatherData: undefined,
  airPollution: undefined,
  foreCastFivedays: undefined,

  setCity: (fetchedCitiesData) => set({ city: fetchedCitiesData }),
  setWeatherData: (fetchedWeatherData) =>
    set({ weatherData: fetchedWeatherData }),

  setAirPollution: (fetchedAirPollutionData) =>
    set({ airPollution: fetchedAirPollutionData }),

  setForeCastFivedays: (fetchedForeCastData) =>
    set({ foreCastFivedays: fetchedForeCastData }),
}));
