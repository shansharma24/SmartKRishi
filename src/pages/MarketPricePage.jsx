import React, { useState, useEffect } from "react";

const cities = [
  "Dehradun",
  "Shimla",
  "Nainital",
  "Mussoorie",
  "Manali",
  "Darjeeling",
  "Munnar",
  "Gangtok",
  "Ooty",
  "Shillong"
];

const dummyData = {
  Dehradun: [
    { name: "Wheat", price: 2300, trend: "up", image: "src/assets/wheat.jpeg" },
    { name: "Rice", price: 2800, trend: "down", image: "src/assets/rice.jpeg" },
    { name: "Tomato", price: 40, trend: "up", image: "src/assets/tomato.jpeg" },
  ],
  Shimla: [
    { name: "Apple", price: 160, trend: "up", image: "/images/apple.jpg" },
    { name: "Potato", price: 28, trend: "stable", image: "/images/potato.jpg" },
  ],
  Nainital: [
    { name: "Peach", price: 120, trend: "up", image: "/images/peach.jpg" },
    { name: "Plum", price: 110, trend: "down", image: "/images/plum.jpg" },
  ],
  Mussoorie: [
    { name: "Wheat", price: 2350, trend: "up", image: "src/assets/wheat.jpeg" },
    { name: "Corn", price: 1900, trend: "down", image: "/images/corn.jpg" },
  ],
  Manali: [
    { name: "Apple", price: 150, trend: "up", image: "/images/apple.jpg" },
    { name: "Barley", price: 2100, trend: "stable", image: "/images/barley.jpg" },
  ],
  Darjeeling: [
    { name: "Tea", price: 450, trend: "up", image: "/images/tea.jpg" },
  ],
  Munnar: [
    { name: "Tea", price: 460, trend: "up", image: "/images/tea.jpg" },
    { name: "Coffee", price: 550, trend: "down", image: "/images/coffee.jpg" },
  ],
  Gangtok: [
    { name: "Cardamom", price: 1200, trend: "up", image: "/images/cardamom.jpg" },
  ],
  Ooty: [
    { name: "Tea", price: 440, trend: "stable", image: "/images/tea.jpg" },
    { name: "Carrot", price: 45, trend: "up", image: "/images/carrot.jpg" },
  ],
  Shillong: [
    { name: "Pineapple", price: 90, trend: "down", image: "/images/pineapple.jpg" },
    { name: "Ginger", price: 130, trend: "up", image: "/images/ginger.jpg" },
  ],
};

export default function MarketPricePage() {
  const [selectedCity, setSelectedCity] = useState("Dehradun");
  const [prices, setPrices] = useState(dummyData[selectedCity] || []);
  const [sortOrder, setSortOrder] = useState("default");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPrices(dummyData[selectedCity] || []);
  }, [selectedCity]);

  const getTrendIcon = (trend) => {
    if (trend === "up") return "🔼";
    if (trend === "down") return "🔽";
    return "➖";
  };

  const filteredPrices = prices
    .filter((crop) => crop.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "high-to-low") return b.price - a.price;
      if (sortOrder === "low-to-high") return a.price - b.price;
      return 0;
    });

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        🌾 Market Prices
      </h1>

      {/* City Selection */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="p-2 border rounded-lg shadow-md"
        >
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search crop..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded-lg shadow-md"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded-lg shadow-md"
        >
          <option value="default">Sort By</option>
          <option value="high-to-low">Price High → Low</option>
          <option value="low-to-high">Price Low → High</option>
        </select>
      </div>

      {/* Prices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrices.length > 0 ? (
          filteredPrices.map((crop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200"
            >
              <img
                src={crop.image || "/images/placeholder.jpg"}
                alt={crop.name}
                className="w-36 h-36 object-cover rounded-xl mb-4 shadow-md"
              />
              <h2 className="text-2xl font-bold mb-3 text-gray-800">
                {crop.name}
              </h2>
              <p className="text-3xl font-extrabold text-green-700">
                ₹{crop.price}
              </p>
              <p className="text-lg mt-2">{getTrendIcon(crop.trend)}</p>
              <p className="text-gray-500 text-sm mt-3">Locally Grown</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No crops available for this city.
          </p>
        )}
      </div>

     
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}
