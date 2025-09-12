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
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 text-center w-full max-w-md mt-6">
        <h2 className="text-2xl font-semibold mb-2">{location}</h2>
        <p className="text-gray-500 mb-4">{new Date(time).toLocaleString()}</p>
        <p className="text-4xl font-bold">{temperature}°C</p>
        <p className="mt-2">💨 {windspeed} km/h</p>
        <p className="mt-1 text-gray-600">Weather Code: {weathercode}</p>
      </div>
    );
}
