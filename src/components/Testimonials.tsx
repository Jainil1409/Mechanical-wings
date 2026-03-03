/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner",
    rating: 5,
    text: "Exceptional service! The team installed my split AC perfectly. They were professional, punctual, and provided excellent after-sales support. Highly recommended!",
    initials: "RK",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Office Manager",
    rating: 5,
    text: "We contracted Mechanical Wings for our office AC maintenance. Their expertise with VRF systems is outstanding. Zero downtime, very reliable service.",
    initials: "PS",
  },
  {
    id: 3,
    name: "Vikram Patel",
    role: "Shop Owner",
    rating: 5,
    text: "Quick response for emergency repair. Their technicians diagnosed the issue correctly and fixed it on the same day. Professional and affordable!",
    initials: "VP",
  },
  {
    id: 4,
    name: "Neha Desai",
    role: "Restaurant Manager",
    rating: 5,
    text: "Installed a cassette AC system in my restaurant. The installation quality is immaculate and the cooling performance is excellent. Great team!",
    initials: "ND",
  },
  {
    id: 5,
    name: "Arun Gupta",
    role: "Factory Owner",
    rating: 5,
    text: "Our industrial chiller system maintenance has been handled expertly by Mechanical Wings. They understand complex systems really well.",
    initials: "AG",
  },
  {
    id: 6,
    name: "Meera Joshi",
    role: "Homeowner",
    rating: 5,
    text: "Best AC service in Ahmedabad! They use genuine parts, provide warranty, and their customer service is outstanding. Will definitely use them again.",
    initials: "MJ",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-blue-50/50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            What Our Customers Say
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Customer <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Real reviews from satisfied customers who trust Mechanical Wings for
            their air conditioning needs.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col group"
                whileHover={{ y: -4 }}
              >
                {/* Ratings */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonial Stats */}
        <AnimatedSection className="mt-16">
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <motion.div
              className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center border border-amber-100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold gradient-text">4.9/5</div>
              <div className="flex gap-1 justify-center mt-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </motion.div>

            <motion.div
              className="bg-linear-to-br from-blue-50 to-sky-50 rounded-xl p-6 text-center border border-blue-100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold gradient-text">500+</div>
              <p className="text-sm text-gray-600 mt-2">Happy Customers</p>
            </motion.div>

            <motion.div
              className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center border border-green-100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold gradient-text">100%</div>
              <p className="text-sm text-gray-600 mt-2">Recommendation Rate</p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
