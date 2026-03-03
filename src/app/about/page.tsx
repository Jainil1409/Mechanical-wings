"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Shield,
  Clock,
  Award,
  Target,
  Heart,
  CheckCircle2,
  Phone,
  Building2,
  Wrench,
  Snowflake,
} from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "We never compromise on quality. From parts to service, everything meets the highest standards.",
  },
  {
    icon: Clock,
    title: "Timely Service",
    desc: "We value your time. Our team ensures prompt response and efficient service delivery.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    desc: "Your satisfaction is our priority. We go the extra mile to exceed expectations.",
  },
  {
    icon: Target,
    title: "Precision Work",
    desc: "Every installation and repair is done with meticulous attention to detail.",
  },
];

const milestones = [
  { year: "2014", title: "Company Founded", desc: "Started operations in Ahmedabad" },
  { year: "2016", title: "500+ Installations", desc: "Milestone of residential & commercial projects" },
  { year: "2019", title: "Multi-Brand Partner", desc: "Authorized dealer for 10+ brands" },
  { year: "2024", title: "Industry Leader", desc: "Recognized as trusted HVAC experts" },
];

const teamStats = [
  { number: "15+", label: "Expert Technicians" },
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Happy Clients" },
  { number: "13+", label: "Brand Partners" },
];

export default function AboutPage() {
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
            About Us
          </motion.h1>
          <motion.p
            className="text-blue-200 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your trusted partner for comprehensive air conditioning solutions in Ahmedabad
          </motion.p>
        </div>
      </section>

      {/* Owner Profile & Company Story */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium mb-6">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Meet <span className="gradient-text">Rushi Vyas</span>
              </h2>
              <p className="text-amber-600 font-semibold mb-6">Mechanical Engineer & Founder</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 10 years of expertise in HVAC systems, Rushi Vyas founded Mechanical Wings 
                Air Condition with a vision to deliver exceptional air conditioning solutions to 
                Ahmedabad. His engineering background and passion for excellence drive the company&apos;s 
                commitment to quality service and customer satisfaction.
              </p>

              <div className="bg-linear-to-br from-blue-50 to-sky-50 rounded-2xl p-6 mb-8 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Wrench size={20} className="text-amber-500" />
                  Services & Expertise
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                    <span>Project Execution for large-scale HVAC installations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                    <span>Chiller Systems installation & maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                    <span>VRF/VRV systems for residential & commercial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                    <span>Ductable & Package AC systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                    <span>Window & Split AC installation & repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                    <span>Cold Room Solutions & Ventilation Systems</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Direct Phone</p>
                    <p className="font-semibold text-gray-900">+91 7801929198 | +91 9409152153</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-semibold text-gray-900">mechanicalwings3008@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <Building2 size={18} className="text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="bg-linear-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-3xl p-8 lg:p-12 text-white mb-8">
                  <Award size={40} className="text-amber-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
                  <ul className="space-y-3 text-blue-200">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-400 mt-0.5 shrink-0" />
                      <span>Factory-trained technicians with certification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-400 mt-0.5 shrink-0" />
                      <span>Genuine spare parts guaranteed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-400 mt-0.5 shrink-0" />
                      <span>13+ authorized brand partnerships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-400 mt-0.5 shrink-0" />
                      <span>GST registered professional business</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-linear-to-br from-blue-50 to-sky-50 rounded-3xl p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    {teamStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center bg-white rounded-2xl p-6 shadow-sm border border-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                          {stat.number}
                        </div>
                        <div className="text-gray-500 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-linear-to-b from-blue-50/50 to-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
              The principles that guide every service we provide
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 h-full text-center group"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:bg-blue-100 transition-colors">
                    <value.icon size={26} className="text-[#1e3a5f]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Key <span className="gradient-text">Milestones</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 0.15}>
                <div className="text-center relative">
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-blue-200" />
                  )}
                  <motion.div
                    className="w-16 h-16 bg-linear-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <span className="text-amber-400 font-bold text-sm">
                      {milestone.year}
                    </span>
                  </motion.div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{milestone.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-linear-to-b from-white to-blue-50/50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="bg-linear-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl" />
                
                <div className="relative">
                  <Snowflake size={48} className="text-amber-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Why We&apos;re Different</h3>
                  <p className="text-blue-200 mb-8 leading-relaxed">
                    We don&apos;t just fix air conditioners — we build lasting relationships 
                    with our clients through trust, transparency, and exceptional service.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Transparent pricing with no hidden costs",
                      "Genuine parts with manufacturer warranty",
                      "24/7 emergency support availability",
                      "Skilled factory-trained technicians",
                      "Post-service support & follow-up",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                        <span className="text-blue-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Complete HVAC Solutions Under{" "}
                <span className="gradient-text">One Roof</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need a new AC installation, regular maintenance, emergency 
                repairs, or a complete HVAC overhaul, our team has the expertise and 
                resources to deliver excellence every time.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: "Residential Projects" },
                  { icon: Building2, label: "Commercial Solutions" },
                  { icon: Wrench, label: "Repair & Service" },
                  { icon: Award, label: "AMC Plans" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <item.icon size={20} className="text-[#1e3a5f]" />
                    </div>
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Let us help you with your air conditioning needs. Get in touch
              for a free consultation and quote.
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
