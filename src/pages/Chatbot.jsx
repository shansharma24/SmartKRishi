import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Namaste! I’m your Smart Krishi Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  // Send message to backend server
  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });
 
      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Error connecting to server." }]);
    }

    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 relative">
      {/* Back to Home Button at top left */}
      <button
        className="absolute top-8 left-8 px-4 py-2 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition z-50"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>
      <div className="w-[500px] h-[600px] bg-white shadow-2xl rounded-3xl overflow-hidden border flex flex-col">
        <div className="bg-green-600 text-white p-5 text-2xl font-bold text-center">🌱 Smart Krishi Chatbot</div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-[80%] text-lg ${
                msg.sender === "user"
                  ? "bg-green-100 ml-auto text-right"
                  : "bg-gray-100 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex border-t p-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 p-3 outline-none text-lg rounded-l-xl border"
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-6 py-2 text-lg rounded-r-xl hover:bg-green-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
