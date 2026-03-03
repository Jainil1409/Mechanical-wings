"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, ArrowRight } from "lucide-react";

const socialPlatforms = [
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/mechanicalwings3008?igsh=MTRiZ2lmN2k0cTNjNQ==",
    handle: "@mechanicalwings3008",
    tagline: "Daily tips & project showcases",
    bgColor: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
  },
  {
    name: "Facebook",
    icon: "facebook",
    url: "https://facebook.com/share/1DK4CpscMY/?mibextid=wwXIfr",
    handle: "Mechanical Wings AC",
    tagline: "Updates, reviews & promotions",
    bgColor: "bg-[#1877F2]",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com/in/mechanical-wings-air-condition-252693202",
    handle: "Mechanical Wings Air Condition",
    tagline: "Professional network & partnerships",
    bgColor: "bg-[#0A66C2]",
  },
  {
    name: "Twitter / X",
    icon: "twitter",
    url: "https://www.twitter.com/mechanicalwings",
    handle: "@mechanicalwings",
    tagline: "Quick updates & support",
    bgColor: "bg-black",
  },
];

export default function SocialPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-linear-to-br from-[#1e3a5f] to-[#152a45] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 right-20 w-60 h-60 border border-white rounded-full" />
        </div>
        <div className="relative section-container text-center">
          <motion.p
            className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Connect With Us
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Follow Us
          </motion.h1>
          <motion.p
            className="text-blue-200 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Stay connected for exclusive offers, maintenance tips, and updates
          </motion.p>
        </div>
      </section>

      {/* Social Media Grid */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPlatforms.map((platform, index) => (
              <AnimatedSection key={platform.name} delay={index * 0.1}>
                <motion.a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group h-full"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    {/* Icon Section */}
                    <div className={`${platform.bgColor} p-8 flex items-center justify-center h-32`}>
                      <div className="w-16 h-16 text-white">
                        <SocialIcon name={platform.icon} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-[#1e3a5f] font-medium mb-2 h-10 line-clamp-2">
                        {platform.handle}
                      </p>
                      <p className="text-gray-500 text-sm mb-4 flex-1">
                        {platform.tagline}
                      </p>
                      <div className="flex items-center text-amber-600 font-semibold text-sm group-hover:text-amber-700 mt-auto">
                        Follow
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Follow Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why <span className="gradient-text">Follow Us</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get exclusive content and stay ahead with expert HVAC knowledge
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Exclusive Offers",
                desc: "Be the first to know about discounts, seasonal offers, and special promotions.",
                icon: "🎁",
              },
              {
                title: "Expert Tips",
                desc: "AC maintenance advice, energy-saving hacks, and troubleshooting guides.",
                icon: "💡",
              },
              {
                title: "Project Updates",
                desc: "See our latest installations, success stories, and behind-the-scenes content.",
                icon: "📸",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-linear-to-r from-[#1e3a5f] to-[#2d5a8e]">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h2>
              <p className="text-blue-200">Our team is ready to help you with your AC needs</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-animate px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-colors text-center"
              >
                Talk to Us
              </Link>
              <a
                href="tel:+917801929198"
                className="btn-animate px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SocialIcon({ name }: { name: string }) {
  const iconClass = "w-full h-full";
  
  switch (name) {
    case "instagram":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}
