"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const cities = [
  "Johannesburg",
  "Cape Town",
  "Durban",
  "Pretoria",
  "Port Elizabeth",
  "Bloemfontein",
  "East London",
  "Nelspruit",
  "Polokwane",
];

export default function HeroSection() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic vehicle carrier hero image */}
      <Image
        src="/images/hero-car-carrier.jpg"
        alt="Car carrier transporting vehicles on a South African highway at sunset"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />

      {/* Layered overlays keep the copy legible while preserving the photography */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black" />

      {/* Animated Road Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-2 overflow-hidden">
        <div className="flex gap-16 animate-truck">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-24 h-1 bg-orange-500/60 rounded-full flex-shrink-0" />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="text-center lg:text-left lg:max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            South Africa&apos;s #1 Car Transport Company
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "2px" }}
          >
            <span className="block text-white">YOUR CAR.</span>
            <span className="block text-gradient">DELIVERED SAFE.</span>
            <span className="block text-white">DELIVERED FAST.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Wise Move Transport connects all major cities across South Africa.
            Whether it&apos;s open or enclosed transport — your vehicle arrives{" "}
            <span className="text-orange-400 font-semibold">on time, every time.</span>
          </motion.p>

          {/* Quick Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="glass-card rounded-2xl p-6 max-w-3xl mx-auto lg:mx-0 mb-10 shadow-2xl shadow-black/30"
          >
            <p className="text-sm text-orange-400 font-semibold uppercase tracking-widest mb-4">
              Get an Instant Quote
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-900">From City</option>
                {cities.map((c) => (
                  <option key={c} value={c} className="bg-gray-900">
                    {c}
                  </option>
                ))}
              </select>
              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-900">To City</option>
                {cities.filter((c) => c !== fromCity).map((c) => (
                  <option key={c} value={c} className="bg-gray-900">
                    {c}
                  </option>
                ))}
              </select>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer orange-glow"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Calculate Route
              </motion.a>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12"
          >
            {[
              { value: "15,000+", label: "Cars Transported" },
              { value: "9", label: "Major Cities" },
              { value: "100%", label: "Insured" },
              { value: "24/7", label: "Live Tracking" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-gradient">{stat.value}</div>
                <div className="text-xs text-gray-400 font-medium tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-orange-500/40 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-orange-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
