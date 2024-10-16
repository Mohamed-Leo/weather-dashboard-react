import { useContext, useEffect, useState } from "react";
import { ThemeContext, ThemeContextType } from "@/App";
import { useWeatherStore } from "@/store";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	ChartOptions,
} from "chart.js";
import Loading from "@/layouts/Loading";
import { IWeather } from "@/interfaces";
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
);

interface ChartData {
	labels: string[]; // Array of label strings for the chart
	datasets: {
		label: string;
		data: (number | null)[]; // Array of data points (numbers or nulls)
		borderColor: string; // Color for the line or border
		backgroundColor: string; // Color for the background fill
		borderWidth: number; // Width of the line border
		fill: boolean; // Whether to fill the area under the line
	}[];
}

const WeatherChart = () => {
	// get the weather data form the store----
	const weatherData = useWeatherStore((state) => state.weatherData as IWeather);

	const [chartData, setChartData] = useState<ChartData | null>(null);

	// get the theme mode to change the style-----
	const { theme }: ThemeContextType = useContext(ThemeContext);

	useEffect(() => {
		// check on data before update---
		if (!weatherData) return;

		// Convert temperatures from Kelvin to Celsius
		const convertKelvinToCelsius = (kelvin: number) =>
			Math.round(kelvin - 273.15);

		// Extract key weather data points---
		const labels = [
			"Current Temp",
			"Min Temp",
			"Max Temp",
			"Humidity",
			"Wind Speed",
		];

		// get the weather data----
		const temperatureData = [
			convertKelvinToCelsius(weatherData.main.temp),
			convertKelvinToCelsius(weatherData.main.temp_min),
			convertKelvinToCelsius(weatherData.main.temp_max),
		];
		const humidityData = [weatherData.main.humidity];
		const windSpeedData = [weatherData.wind.speed];

		// update the state data---
		setChartData({
			labels,
			datasets: [
				{
					label: "Temperature (°C)",
					data: [...temperatureData],
					borderColor:
						theme === "dark"
							? "rgba(54, 162, 235, 1)"
							: "rgba(54, 162, 235, 1)",
					backgroundColor:
						theme === "dark"
							? "rgba(54, 162, 235, 0.2)"
							: "rgba(54, 162, 235, 0.2)",
					borderWidth: 2,
					fill: true,
				},
				{
					label: "Humidity (%)",
					data: [null, null, null, ...humidityData],
					borderColor:
						theme === "dark"
							? "rgba(255, 99, 132, 1)"
							: "rgba(255, 99, 132, 1)",
					backgroundColor:
						theme === "dark"
							? "rgba(255, 99, 132, 0.2)"
							: "rgba(255, 99, 132, 0.2)",
					borderWidth: 2,
					fill: true,
				},
				{
					label: "Wind Speed (m/s)",
					data: [null, null, null, null, ...windSpeedData],
					borderColor:
						theme === "dark"
							? "rgba(75, 192, 192, 1)"
							: "rgba(75, 192, 192, 1)",
					backgroundColor:
						theme === "dark"
							? "rgba(75, 192, 192, 0.2)"
							: "rgba(75, 192, 192, 0.2)",
					borderWidth: 2,
					fill: true,
				},
			],
		});
	}, [weatherData, theme]);

	const options: ChartOptions<"line"> = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				position: "top",
				labels: {
					color: theme === "dark" ? "#ffffff" : "#000000",
				},
			},
			title: {
				display: true,
				text: `Weather Data for ${weatherData?.name}, ${weatherData?.sys?.country}`,
				color: theme === "dark" ? "#ffffff" : "#000000",
			},
		},
		scales: {
			x: {
				grid: {
					color:
						theme === "dark"
							? "rgba(255, 255, 255, 0.2)"
							: "rgba(0, 0, 0, 0.1)", // Grid line color for x-axis
				},
				ticks: {
					color: theme === "dark" ? "#ffffff" : "#000000", // X-axis tick color
				},
			},
			y: {
				grid: {
					color:
						theme === "dark"
							? "rgba(255, 255, 255, 0.2)"
							: "rgba(0, 0, 0, 0.1)", // Grid line color for y-axis
				},
				ticks: {
					color: theme === "dark" ? "#ffffff" : "#000000", // Y-axis tick color
				},
			},
		},
	};

	// check before loading----
	if (!chartData) return <Loading />;

	return (
		<Line className="w-full min-h-80" data={chartData} options={options} />
	);
};

export default WeatherChart;
