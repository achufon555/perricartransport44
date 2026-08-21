"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const testimonials = [
  {
    name: "Sipho Nkosi",
    location: "Johannesburg",
    rating: 5,
    avatar: "SN",
    color: "from-orange-500 to-red-600",
    text: "Absolutely phenomenal service! I moved from Joburg to Cape Town and needed my BMW transported. SwiftMove picked it up on time, kept me updated throughout, and delivered it in perfect condition. Will definitely use again!",
    vehicle: "BMW 3 Series",
    route: "JHB → CPT",
  },
  {
    name: "Nadia van der Merwe",
    location: "Cape Town",
    rating: 5,
    avatar: "NM",
    color: "from-blue-500 to-purple-600",
    text: "I bought a car from a dealer in Durban and was nervous about having it transported. SwiftMove put my mind at ease with constant updates and GPS tracking. The car arrived spotless. Highly recommend!",
    vehicle: "Toyota Fortuner",
    route: "DBN → CPT",
  },
  {
    name: "Themba Dlamini",
    location: "Durban",
    rating: 5,
    avatar: "TD",
    color: "from-green-500 to-teal-600",
    text: "As a car dealer, I regularly need to move vehicles between cities. SwiftMove has been my go-to for 3 years. Great pricing for bulk transport and they always deliver on time. 10/10 service.",
    vehicle: "Fleet of 6 Vehicles",
    route: "DBN → JHB",
  },
  {
    name: "Priya Pillay",
    location: "Pretoria",
    rating: 5,
    avatar: "PP",
    color: "from-pink-500 to-rose-600",
    text: "My vintage car was transported in an enclosed trailer with the utmost care. The team was professional, the communication was great, and the delivery was on schedule. SwiftMove is the best in the business!",
    vehicle: "Classic Mercedes-Benz",
    route: "PTA → CPT",
  },
  {
    name: "Lethabo Molefe",
    location: "Bloemfontein",
    rating: 5,
    avatar: "LM",
    color: "from-yellow-500 to-orange-500",
    text: "I had to relocate urgently and needed my car moved within 2 days. SwiftMove made it happen! Super responsive team, fair pricing, and the driver was courteous and professional. Excellent!",
    vehicle: "VW Polo",
    route: "JHB → BFN",
  },
  {
    name: "André Botha",
    location: "Port Elizabeth",
    rating: 5,
    avatar: "AB",
    color: "from-cyan-500 to-blue-600",
    text: "Used SwiftMove to transport my Audi from PE to Joburg. Seamless from start to finish. The online tracking system is brilliant — I watched my car's journey the whole way. 5 stars without question!",
    vehicle: "Audi A4",
    route: "PE → JHB",
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_right,_rgba(249,115,22,0.07)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">
            What Our Clients{" "}
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what real customers across South Africa say about SwiftMove.
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-white font-bold">4.9/5</span>
            <span className="text-gray-500 text-sm ml-1">(1,200+ reviews)</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActive(index)}
              className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-orange-500/40 ${
                active === index ? "ring-1 ring-orange-500 bg-orange-500/5" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-orange-400 font-semibold">{t.route}</div>
                  <div className="text-xs text-gray-600">{t.vehicle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-12 flex-wrap"
        >
          {[
            { label: "Google Reviews", rating: "4.9★", count: "800+" },
            { label: "Hellopeter", rating: "4.8★", count: "300+" },
            { label: "Facebook", rating: "4.9★", count: "100+" },
          ].map((platform) => (
            <div
              key={platform.label}
              className="flex items-center gap-3 glass-card rounded-full px-5 py-2.5"
            >
              <div className="text-yellow-400 font-bold text-sm">{platform.rating}</div>
              <div className="w-px h-4 bg-white/10" />
              <div>
                <div className="text-xs text-white font-semibold">{platform.label}</div>
                <div className="text-xs text-gray-500">{platform.count} reviews</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
