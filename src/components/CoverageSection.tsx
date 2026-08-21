"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const routes = [
  { from: "Johannesburg", to: "Cape Town", distance: "1,401 km", time: "2-3 days", popular: true },
  { from: "Johannesburg", to: "Durban", distance: "560 km", time: "1-2 days", popular: true },
  { from: "Cape Town", to: "Port Elizabeth", distance: "766 km", time: "1-2 days", popular: false },
  { from: "Pretoria", to: "Bloemfontein", distance: "460 km", time: "1 day", popular: false },
  { from: "Durban", to: "Port Elizabeth", distance: "700 km", time: "1-2 days", popular: false },
  { from: "Johannesburg", to: "Nelspruit", distance: "360 km", time: "1 day", popular: false },
];

const cities = [
  { name: "Johannesburg", x: 62, y: 42, hub: true },
  { name: "Pretoria", x: 63, y: 37, hub: true },
  { name: "Cape Town", x: 38, y: 88, hub: true },
  { name: "Durban", x: 78, y: 58, hub: true },
  { name: "Port Elizabeth", x: 62, y: 80, hub: false },
  { name: "Bloemfontein", x: 57, y: 62, hub: false },
  { name: "East London", x: 70, y: 76, hub: false },
  { name: "Nelspruit", x: 76, y: 38, hub: false },
  { name: "Polokwane", x: 65, y: 28, hub: false },
];

export default function CoverageSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="coverage" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.06)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Coverage
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">
            We Cover All of{" "}
            <span className="text-gradient">South Africa</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From Polokwane to Cape Town, our network spans every major city and province.
            No destination too far.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden p-8 aspect-square max-w-md mx-auto">
              {/* Map Background */}
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center rounded-3xl"
                style={{ backgroundImage: "url('/images/map-sa.svg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 rounded-3xl" />

              {/* SA Shape SVG */}
              <svg viewBox="0 0 100 100" className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]">
                {/* Route lines */}
                {[
                  { x1: 62, y1: 42, x2: 38, y2: 88 }, // JHB to CPT
                  { x1: 62, y1: 42, x2: 78, y2: 58 }, // JHB to DBN
                  { x1: 62, y1: 42, x2: 63, y2: 37 }, // JHB to PTA
                  { x1: 62, y1: 42, x2: 57, y2: 62 }, // JHB to BFN
                  { x1: 78, y1: 58, x2: 62, y2: 80 }, // DBN to PE
                  { x1: 38, y1: 88, x2: 62, y2: 80 }, // CPT to PE
                  { x1: 63, y1: 37, x2: 76, y2: 38 }, // PTA to Nelspruit
                  { x1: 63, y1: 37, x2: 65, y2: 28 }, // PTA to Polokwane
                ].map((line, i) => (
                  <motion.line
                    key={i}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="#f97316"
                    strokeWidth="0.5"
                    strokeOpacity="0.5"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                  />
                ))}

                {/* City dots */}
                {cities.map((city, i) => (
                  <g key={city.name}>
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r={city.hub ? 2.5 : 1.5}
                      fill={city.hub ? "#f97316" : "#fb923c"}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    />
                    {city.hub && (
                      <motion.circle
                        cx={city.x}
                        cy={city.y}
                        r="4"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="0.5"
                        strokeOpacity="0.4"
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: [1, 1.5, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    )}
                    <motion.text
                      x={city.x + (city.x > 50 ? 3 : -3)}
                      y={city.y + 0.5}
                      fontSize="3.5"
                      fill="white"
                      fillOpacity="0.8"
                      textAnchor={city.x > 50 ? "start" : "end"}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 1 + i * 0.1 }}
                    >
                      {city.name}
                    </motion.text>
                  </g>
                ))}
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <span className="text-gray-400">Hub City</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-300/60" />
                  <span className="text-gray-400">Covered City</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Routes List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Popular Routes
            </h3>
            <div className="space-y-3">
              {routes.map((route, i) => (
                <motion.div
                  key={`${route.from}-${route.to}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all hover:border-orange-500/40 group ${
                    route.popular
                      ? "bg-orange-500/10 border-orange-500/30"
                      : "glass-card"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {route.popular && (
                      <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold flex-shrink-0">
                        HOT
                      </span>
                    )}
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <span>{route.from}</span>
                        <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span>{route.to}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{route.distance}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-orange-400 font-semibold">{route.time}</div>
                    <div className="text-xs text-gray-500">transit</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20"
            >
              <p className="text-sm text-gray-300">
                🚀{" "}
                <span className="text-orange-400 font-semibold">Don&apos;t see your route?</span>{" "}
                We transport to all provinces and remote areas across South Africa.
                Contact us for a custom quote.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
