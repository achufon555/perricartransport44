"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const reasons = [
  {
    icon: "🔒",
    title: "Fully Insured Transport",
    desc: "Every vehicle is covered under our comprehensive insurance policy for the full duration of transit. You're protected from collection to delivery.",
  },
  {
    icon: "📡",
    title: "Real-Time GPS Tracking",
    desc: "Track your vehicle's location 24/7 through our mobile-friendly portal. Receive automatic SMS and email updates at every checkpoint.",
  },
  {
    icon: "🚗",
    title: "All Vehicle Types Welcome",
    desc: "From hatchbacks to luxury cars, bakkies, motorcycles, and commercial vehicles — we have the right carrier for every vehicle type.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    desc: "We offer competitive, transparent pricing with no hidden fees. If you find a cheaper quote for the same service, we'll beat it.",
  },
  {
    icon: "⚡",
    title: "Express Delivery Available",
    desc: "Need it faster? Ask about our express transport service for urgent vehicle deliveries within 24 hours on major routes.",
  },
  {
    icon: "👨‍💼",
    title: "Professional & Vetted Team",
    desc: "All drivers and handlers are background-checked, trained professionals with years of experience in safe vehicle transport.",
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      {/* Decorative truck silhouette */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
        <svg viewBox="0 0 500 200" className="w-96 h-auto fill-orange-500">
          <path d="M0,150 L300,150 L300,100 L250,100 L220,50 L100,50 L100,100 L0,100 Z M340,150 L480,150 L480,100 L380,100 L380,80 L340,80 Z"/>
          <circle cx="80" cy="160" r="20"/>
          <circle cx="220" cy="160" r="20"/>
          <circle cx="400" cy="160" r="20"/>
          <circle cx="460" cy="160" r="20"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Why Wise Move
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">
            Why South Africa Chooses{" "}
            <span className="text-gradient">Wise Move</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We&apos;re not just a transport company — we&apos;re your vehicle&apos;s guardian from
            pickup to delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-6 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300 card-hover"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>

              <div className="mt-4 w-8 h-0.5 bg-orange-500/40 group-hover:w-16 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6"
        >
          {[
            { label: "Road Transport Quality Association", abbr: "RTQA Certified" },
            { label: "South African Insurance Association", abbr: "SAIA Compliant" },
            { label: "National Road Traffic Act", abbr: "NRTA Licenced" },
            { label: "Better Business Bureau", abbr: "A+ Rated" },
          ].map((badge) => (
            <div
              key={badge.abbr}
              className="flex items-center gap-3 glass-card rounded-xl px-4 py-3"
            >
              <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-orange-400">{badge.abbr}</div>
                <div className="text-xs text-gray-600">{badge.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
