import { MapPin, Wind, Thermometer, Calendar } from "lucide-react";

interface WeatherProps {
    temperature: number;
    windspeed: number;
    weathercode: number;
    time: string;
    location: string;
}

export default function WeatherCard({
    temperature,
    windspeed,
    weathercode,
    time,
    location,
  }: WeatherProps) {

    // Helper to get nice backgrounds/icons based on temperature or weather code
    const isHot = temperature > 25;
    const isCold = temperature < 10;
    
    // Very simple code logic - Open-Meteo codes vary wildly
    const isRain = [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weathercode);

    let cardBg = "from-blue-400 to-indigo-600";
    if (isHot) cardBg = "from-orange-400 to-red-500";
    if (isCold) cardBg = "from-cyan-500 to-blue-600";
    if (isRain) cardBg = "from-slate-600 to-slate-800";

    return (
      <div 
        className={`bg-gradient-to-br ${cardBg} shadow-2xl rounded-[2rem] p-8 text-white w-full max-w-xl mx-auto relative overflow-hidden group hover:shadow-cyan-500/20 transition-all duration-500`}
      >
        {/* Decorative background blob */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-700 ease-in-out"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500 ease-in-out"></div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/20">
            <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                    <MapPin size={18} className="text-white/90" />
                    <h2 className="text-xl font-bold tracking-wide">{location}</h2>
                </div>
                <div className="flex items-center gap-2 text-white/80 pl-2">
                    <Calendar size={14} />
                    <p className="text-sm font-medium">{new Date(time).toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' })}</p>
                </div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-3xl border border-white/10 shadow-inner">
                <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-1">Status</p>
                <div className="text-3xl">
                    {isRain ? '🌧️' : isHot ? '☀️' : isCold ? '❄️' : '⛅'}
                </div>
                <p className="text-xs mt-1 font-mono bg-black/20 px-2 py-0.5 rounded text-white/80">Code {weathercode}</p>
            </div>
        </div>

        <div className="relative z-10 mt-8 grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/20 transition-colors">
                <Thermometer size={32} className="mb-3 text-white/80" />
                <p className="text-5xl font-black drop-shadow-md">{temperature}°</p>
                <p className="text-sm font-medium text-white/70 uppercase tracking-widest mt-2">Celsius</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/20 transition-colors">
                <Wind size={32} className="mb-3 text-white/80" />
                <p className="text-4xl font-extrabold drop-shadow-md mt-1">{windspeed}</p>
                 <p className="text-sm font-medium text-white/70 uppercase tracking-widest mt-2">km/h</p>
            </div>
        </div>

      </div>
    );
}
