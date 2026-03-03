"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Award,
  Wrench,
  Star,
} from "lucide-react";

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WHATSAPP_NUMBER = "917801929198";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      { text: "+91 7801929198", action: "tel:+917801929198" },
      { text: "+91 9409152153", action: "tel:+919409152153" },
    ],
    extra: "Available Mon-Sat, 9 AM - 7 PM",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      { text: "mechanicalwings3008@gmail.com", action: "mailto:mechanicalwings3008@gmail.com" },
    ],
    extra: "Quick response within 24 hours",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: MapPin,
    title: "Location",
    details: [
      { text: "Ahmedabad, Gujarat, India", action: "https://www.google.com/maps/search/Ahmedabad,+Gujarat,+India" },
    ],
    extra: "Tap for directions",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      { text: "Mon - Sat: 9:00 AM - 7:00 PM", action: null },
    ],
    extra: "Emergency service available 24/7",
    color: "from-violet-500 to-violet-600",
  },
];

// Gujarat cities and areas for address suggestions
const addressSuggestions = [
  "Ghatlodiya, Ahmedabad, Gujarat",
  "Gota, Ahmedabad, Gujarat",
  "Satellite, Ahmedabad, Gujarat",
  "Bopal, Ahmedabad, Gujarat",
  "Thaltej, Ahmedabad, Gujarat",
  "Vastrapur, Ahmedabad, Gujarat",
  "Navrangpura, Ahmedabad, Gujarat",
  "CG Road, Ahmedabad, Gujarat",
  "SG Highway, Ahmedabad, Gujarat",
  "Maninagar, Ahmedabad, Gujarat",
  "Naroda, Ahmedabad, Gujarat",
  "Chandkheda, Ahmedabad, Gujarat",
  "Motera, Ahmedabad, Gujarat",
  "Ranip, Ahmedabad, Gujarat",
  "Sabarmati, Ahmedabad, Gujarat",
  "Paldi, Ahmedabad, Gujarat",
  "Ellis Bridge, Ahmedabad, Gujarat",
  "Ambawadi, Ahmedabad, Gujarat",
  "Bodakdev, Ahmedabad, Gujarat",
  "Prahlad Nagar, Ahmedabad, Gujarat",
  "Jodhpur, Ahmedabad, Gujarat",
  "Vejalpur, Ahmedabad, Gujarat",
  "South Bopal, Ahmedabad, Gujarat",
  "Science City, Ahmedabad, Gujarat",
  "Sola, Ahmedabad, Gujarat",
  "Naranpura, Ahmedabad, Gujarat",
  "Ashram Road, Ahmedabad, Gujarat",
  "Memnagar, Ahmedabad, Gujarat",
  "Gurukul, Ahmedabad, Gujarat",
  "Drive In Road, Ahmedabad, Gujarat",
];

const serviceOptions = [
  "New AC Installation",
  "AC Repair",
  "AC Service / Maintenance",
  "Gas Charging / Refilling",
  "AC Uninstallation",
  "AC Shifting",
  "AMC (Annual Maintenance Contract)",
  "Commercial HVAC",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    area: "",
    locality: "",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "",
    message: "",
  });

  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on area input using useMemo
  const filteredSuggestions = useMemo(() => {
    if (formData.area.length > 0) {
      return addressSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(formData.area.toLowerCase())
      );
    }
    return [];
  }, [formData.area]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    const parts = suggestion.split(", ");
    setFormData({
      ...formData,
      area: parts[0] || "",
      city: parts[1] || "Ahmedabad",
      state: parts[2] || "Gujarat",
    });
    setShowSuggestions(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatAddress = () => {
    const parts = [
      formData.locality,
      formData.area,
      formData.city,
      formData.state,
      formData.pincode,
    ].filter(Boolean);
    return parts.join(", ");
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullAddress = formatAddress();

    const message = `Hello Mechanical Wings Air Condition!

New Inquiry
━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Required: ${formData.service}
Address: ${fullAddress}

Message:
${formData.message}
━━━━━━━━━━━━━━━━━━

Please get back to me. Thank you!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const isFormValid =
    formData.name && formData.phone && formData.service && formData.area && formData.message;

  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-linear-to-br from-[#1e3a5f] to-[#152a45] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-400 rounded-full blur-3xl opacity-15" />
        </div>
        <div className="relative section-container text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-blue-200 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get in touch for AC installation, repair, and maintenance services
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 h-full text-center"
                  whileHover={{ y: -4 }}
                >
                  <div
                    className={`w-14 h-14 bg-linear-to-br ${info.color} rounded-xl flex items-center justify-center mb-5 mx-auto shadow-lg`}
                  >
                    <info.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail) =>
                    detail.action ? (
                      <a
                        key={detail.text}
                        href={detail.action}
                        target={detail.action.startsWith("http") ? "_blank" : undefined}
                        rel={detail.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block text-gray-600 text-sm break-all hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        {detail.text}
                      </a>
                    ) : (
                      <p key={detail.text} className="text-gray-600 text-sm break-all">
                        {detail.text}
                      </p>
                    )
                  )}
                  <p className="text-gray-400 text-xs mt-2">{info.extra}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-20 bg-linear-to-b from-blue-50/50 to-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <WhatsAppIcon size={16} />
              Quick WhatsApp Inquiry
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Send Us a <span className="gradient-text">Message</span>
            </h2>
            <p className="text-gray-500 mt-4">
              Fill the form and send directly to our WhatsApp for faster response
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <form
                  onSubmit={handleWhatsAppSubmit}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="space-y-6">
                    {/* Name & Phone */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter phone number"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-gray-600"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Address Section */}
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Address <span className="text-red-500">*</span>
                      </label>

                      {/* Locality / House / Street */}
                      <input
                        type="text"
                        name="locality"
                        value={formData.locality}
                        onChange={handleInputChange}
                        placeholder="House No., Street, Landmark"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                      />

                      {/* Area with Suggestions */}
                      <div className="relative" ref={suggestionRef}>
                        <input
                          type="text"
                          name="area"
                          value={formData.area}
                          onChange={(e) => {
                            handleInputChange(e);
                            setShowSuggestions(true);
                          }}
                          placeholder="Area / Locality (e.g., Ghatlodiya)"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                          onFocus={() => formData.area.length > 0 && filteredSuggestions.length > 0 && setShowSuggestions(true)}
                        />
                        {showSuggestions && filteredSuggestions.length > 0 && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
                            {filteredSuggestions.map((suggestion, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="w-full px-4 py-3 text-left text-sm hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-0"
                              >
                                <MapPin size={14} className="inline mr-2 text-gray-400" />
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* City, State, Pincode */}
                      <div className="grid grid-cols-3 gap-4">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                        />
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="State"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                        />
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="Pincode"
                          maxLength={6}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Describe your requirement..."
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={!isFormValid}
                      className={`btn-animate w-full inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                        isFormValid
                          ? "bg-green-500 hover:bg-green-600 hover:shadow-xl cursor-pointer"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                      whileHover={isFormValid ? { scale: 1.01 } : {}}
                      whileTap={isFormValid ? { scale: 0.99 } : {}}
                    >
                      <WhatsAppIcon size={20} />
                      Send via WhatsApp
                    </motion.button>

                    <p className="text-center text-xs text-gray-400">
                      Clicking will open WhatsApp with your message pre-filled
                    </p>
                  </div>
                </form>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection direction="right">
                {/* Quick Contact */}
                <div className="bg-linear-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                    <p className="text-blue-200 text-sm mb-6">
                      Need immediate assistance? Call us directly.
                    </p>
                    <a
                      href="tel:+917801929198"
                      className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-xl text-sm font-medium hover:bg-white/30 transition-colors"
                    >
                      <Phone size={18} />
                      +91 7801929198
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                {/* Business Details */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-5">
                    Business Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 py-2">
                      <Building2 size={18} className="text-[#1e3a5f] shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Company</p>
                        <p className="text-xs text-gray-500">
                          Mechanical Wings Air Condition
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-2">
                      <Award size={18} className="text-[#1e3a5f] shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">GST TIN</p>
                        <p className="text-xs text-gray-500">24AWQPV5705K1ZW</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-2">
                      <MapPin size={18} className="text-[#1e3a5f] shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Location</p>
                        <p className="text-xs text-gray-500">Ahmedabad, Gujarat</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-2">
                      <Star size={18} className="text-[#1e3a5f] shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Experience</p>
                        <p className="text-xs text-gray-500">10+ Years</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-2">
                      <Wrench size={18} className="text-[#1e3a5f] shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Speciality</p>
                        <p className="text-xs text-gray-500">Ac Sales And Services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Find Us on <span className="gradient-text">Map</span>
            </h2>
            <p className="text-gray-500 mt-4">
              Visit us or we&apos;ll come to you — serving all areas of Ahmedabad
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717764858!2d72.43965535!3d23.0204978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mechanical Wings Air Condition Location"
                className="w-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
