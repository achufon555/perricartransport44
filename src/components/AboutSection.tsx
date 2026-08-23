"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const highlights = [
  { icon: "🛡️", title: "Fully Insured", desc: "Every vehicle is covered end-to-end with comprehensive transit insurance." },
  { icon: "📍", title: "GPS Tracked", desc: "Real-time tracking so you always know where your car is." },
  { icon: "👨‍🔧", title: "Expert Drivers", desc: "All our drivers are vetted, trained, and professionally licensed." },
  { icon: "💬", title: "24/7 Support", desc: "Our customer care team is always available via phone, WhatsApp, or email." },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(249,115,22,0.07)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/transport-team.jpg"
                alt="SwiftMove vehicle transport team beside a loaded car carrier"
                width={600}
                height={450}
                unoptimized
                className="w-full h-80 sm:h-96 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-4 shadow-2xl orange-glow text-center min-w-[120px]"
            >
              <div className="text-3xl font-black text-white">12+</div>
              <div className="text-xs text-orange-100 font-semibold">Years of Excellence</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -top-4 -left-4 glass-card rounded-2xl p-4 shadow-2xl text-center min-w-[120px]"
            >
              <div className="text-2xl font-black text-gradient">15K+</div>
              <div className="text-xs text-gray-400 font-semibold">Cars Delivered</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              About SwiftMove
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
              South Africa&apos;s Most{" "}
              <span className="text-gradient">Trusted</span> Vehicle
              Transport Company
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-5">
              Founded in 2012, SwiftMove Auto Transport has grown to become the leading car
              transport company in South Africa. We started with a single truck and a commitment
              to reliability — today, we operate a fleet of 50+ carriers covering every corner
              of the country.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Our mission is simple: to move your vehicle from A to B with zero stress, maximum
              safety, and complete transparency. Whether you&apos;re relocating, buying a vehicle
              online, or moving a corporate fleet — we&apos;ve got you covered.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-500/5 transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold px-6 py-3 rounded-full transition-all text-sm orange-glow"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:+27617261895"
                className="border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 font-bold px-6 py-3 rounded-full transition-all text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +27 61 726 1895
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
