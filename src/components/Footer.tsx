"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/brands", label: "Brands" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Split AC Installation",
  "Window AC Service",
  "Cassette AC Repair",
  "Chiller Maintenance",
  "VRF Systems",
  "Ductable Package",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Wave Separator */}
      <div className="absolute -top-1 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-12 fill-[#f8fafc]"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/WhatsApp Image 2026-02-27 at 3.04.03 PM.jpeg"
                alt="Mechanical Wings Air Condition"
                width={48}
                height={48}
                className="rounded-xl"
                style={{ width: "48px", height: "auto" }}
              />
              <div>
                <h3 className="text-white font-bold text-lg">
                  Mechanical Wings
                </h3>
                <p className="text-amber-400 text-xs font-medium tracking-wider uppercase">
                  Air Condition
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner for air conditioning solutions. We provide
              expert installation, maintenance, and repair services for all types
              of AC systems across Ahmedabad.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { name: "facebook", url: "https://facebook.com/share/1DK4CpscMY/?mibextid=wwXIfr" },
                { name: "instagram", url: "https://www.instagram.com/mechanicalwings3008?igsh=MTRiZ2lmN2k0cTNjNQ==" },
                { name: "linkedin", url: "https://linkedin.com/in/mechanical-wings-air-condition-252693202" },
                { name: "twitter", url: "https://twitter.com/MechanicalWings" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 hover:bg-[#1e3a5f] rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-500 -mb-2" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-125 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-500 -mb-2" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-125 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-amber-500 -mb-2" />
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <p className="text-sm">Ahmedabad, Gujarat, India</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div className="text-sm space-y-1">
                  <a
                    href="tel:+917801929198"
                    className="block hover:text-amber-400 transition-colors"
                  >
                    +91 7801929198
                  </a>
                  <a
                    href="tel:+919409152153"
                    className="block hover:text-amber-400 transition-colors"
                  >
                    +91 9409152153
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:mechanicalwings3008@gmail.com"
                  className="text-sm hover:text-amber-400 transition-colors break-all"
                >
                  mechanicalwings3008@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <p className="text-sm">
                  Mon - Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500" suppressHydrationWarning>
              © {new Date().getFullYear()} Mechanical Wings Air Condition. All
              rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              GST TIN: 24AWQPV5705K1ZW
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#1e3a5f] text-white rounded-full shadow-lg hover:bg-[#152a45] transition-colors flex items-center justify-center z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "facebook":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      );
    case "skype":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.949c-2.886-.765-3.417-2.42-3.417-3.979 0-3.227 3.036-4.43 5.901-4.43 2.63 0 5.394 1.453 5.394 3.006 0 .765-.73 1.237-1.563 1.237-1.473 0-1.203-2.035-4.023-2.035-1.422 0-2.22.637-2.22 1.608 0 .944 1.142 1.25 2.127 1.489l2.658.619c2.886.673 3.881 2.442 3.881 4.168 0 2.618-2.013 4.789-6.358 4.789zM23.704 14.652c.228-.973.345-1.988.345-3.033 0-1.198-.165-2.357-.469-3.46a7.46 7.46 0 001.091-3.883 7.435 7.435 0 00-7.424-7.424 7.46 7.46 0 00-3.883 1.091A12.053 12.053 0 009.903.474C4.534.474.082 4.926.082 10.294c0 1.045.117 2.06.345 3.033a7.46 7.46 0 00-1.091 3.883 7.435 7.435 0 007.424 7.424 7.46 7.46 0 003.883-1.091c1.102.314 2.261.479 3.46.479 5.368-.002 9.82-4.454 9.82-9.822a12.04 12.04 0 00-.219-2.548z" />
        </svg>
      );
    default:
      return null;
  }
}
