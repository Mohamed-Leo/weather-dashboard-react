// store interfaces----------------------------------
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

export interface ICityInfoForecast {
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

export interface IWeatherStore {
	city: ICity[];
	weatherData: IWeather | undefined;
	airPollution: IairPollution | undefined;
	foreCastFivedays: IWeatherForecast | undefined;
	setCity: (city: ICity[]) => void;
	setWeatherData: (fetchedWeatherData: IWeather) => void;
	setAirPollution: (fetchedAirPollutionData: IairPollution) => void;
	setForeCastFivedays: (fetchedForeCastData: IWeatherForecast) => void;
}

// components interfaces-------------------------

export interface IOtherCityBoxProps {
	backGround?: string;
	cityName: string;
	style: string;
}

export interface ICityItem {
	handleItemSelect: (city: ICity) => void;
	city: ICity;
}

export interface ICommandSearchBoxProps {
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleItemSelect: (city: ICity) => void;
	searchValue: string;
}

export interface ICompassProps {
	width?: number;
	height?: number;
	direction?: number;
}

export interface FlyToCityMapProps {
	locationCoords: [number, number];
}

export interface IHighlightBoxProps {
	element: JSX.Element;
	title?: string;
	backGround?: string;
	style?: string;
}

export interface ICities {
	name: string;
	style: string;
}

export interface ITemperatureProps {
	temps: number[];
	tempIcon: JSX.Element;
}

export interface IToDatSunRiseAndSetProps {
	backGround?: string;
	weatherData: IWeather;
}

export interface ITomorrowBoxProps {
	backGround: string;
	foreCastFivedays: IWeatherForecast;
}

export interface IWeatherIconProps {
	id: number;
	iconName: string;
	width?: number;
	height?: number;
}

export interface IWeatherIconByCode {
	code: number;
	icon: (width: number, height: number, iconName?: string) => JSX.Element;
}

export interface IWeatherStatusProps {
	weatherDescription: string;
	feelsLikeTemp: number;
	tempIcon: JSX.Element;
}

export interface IWeeklyData {
	date: string;
	temp: number;
	description: string;
	icon: string;
	weatherId: number;
}

// custom hooks------------------------
export interface IuseFetchAirPollutionDataProps {
	lat: number | undefined;
	lon: number | undefined;
}

export interface IUseFetchForecastByGeoLocationProps {
	lat: number | undefined;
	lon: number | undefined;
}

export interface TemperatureData {
	temp: number;
	feels_like?: number;
	temp_min?: number;
	temp_max?: number;
}

export interface ConvertedTemperatures {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
}

// utlies------------------------
export interface IErrorAlertProps {
	icon: "success" | "error" | "warning" | "info" | "question";
	title: string;
	text?: string;
	footer?: string;
}

export interface IHighlightListBoxes {
	title: string;
	icon: JSX.Element;
	style: string;
}
