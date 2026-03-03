"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, CheckCircle2, Shield, ThumbsUp, Wrench, Phone } from "lucide-react";
import Link from "next/link";

// Brand Logo component with fallback
const BrandLogo = ({ name, logo }: { name: string; logo: string }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="w-full h-full bg-linear-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-lg flex items-center justify-center text-white font-bold text-xl">
        {name.charAt(0)}
      </div>
    );
  }
  
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain"
        onError={() => setHasError(true)}
      />
    </>
  );
};

const brands = [
  {
    name: "Daikin",
    tier: "Premium",
    features: ["Inverter Technology", "Energy Efficient", "Japanese Quality"],
    logo: "https://logo.clearbit.com/daikin.com",
  },
  {
    name: "Mitsubishi Electric",
    tier: "Premium",
    features: ["Heavy Duty", "Silent Operation", "Long Lasting"],
    logo: "https://logo.clearbit.com/mitsubishielectric.com",
  },
  {
    name: "LG",
    tier: "Premium",
    features: ["Dual Inverter", "AI ThinQ", "10 Year Warranty"],
    logo: "https://logo.clearbit.com/lg.com",
  },
  {
    name: "Samsung",
    tier: "Premium",
    features: ["Wind-Free Cooling", "Triple Inverter", "Smart Things"],
    logo: "https://logo.clearbit.com/samsung.com",
  },
  {
    name: "Carrier",
    tier: "Popular",
    features: ["Flexicool Technology", "PM 2.5 Filter", "Auto Cleanser"],
    logo: "https://logo.clearbit.com/carrier.com",
  },
  {
    name: "Hitachi",
    tier: "Popular",
    features: ["iClean Technology", "Tropical Rotary Compressor", "Stable Cooling"],
    logo: "https://logo.clearbit.com/hitachi.com",
  },
  {
    name: "Blue Star",
    tier: "Popular",
    features: ["Precision Cooling", "iFeel Technology", "Made in India"],
    logo: "https://logo.clearbit.com/bluestarindia.com",
  },
  {
    name: "Voltas",
    tier: "Popular",
    features: ["Adjustable Inverter", "Copper Condenser", "Anti Dust Filter"],
    logo: "https://logo.clearbit.com/voltas.com",
  },
  {
    name: "Whirlpool",
    tier: "Value",
    features: ["6th Sense Technology", "IntelliFrost", "Copper Coil"],
    logo: "https://logo.clearbit.com/whirlpool.com",
  },
  {
    name: "Panasonic",
    tier: "Value",
    features: ["Nanoe-G Technology", "Econavi", "Twin Cool Inverter"],
    logo: "https://logo.clearbit.com/panasonic.com",
  },
  {
    name: "Godrej",
    tier: "Value",
    features: ["I-Sense Technology", "5-in-1 Convertible", "Eco Friendly"],
    logo: "https://logo.clearbit.com/godrej.com",
  },
  {
    name: "Lloyd",
    tier: "Budget",
    features: ["Golden Fin Evaporator", "Low Gas Detection", "Anti Viral Filter"],
    logo: "https://logo.clearbit.com/mylloyd.com",
  },
  {
    name: "Haier",
    tier: "Budget",
    features: ["Self Clean", "Turbo Cool", "5 Star Rating"],
    logo: "https://logo.clearbit.com/haier.com",
  },
];

const serviceTypes = [
  { icon: Wrench, title: "Installation", desc: "Expert AC installation" },
  { icon: Shield, title: "Repair", desc: "Quick repair services" },
  { icon: Award, title: "AMC", desc: "Annual maintenance" },
  { icon: ThumbsUp, title: "Gas Refill", desc: "Genuine refrigerant" },
];

export default function BrandsPage() {
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
            Brands We Service
          </motion.h1>
          <motion.p
            className="text-blue-200 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expert service for all major AC brands - installation, repair & maintenance
          </motion.p>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceTypes.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  className="bg-linear-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-2xl p-6 text-center text-white"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <service.icon size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-blue-200 text-sm mt-1">{service.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-linear-to-b from-blue-50/50 to-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              13+ Brands
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              All Major <span className="gradient-text">AC Brands</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From premium to budget-friendly, we service and install all brands
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <AnimatedSection key={brand.name} delay={index * 0.05}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-1 border border-gray-100">
                      <BrandLogo name={brand.name} logo={brand.logo} />
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        brand.tier === "Premium"
                          ? "bg-amber-100 text-amber-700"
                          : brand.tier === "Popular"
                          ? "bg-blue-100 text-blue-700"
                          : brand.tier === "Value"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {brand.tier}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {brand.name}
                  </h3>
                  <ul className="space-y-2">
                    {brand.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-[#1e3a5f] via-[#2d5a8e] to-[#1e3a5f] relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/5 rounded-full"
              style={{
                width: 100 + i * 60,
                height: 100 + i * 60,
                top: `${20 + i * 12}%`,
                left: `${10 + i * 18}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative section-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need Service for Your AC?
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              No matter the brand, our expert technicians are ready to help with
              installation, repair, and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-animate inline-flex items-center justify-center gap-2 bg-white text-[#1e3a5f] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-50"
              >
                <Phone size={18} />
                Contact Us Now
              </Link>
              <a
                href="tel:+917801929198"
                className="btn-animate inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/60"
              >
                Call: +91 7801929198
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
