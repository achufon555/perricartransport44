"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 15000, suffix: "+", label: "Vehicles Transported", icon: "🚗" },
  { value: 9, suffix: "", label: "Cities Covered", icon: "🗺️" },
  { value: 98, suffix: "%", label: "On-Time Delivery Rate", icon: "⏱️" },
  { value: 12, suffix: "+", label: "Years Experience", icon: "🏆" },
  { value: 500, suffix: "+", label: "Happy Clients Monthly", icon: "😊" },
  { value: 100, suffix: "%", label: "Fully Insured", icon: "🛡️" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated BG */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700" />
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${i * 13}%`,
              top: `${i % 2 === 0 ? -30 : 30}%`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Numbers That Speak For Themselves
          </h2>
          <p className="text-orange-100/80 text-lg">
            Trusted by thousands of South Africans every year
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-black text-white">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    delay={index * 0.1}
                    separator=","
                  />
                )}
                {stat.suffix}
              </div>
              <div className="text-orange-100/80 text-xs font-medium mt-1 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
