import React, { useState } from "react";
import axios from "axios";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "4c0c1fff7ad6124699d99ec44b21c8b7"; 

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      const weather = res.data;
      const forecast = forecastRes.data.list.slice(0, 4).map((f, i) => ({
        day: i === 0 ? "Today" : new Date(f.dt * 1000).toLocaleDateString(),
        temp: `${Math.round(f.main.temp)}°C`,
        rain: f.pop * 100 + "%",
      }));

      setData({
        location: weather.name + ", " + weather.sys.country,
        temperature: Math.round(weather.main.temp),
        feelsLike: Math.round(weather.main.feels_like),
        condition: weather.weather[0].description,
        humidity: weather.main.humidity,
        pressure: weather.main.pressure,
        visibility: weather.visibility / 1000,
        uvIndex: "—", // OpenWeather free API doesn’t provide UV directly
        sunrise: new Date(weather.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(weather.sys.sunset * 1000).toLocaleTimeString(),
        windSpeed: weather.wind.speed,
        windDirection: weather.wind.deg,
        gusts: weather.wind.gust || "—",
        rainfall: weather.rain ? weather.rain["1h"] : 0,
        rainChance: forecast[0].rain,
        forecast,
        agri: {
          soilMoisture: "Medium (45%)",
          evapotranspiration: "3.5 mm/day",
          irrigationAdvice: "Best time: Early Morning 🌄",
          pestRisk: "⚠️ High fungal risk (due to humidity)",
        },
      });
    } catch (err) {
      setError("City not found. Try another!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        🌱 Smart Krishi – Weather Dashboard
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Search and get real-time weather insights for farming decisions.
      </p>

      {/* Search Bar */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="px-4 py-2 rounded-lg border shadow w-64"
        />
        <button
          onClick={fetchWeather}
          className="px-6 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition"
        >
          🔍 Search
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* Loader */}
      {loading && <p className="text-green-800 font-semibold">Fetching data...</p>}

      {/* Weather Data */}
      {data && (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
          {/* Location & Condition */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold">{data.location}</h2>
              <p className="text-gray-500">{data.condition}</p>
            </div>
            <div className="text-5xl font-bold text-green-700">
              {data.temperature}°C
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-green-50 rounded-xl shadow">
              <p className="font-semibold">Feels Like</p>
              <p>{data.feelsLike}°C</p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl shadow">
              <p className="font-semibold">Humidity</p>
              <p>{data.humidity}%</p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl shadow">
              <p className="font-semibold">Pressure</p>
              <p>{data.pressure} hPa</p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl shadow">
              <p className="font-semibold">Visibility</p>
              <p>{data.visibility} km</p>
            </div>
          </div>

          {/* More Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-4">
            <div className="p-3 bg-green-50 rounded-xl shadow">
              <p className="font-semibold">Wind</p>
              <p>{data.windSpeed} m/s</p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl shadow">
              <p className="font-semibold">Direction</p>
              <p>{data.windDirection}°</p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl shadow">
              <p className="font-semibold">Rainfall</p>
              <p>{data.rainfall} mm</p>
            </div>
            <div className="p-3 bg-green-50 rounded-xl shadow">
              <p className="font-semibold">Chance of Rain</p>
              <p>{data.rainChance}</p>
            </div>
          </div>

          {/* Sunrise & Sunset */}
          <div className="flex justify-around mt-6 text-gray-700">
            <p>🌅 Sunrise: {data.sunrise}</p>
            <p>🌇 Sunset: {data.sunset}</p>
          </div>

          {/* Forecast */}
          <h3 className="mt-8 text-xl font-bold text-green-800">📅 Forecast</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
            {data.forecast.map((f, i) => (
              <div
                key={i}
                className="bg-green-100 p-3 rounded-xl shadow text-center"
              >
                <p className="font-semibold">{f.day}</p>
                <p>{f.temp}</p>
                <p>🌧 {f.rain}</p>
              </div>
            ))}
          </div>

          {/* Agri Insights */}
          <h3 className="mt-8 text-xl font-bold text-green-800">🌾 Agri Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-green-50 p-4 rounded-xl shadow">
              <p className="font-semibold">Soil Moisture</p>
              <p>{data.agri.soilMoisture}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl shadow">
              <p className="font-semibold">Evapotranspiration</p>
              <p>{data.agri.evapotranspiration}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl shadow">
              <p className="font-semibold">Irrigation Advice</p>
              <p>{data.agri.irrigationAdvice}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl shadow text-red-600">
              <p className="font-semibold">Pest/Disease Risk</p>
              <p>{data.agri.pestRisk}</p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-8 px-6 py-2 bg-green-700 text-white font-semibold rounded-full shadow hover:bg-green-800 transition"
      >
        ⬅ Back to Home
      </button>
    </div>
  );
}
