// src/pages/Community.jsx
// No external installs needed – just React + Tailwind

import React from "react";
import { useNavigate } from "react-router-dom"; // Add this import

export default function Community() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      {/* ===== HEADER ===== */}
      <header className="bg-green-700 text-white p-8 shadow-lg relative overflow-hidden">
        {/* Back Button */}
        <button
          className="mb-4 px-4 py-2 bg-white text-green-700 rounded-full font-semibold hover:bg-green-100 transition absolute top-4 right-4 z-20"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>
        {/* Animated background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="animate-pulse w-40 h-40 bg-white rounded-full absolute -top-10 -left-10"></div>
          <div className=" w-28 h-28 bg-yellow-300 rounded-full absolute top-12 right-12"></div>
        </div>
        <h1 className="text-4xl font-bold relative z-10">
          🌱 Smart Krishi Community
        </h1>
        <p className="mt-2 text-lg opacity-90 relative z-10">
          Connect • Learn • Grow Together
        </p>
      </header>

      {/* ===== MAIN ===== */}
      <main className="flex-1 p-8 grid lg:grid-cols-3 md:grid-cols-2 gap-8 relative">
        {/* SECTION 1 – Knowledge Hub */}
        <section className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            💬 Knowledge Hub
          </h2>
          <p className="text-gray-600 mb-3">
            Farmers helping farmers with advice, guides, and discussions.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Ask crop-specific questions</li>
            <li>✅ Share success stories</li>
            <li>✅ Best practices from experts</li>
          </ul>
          {/* Static image/banner instead of moving effect */}
          <div className="mt-4 w-full h-32 rounded-xl bg-green-300 flex items-center justify-center">
            <span className="text-white font-bold">[Crop GIF]</span>
          </div>
        </section>

        {/* SECTION 2 – Market & Resources */}
        <section className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            📈 Market & Resources
          </h2>
          <p className="text-gray-600 mb-3">
            Stay updated with crop prices and trade directly with peers.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>🌾 Local mandi price updates</li>
            <li>🛒 Buy & sell seeds/fertilizers</li>
            <li>🤝 Share tools & machinery</li>
          </ul>
          {/* Static image/banner instead of moving effect */}
          <div className="mt-4 w-full h-32 rounded-xl bg-yellow-300 flex items-center justify-center">
            <span className="text-gray-800 font-semibold">[Mandi Market]</span>
          </div>
        </section>

        {/* SECTION 3 – Learning */}
        <section className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            🎓 Learning & Awareness
          </h2>
          <p className="text-gray-600 mb-3">
            Learn modern methods and sustainable practices.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>🎥 Video tutorials</li>
            <li>📚 Blogs & guides</li>
            <li>🎤 Webinars with experts</li>
          </ul>
          {/* Static image/banner instead of moving effect */}
          <div className="mt-4 w-full h-32 rounded-xl bg-blue-300 flex items-center justify-center">
            <span className="text-white font-bold">[Learning Videos]</span>
          </div>
        </section>

        {/* SECTION 4 – Collaboration */}
        <section className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            🤝 Collaboration
          </h2>
          <p className="text-gray-600 mb-3">
            Work together and solve problems faster.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>👨‍🌾 Mentor–Mentee program</li>
            <li>🐛 Post crop disease issues</li>
            <li>🤖 AI chatbot support</li>
          </ul>
          <div className="mt-4 w-full h-32 rounded-xl bg-purple-300 flex items-center justify-center">
            <span className="text-white font-bold">[Farmers Chat]</span>
          </div>
        </section>

        {/* SECTION 5 – Engagement */}
        <section className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            🏆 Engagement & Motivation
          </h2>
          <p className="text-gray-600 mb-3">
            Farming made fun with challenges and rewards.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>🏅 Badges for achievements</li>
            <li>📊 Polls & surveys</li>
            <li>🌍 Eco-friendly challenges</li>
          </ul>
          <div className="mt-4 w-full h-32 rounded-xl bg-pink-300 flex items-center justify-center">
            <span className="text-gray-800 font-semibold">[Leaderboard]</span>
          </div>
        </section>

        {/* SECTION 6 – Local & Govt */}
        <section className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            🏛️ Local & Government
          </h2>
          <p className="text-gray-600 mb-3">
            Stay updated on schemes and local opportunities.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>💰 Subsidy & loan info</li>
            <li>🌦️ Weather alerts</li>
            <li>🙌 NGO collaborations</li>
          </ul>
          <div className="mt-4 w-full h-32 rounded-xl bg-red-300 flex items-center justify-center">
            <span className="text-white font-bold">[Govt Schemes]</span>
          </div>
        </section>
      </main>

      {/* ===== POSTS FEED ===== */}
      <section className="bg-white p-8 m-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          📰 Latest Community Posts
        </h2>
        <div className="space-y-6">
          {[
            {
              user: "Rahul (Farmer)",
              text: "🌾 My wheat yield increased by 20% after using Smart Krishi water scheduling!",
            },
            {
              user: "Priya (Agri Student)",
              text: "📚 Anyone interested in learning hydroponics? I’m sharing free guides.",
            },
            {
              user: "Shyam (Farmer)",
              text: "🐛 My crop has brown leaf spots. Any advice?",
            },
          ].map((post, i) => (
            <div
              key={i}
              className="p-4 border rounded-xl hover:bg-green-50 transition"
            >
              <p className="font-semibold text-green-800">{post.user}</p>
              <p className="text-gray-700">{post.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-green-700 text-white text-center py-4">
        © {new Date().getFullYear()} Smart Krishi • Growing Together 🌾
      </footer>
    </div>
  );
}
