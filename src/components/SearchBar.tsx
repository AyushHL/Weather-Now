import { useState } from "react";

interface Props {
    onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
    const [city, setCity] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (city.trim()) {
        onSearch(city);
        setCity("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
        <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
            Search
        </button>
        </form>
    );
}
