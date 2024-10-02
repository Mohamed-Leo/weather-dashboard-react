import { create } from "zustand";

export interface ICity {
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}

interface IWeatherStore {
  cities: ICity[];
  setCities: (cities: ICity[]) => void;
}

export const useWeatherStore = create<IWeatherStore>((set) => ({
  cities: [],
  setCities: (citiesData) => set({ cities: citiesData }),
}));
