"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Testimonials from "@/components/Testimonials";
import {
  Snowflake,
  Wrench,
  Shield,
  Clock,
  Star,
  ChevronRight,
  Phone,
  CheckCircle2,
  Zap,
  ThermometerSun,
  Wind,
  Settings,
} from "lucide-react";

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "13+", label: "Partner Brands" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Snowflake,
    title: "Split AC Systems",
    desc: "Expert installation and servicing of split air conditioners from all major brands with warranty-backed solutions.",
  },
  {
    icon: Wind,
    title: "VRF Systems",
    desc: "Variable Refrigerant Flow systems for commercial buildings and large-scale multi-zone cooling applications.",
  },
  {
    icon: ThermometerSun,
    title: "Chillers",
    desc: "Installation and maintenance of air-cooled & water-cooled chiller systems for industrial cooling needs.",
  },
  {
    icon: Settings,
    title: "Ductable & Package",
    desc: "Centralized cooling solutions with ductable and package AC units for halls, offices, and commercial spaces.",
  },
  {
    icon: Zap,
    title: "Cassette AC",
    desc: "Ceiling-mounted cassette AC solutions ideal for offices, showrooms, and commercial establishments.",
  },
  {
    icon: Wrench,
    title: "Cold Room",
    desc: "Custom cold room and cold storage solutions for food preservation and industrial temperature control.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Certified Technicians",
    desc: "Factory-trained experts for all major brands with verified certifications and years of hands-on experience.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    desc: "Same-day service for urgent repair needs. We prioritize your comfort with fast turnaround times.",
  },
  {
    icon: Star,
    title: "Quality Parts",
    desc: "Only genuine spare parts with manufacturer warranty. No compromises on quality or durability.",
  },
  {
    icon: CheckCircle2,
    title: "Satisfaction Guaranteed",
    desc: "We ensure complete customer satisfaction with transparent pricing and reliable after-sales support.",
  },
];

const brands = [
  "Blue Star",
  "Mitsubishi Electric",
  "Daikin",
  "Voltas",
  "Carrier",
  "Midea",
  "IFB",
  "Lloyd",
  "Kelvinator",
  "Whirlpool",
  "Hitachi",
  "Haier",
  "Toshiba",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-linear-to-br from-blue-50 via-white to-sky-50">
        {/* Background Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-50 rounded-full blur-2xl opacity-50" />
          {/* Floating snowflakes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-200"
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <Snowflake size={20 + i * 4} />
            </motion.div>
          ))}
        </div>

        <div className="relative section-container py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 bg-blue-100 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium">
                  <Snowflake size={16} />
                  Sales & Services
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Mechanical Wings{" "}
                <span className="gradient-text">Air Condition</span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 max-w-lg leading-relaxed tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Your trusted partner for professional air conditioning
                installation, maintenance, and repair services. Keeping
                Ahmedabad cool with premium quality service.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="btn-animate inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 shadow-lg pulse-glow"
                >
                  <Phone size={18} />
                  Get Free Quote
                </Link>
                <Link
                  href="/services"
                  className="btn-animate inline-flex items-center gap-2 bg-white text-[#1e3a5f] px-8 py-4 rounded-full font-semibold border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                >
                  Our Services
                  <ChevronRight size={18} />
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                className="flex items-center gap-6 pt-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">5.0 Rating</span>
                </div>
                <div className="w-px h-6 bg-gray-300" />
                <span className="text-sm text-gray-500">
                  GST Registered Business
                </span>
              </motion.div>

              {/* Social Media Icons */}
              <motion.div
                className="flex items-center gap-4 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="text-sm text-gray-500">Follow Us:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/mechanicalwings3008?igsh=MTRiZ2lmN2k0cTNjNQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-linear-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/share/1DK4CpscMY/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-[#1877F2] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/mechanical-wings-air-condition-252693202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com/mechanicalwings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-black rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Company Logo */}
            <motion.div
              className="relative hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="relative z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/logo-transparent.png"
                    alt="Mechanical Wings Air Condition"
                    width={500}
                    height={310}
                    className="drop-shadow-2xl"
                    style={{ width: "auto", height: "auto" }}
                    priority
                  />  
                </motion.div>

                {/* Decorative glow behind logo */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-200/30 to-amber-200/20 rounded-full blur-3xl -z-10 scale-75" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold gradient-text"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.15,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-500 mt-6 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-linear-to-b from-white to-blue-50/50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium mb-6">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
              From installation to maintenance, we provide comprehensive air
              conditioning solutions tailored to your needs.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 h-full group text-center"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors mx-auto">
                    <service.icon
                      size={28}
                      className="text-[#1e3a5f] group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-5">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed tracking-wide">
                    {service.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group"
            >
              View All Services
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="text-center flex flex-col items-center">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium mb-6">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Trusted AC Experts in{" "}
                <span className="gradient-text">Ahmedabad</span>
              </h2>
              </div>
              <p className="text-gray-500 mb-8 leading-relaxed text-center">
                With years of experience and a team of certified technicians, we
                deliver top-quality air conditioning services. Our commitment to
                excellence and customer satisfaction sets us apart.
              </p>

              <div className="space-y-4 max-w-md mx-auto">
                {[
                  "Factory-trained certified technicians",
                  "Genuine spare parts with warranty",
                  "24/7 emergency support available",
                  "Competitive and transparent pricing",
                  "All major brands serviced",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-4 justify-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2
                      size={20}
                      className="text-amber-500 shrink-0"
                    />
                    <span className="text-gray-600">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Learn More About Us
                  <ChevronRight size={18} />
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={feature.title}
                  delay={index * 0.15}
                  direction="right"
                >
                  <motion.div
                    className="bg-linear-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-100 h-full text-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon
                      size={32}
                      className="text-[#1e3a5f] mb-4 mx-auto"
                    />
                    <h3 className="font-semibold text-gray-800 mb-5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed tracking-wide">{feature.desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-16 bg-linear-to-b from-blue-50/50 to-white overflow-hidden">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Brands We <span className="gradient-text">Service</span>
            </h2>
            <p className="text-gray-500 mt-6">
              Authorized service partner for major AC brands
            </p>
          </AnimatedSection>

          {/* Scrolling Brands */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10" />
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1200] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="shrink-0 bg-white rounded-xl px-8 py-4 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-gray-700 font-semibold whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group"
            >
              View All Brands
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

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
              Need AC Installation or Repair?
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our expert team
              is ready to provide you with the best AC solutions.
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
  )}