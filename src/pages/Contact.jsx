import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-6 relative">
      {/* Back to Home Button at page top right */}
      <button
        className="absolute top-8 right-8 px-4 py-2 bg-green-700 text-white rounded-full font-semibold hover:bg-gray-900 transition z-50"
        onClick={() => navigate("/")}
      >
        ⬅ Back to Home
      </button>
      {/* Header */}
      <h1 className="text-4xl font-bold text-green-700 mb-2">Contact Us</h1>
      <p className="text-gray-700 text-center max-w-xl mb-8">
        🌱 We’re here to help farmers grow better.  
        Reach out to us for queries, support, or collaboration.
      </p>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Contact Information
          </h2>
          <p className="mb-2">📞 Phone: +91 85277 40849</p>
          <p className="mb-2">✉️ Email: support@smartkrishi.com</p>
          <p className="mb-2">📍 Address: ABESIT, Ghaziabad, India</p>
          <p className="mb-2">🕒 Randike koi vkt nhi apna kaam krne ka </p>
          {/* Working Hours: Mon–Sat (9 AM – 6 PM) */}

          {/* Social Media */}
          <h3 className="text-xl font-semibold text-green-600 mt-6 mb-3">
            Connect with us
          </h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-600">🌐</a>
            <a href="#" className="hover:text-green-600">📱</a>
            <a href="#" className="hover:text-pink-600">📸</a>
            <a href="#" className="hover:text-red-600">▶️</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Send us a Message
          </h2>
          {submitted ? (
            <p className="text-green-700 font-medium">
              ✅ Thank you! We’ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border rounded-lg p-2"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="border rounded-lg p-2"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="border rounded-lg p-2"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="border rounded-lg p-2"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Google Maps */}
      <div className="w-full max-w-5xl mb-10">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.982746053604!2d77.493!3d28.646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5500f5f2d41%3A0x123456789abcd!2sABESIT%20College!5e0!3m2!1sen!2sin!4v1694102827602"
          width="100%"
          height="300"
          className="rounded-2xl shadow-md"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
