import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState({
    current: {},
    logs: {}
  });
  const [loading, setLoading] = useState(true);

  // Fetch dashboard data
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/dashboard");
      if (res.data.status === "success") {
        setData({
          current: res.data.current,
          logs: res.data.logs
        });
      }
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // refresh every 5 sec
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  const { current, logs } = data;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Smart Krishi Dashboard</h1>

      {/* Current Sensor Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.entries(current).map(([key, value]) => (
          key !== "alerts" && key !== "timestamp" && (
            <div
              key={key}
              className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
            >
              <span className="text-gray-500 text-sm">{key.replace(/_/g, " ")}</span>
              <span className="text-xl font-bold">{value.toString()}</span>
            </div>
          )
        ))}
      </div>

      {/* Crop & Fertilizer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Recommended Crop</h2>
          <p className="text-xl">{current.recommended_crop || "N/A"}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Fertilizer Suggestion</h2>
          <p className="text-xl">{current.fertilizer_suggestion || "N/A"}</p>
        </div>
      </div>

      {/* Alerts */}
      {current.alerts && current.alerts.length > 0 && (
        <div className="bg-red-100 p-4 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold mb-2">Alerts</h2>
          <ul className="list-disc pl-5">
            {current.alerts.map((alert, idx) => (
              <li key={idx}>{alert}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Logs */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Historical Logs</h2>
        <div className="overflow-x-auto max-h-96">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">Timestamp</th>
                <th className="border px-2 py-1">Moisture Avg</th>
                <th className="border px-2 py-1">Temperature</th>
                <th className="border px-2 py-1">Humidity</th>
                <th className="border px-2 py-1">Crop</th>
                <th className="border px-2 py-1">Fertilizer</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(logs)
                .reverse()
                .map((log, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="border px-2 py-1">{log.timestamp}</td>
                    <td className="border px-2 py-1">{log.moisture_avg}</td>
                    <td className="border px-2 py-1">{log.temperature}</td>
                    <td className="border px-2 py-1">{log.humidity}</td>
                    <td className="border px-2 py-1">{log.recommended_crop}</td>
                    <td className="border px-2 py-1">{log.fertilizer_suggestion}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
