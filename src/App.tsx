import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather, fetchCoordinates } from "./api/weather";
import { CloudRainWind } from "lucide-react";

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
        const coords = await fetchCoordinates(city);
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
      <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center py-12 px-4 font-sans text-gray-800">
        <div className="w-full max-w-xl flex flex-col items-center">
            
          <div className="flex items-center gap-3 mb-8 text-white drop-shadow-md">
            <CloudRainWind size={48} className="animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Weather<span className="text-pink-200">Now</span>
            </h1>
          </div>

          <div className="w-full backdrop-blur-md bg-white/20 p-6 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/30 transition-all duration-300">
            <SearchBar onSearch={handleSearch} />
          </div>

          {loading && (
            <div className="mt-8 flex flex-col items-center text-white animate-pulse">
                <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin mb-2" />
                <p className="font-medium text-lg tracking-wide drop-shadow">Fetching skies...</p>
            </div>
          )}

          {error && (
            <div className="mt-8 px-6 py-4 bg-red-500/80 backdrop-blur-md text-white rounded-2xl shadow-lg border border-red-400 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-semibold">{error}</p>
            </div>
          )}

          {weather && (
            <div className="w-full mt-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
              <WeatherCard {...weather} location={location} />
            </div>
          )}

        </div>
      </main>
    );
}
