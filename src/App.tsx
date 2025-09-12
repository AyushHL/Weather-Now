import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather, fetchCoordinates } from "./api/weather";

export default function App() {
    const [weather, setWeather] = useState<any>(null);
    const [location, setLocation] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearch = async (city: string) => {
      setLoading(true);
      setError(null);
      setWeather(null);

      try {
        // Step 1: Get coordinates
        const coords = await fetchCoordinates(city);

        // Step 2: Get weather
        const data = await fetchWeather(coords.lat, coords.lon);

        setWeather(data);
        setLocation(`${coords.name}, ${coords.country}`);
      } catch (err: any) {
        setError(err.message || "Failed to load weather");
      } finally {
        setLoading(false);
      }
    };

    return (
      <main>
        <h1>Weather Now</h1>
        <div className="search-bar">
          <SearchBar onSearch={handleSearch} />
        </div>
        {loading && <p style={{ marginTop: 16, color: '#4f46e5' }}>Loading...</p>}
        {error && <p style={{ color: '#dc2626', marginTop: 16 }}>{error}</p>}
        {weather && (
          <div className="weather-card">
            <WeatherCard {...weather} location={location} />
          </div>
        )}
      </main>
    );
}
