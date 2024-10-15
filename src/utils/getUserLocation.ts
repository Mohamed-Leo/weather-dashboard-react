async function getUserLocation() {
	// check if the geolocation is supported------
	if ("geolocation" in navigator) {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const lat = position.coords.latitude;
					const lon = position.coords.longitude;
					resolve({ lat, lon }); // Resolve the Promise with the coordinates
				},
				(error) => {
					reject("Error getting location: " + error.message); // Reject the Promise with an error message
				},
				{ timeout: 10000 }, // 10 seconds timeout
			);
		});
	} else {
		throw new Error("Geolocation is not supported by this browser."); // Throw an error if geolocation is not supported
	}
}

export default getUserLocation;
