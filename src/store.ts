import { create } from "zustand";

export interface ICity {
  name: string;
  state?: string;
  country: string;
  lat: number;
  lon: number;
}

export interface IWeather {
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

interface IWeatherStore {
  city: ICity[];
  weatherData: IWeather | undefined;
  setCity: (city: ICity[]) => void;
  setWeatherData: (fetchedWeatherData: IWeather) => void;
}

export const useWeatherStore = create<IWeatherStore>((set) => ({
  city: [],
  weatherData: undefined,
  setCity: (fetchedCitiesData) => set({ city: fetchedCitiesData }),
  setWeatherData: (fetchedWeatherData) =>
    set({ weatherData: fetchedWeatherData }),
}));
