// Fetch current weather by coordinates
export async function fetchWeather(lat: number, lon: number) {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      if (!res.ok) throw new Error("Failed to fetch weather");
      const data = await res.json();
      return data.current_weather;
    } catch (error) {
      throw error;
    }
}

// Fetch coordinates for a city using Open-Meteo Geocoding API
export async function fetchCoordinates(city: string) {
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1`
      );
      if (!res.ok) throw new Error("Failed to fetch coordinates");

      const data = await res.json();
      if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = data.results[0];
      return { lat: latitude, lon: longitude, name, country };
    } catch (error) {
      throw error;
    }
}
