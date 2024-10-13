// this file for extend the ImportMeta interface to include the env property for using .env in config file--
interface ImportMetaEnv {
	readonly VITE_OPENWEATHER_API_KEY: string;
	// Add other environment variables here
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
