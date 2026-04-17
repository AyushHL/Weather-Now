import { useState } from "react";
import { Search } from "lucide-react";

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
        <form onSubmit={handleSubmit} className="relative w-full flex items-center group">
          <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search for any city..."
              className="w-full pl-12 pr-16 py-4 rounded-2xl bg-white/40 backdrop-blur-sm border-2 border-white/30 text-gray-800 placeholder-gray-500 font-medium text-lg focus:outline-none focus:border-white focus:bg-white/60 focus:ring-4 focus:ring-white/20 transition-all shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]"
          />
          <Search className="absolute left-4 text-gray-500 group-focus-within:text-purple-600 transition-colors w-6 h-6" />
          
          <button
              type="submit"
              className="absolute right-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:from-purple-600 hover:to-indigo-700 active:scale-95 transition-all outline-none focus:ring-2 focus:ring-indigo-400"
          >
              Find
          </button>
        </form>
    );
}
