"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Snowflake,
  Wind,
  ThermometerSun,
  Settings,
  Zap,
  Wrench,
  Monitor,
  Fan,
  Thermometer,
  Phone,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "Split AC Systems",
    desc: "Complete installation, repair, and maintenance services for split air conditioners. We handle wall-mounted, floor-standing, and ceiling-mounted split units from all major brands.",
    features: [
      "Installation & Commissioning",
      "Gas Charging & Leak Repair",
      "Compressor Replacement",
      "Regular Maintenance & Cleaning",
    ],
  },
  {
    icon: Monitor,
    title: "Window AC Systems",
    desc: "Professional servicing for window air conditioners including installation, cooling issues, noise problems, and complete overhaul services.",
    features: [
      "New Installation",
      "Cooling Issue Diagnostics",
      "Motor & Fan Replacement",
      "Deep Cleaning Service",
    ],
  },
  {
    icon: Zap,
    title: "Cassette AC Systems",
    desc: "Ceiling-mounted cassette AC solutions perfect for offices, shops, and commercial spaces. Expert installation and service for 4-way and 2-way cassette units.",
    features: [
      "Commercial Installation",
      "Duct & Drain Cleaning",
      "PCB & Controller Repair",
      "Performance Optimization",
    ],
  },
  {
    icon: ThermometerSun,
    title: "Chiller Systems",
    desc: "Industrial and commercial chiller installation and maintenance. We handle air-cooled and water-cooled chillers for large facilities and manufacturing plants.",
    features: [
      "Chiller Installation",
      "Preventive Maintenance",
      "Compressor Overhaul",
      "Refrigerant Management",
    ],
  },
  {
    icon: Wind,
    title: "VRF / VRV Systems",
    desc: "Variable Refrigerant Flow systems for large commercial buildings and multi-zone cooling. Complete project execution from design to commissioning.",
    features: [
      "System Design & Planning",
      "Multi-zone Installation",
      "Central Control Setup",
      "Annual Maintenance Contracts",
    ],
  },
  {
    icon: Settings,
    title: "Ductable & Package AC",
    desc: "Centralized air conditioning through ductable and package units. Ideal for large halls, auditoriums, server rooms, and commercial establishments.",
    features: [
      "Ducting Design & Fabrication",
      "Package Unit Installation",
      "Air Distribution Optimization",
      "Filter Replacement & Cleaning",
    ],
  },
  {
    icon: Thermometer,
    title: "Cold Room Solutions",
    desc: "Custom cold storage and cold room solutions for food preservation, pharmaceutical storage, and industrial applications with precise temperature control.",
    features: [
      "Cold Room Construction",
      "Temperature Control Systems",
      "Insulation & Panel Work",
      "Monitoring Systems",
    ],
  },
  {
    icon: Fan,
    title: "Ventilation Systems",
    desc: "Fresh air ventilation, exhaust systems, and air quality management. We design and install ventilation solutions for commercial and industrial spaces.",
    features: [
      "Exhaust Fan Installation",
      "Fresh Air Systems",
      "Kitchen Ventilation",
      "Industrial Exhaust Solutions",
    ],
  },
  {
    icon: Wrench,
    title: "AMC & Maintenance",
    desc: "Annual Maintenance Contracts to keep your AC systems running at peak efficiency. Regular inspections, cleaning, and preventive maintenance services.",
    features: [
      "Quarterly Inspections",
      "Preventive Maintenance",
      "Priority Service Response",
      "Discounted Spare Parts",
    ],
  },
];

const workProcess = [
  {
    step: "01",
    title: "Consultation",
    desc: "We understand your requirements and assess your space for the ideal cooling solution.",
  },
  {
    step: "02",
    title: "Recommendation",
    desc: "Our experts suggest the best AC system and brand based on your needs and budget.",
  },
  {
    step: "03",
    title: "Installation",
    desc: "Professional installation by certified technicians following all safety standards.",
  },
  {
    step: "04",
    title: "After-Sales",
    desc: "Ongoing support with regular maintenance and quick response to service requests.",
  },
];

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p
            className="text-blue-200 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive air conditioning solutions for residential, commercial,
            and industrial needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <motion.div
                  className="bg-linear-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full group text-center"
                  whileHover={{ y: -6 }}
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors mx-auto">
                    <service.icon
                      size={28}
                      className="text-[#1e3a5f] group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed tracking-wide mb-6">
                    {service.desc}
                  </p>
                  <div className="space-y-3 inline-block text-left">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-amber-500 shrink-0"
                        />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 bg-linear-to-b from-blue-50/50 to-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium mb-6">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
              A streamlined approach to deliver the best AC solutions
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.15}>
                <div className="text-center relative">
                  {/* Connector Line */}
                  {index < workProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-blue-200" />
                  )}
                  <motion.div
                    className="w-16 h-16 bg-linear-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <span className="text-white font-bold text-lg">
                      {item.step}
                    </span>
                  </motion.div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed tracking-wide">{item.desc}</p>
                </div>
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
              AC Spare Parts & Accessories
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              We stock genuine spare parts for all major brands. Get
              authentic components with manufacturer warranty at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a5f] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                <Phone size={18} />
                Contact Us Now
              </Link>
              <a
                href="tel:+917801929198"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
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
