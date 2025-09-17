import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // 👉 Here you can add EmailJS, Nodemailer, or API call
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-500">
            Have questions about our App Store? Fill out the form or reach us
            directly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-gray-500">support@appstore.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-gray-500">+880 123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-gray-500">Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-primary shadow-lg rounded-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-purple-800 border-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-purple-800 border-primary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-purple-800 border-primary"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-purple-800 text-white rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
