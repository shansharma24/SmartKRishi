import React, { useState } from "react";

export default function SoilRecommendation() {
  const [formData, setFormData] = useState({
    farmSize: "",
    crop: "",
    month: "",
    location: ""
  });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setData(null);
    try {
      const res = await fetch("http://10.42.87.173:5000/api/dashboard", {  // 👈 
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-200 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          🌱 Smart Krishi – Crop Recommendation
        </h1>

        {/* Input Form */}
        {!data && (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-6 border border-green-300 space-y-4"
          >
            <div>
              <label className="block font-semibold text-gray-700">Farm Size (in acres):</label>
              <input
                type="number"
                name="farmSize"
                value={formData.farmSize}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Month of Sowing:</label>
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select Month</option>
                {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City / Village"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            >
              {loading ? "Fetching..." : "Get Recommendations"}
            </button>
          </form>
        )}

        {/* Display Results */}
        {data && (
          <div className="mt-6 bg-green-50 shadow-lg rounded-2xl p-6 border border-green-400 space-y-4">
            <h2 className="text-xl font-bold text-green-700">
              🌾 Recommendations for Your Farm
            </h2>
            <p><b>Farm Size:</b> {formData.farmSize} acres</p>
            <p><b>Location:</b> {formData.location}</p>
            <p><b>Selected Crop:</b> {formData.crop} ({formData.month})</p>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Soil Status</h3>
              <p>🌡️ Temperature: {data.temperature} °C</p>
              <p>💧 Moisture: {data.moisture}%</p>
              <p>⚗️ pH: {data.pH}</p>
              <p>🌾 N: {data.nitrogen} | P: {data.phosphorus} | K: {data.potassium}</p>
            </div>

            <div className="bg-green-100 rounded-xl p-4 shadow-md">
              <h3 className="text-lg font-semibold text-green-800">Recommended Crops</h3>
              <div className="flex flex-wrap gap-2">
                {data.recommended_crops.map((crop, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-green-600 text-white rounded-full"
                  >
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-yellow-100 rounded-xl p-4 shadow-md">
              <h3 className="text-lg font-semibold text-yellow-700">Fertilizer Suggestion</h3>
              <p>{data.fertilizer_suggestion}</p>
            </div>

            <button
              onClick={() => setData(null)}
              className="mt-4 px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800"
            >
              🔄 Check Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
