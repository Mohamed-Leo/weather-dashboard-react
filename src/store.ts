import { create } from "zustand";
import { IWeatherStore } from "./interfaces";

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
