import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) return alert("Please enter your name");
    if (!email) return alert("Please enter your email");
    if (!subject) return alert("Please enter your subject");
    if (!message) return alert("Please enter your message");

    const data = {
      name,
      email,
      company,
      subject,
      message,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/inquiry`,
      data,
      {
        withCredentials: true,
      },
    );
    console.log(response);

    alert("Thank you for your inquiry! Our team will get back to you shortly.");
    setName("");
    setEmail("");
    setCompany("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mini Hero Header */}
      <section className="relative w-full h-[35vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Mavonorm"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get In <span className="text-orange-500 font-light">Touch</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto">
            Ready to elevate your exhibition presence? Let's discuss your next
            project.
          </p>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Information (Left Side) */}
          <div className="w-full lg:w-1/3">
            <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">
              Contact Us
            </h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
              We'd love to hear from you.
            </h2>
            <p className="text-gray-600 font-light mb-12">
              Whether you have a fully developed brief or just a concept, our
              global team is ready to help you create an unforgettable
              exhibition space.
            </p>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shrink-0 text-orange-600 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Global Headquarters
                  </h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    123 Exhibition Ave, Suite 400
                    <br />
                    Design District, NY 10001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shrink-0 text-orange-600 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    +1 (800) 123-4567
                    <br />
                    Mon-Fri, 9am - 6pm EST
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shrink-0 text-orange-600 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    hello@mavonorm.com
                    <br />
                    support@mavonorm.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form (Right Side) */}
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send an Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Email ID"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Company & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-700"
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="New Exhibition Stand">
                      New Exhibition Stand Design
                    </option>
                    <option value="Modular Solution">
                      Modular Solution Inquiry
                    </option>
                    <option value="Logistics">Logistics & Storage</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="Tell us about your upcoming event, booth dimensions, and goals..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 cursor-pointer text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
