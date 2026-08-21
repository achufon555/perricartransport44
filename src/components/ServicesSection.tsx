"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <rect x="4" y="20" width="44" height="20" rx="3" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="2"/>
        <rect x="8" y="14" width="20" height="10" rx="2" fill="#f97316" opacity="0.4" stroke="#f97316" strokeWidth="1.5"/>
        <circle cx="14" cy="42" r="5" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
        <circle cx="36" cy="42" r="5" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
        <path d="M48 28h8l6 12H48V28z" fill="#f97316" opacity="0.3" stroke="#f97316" strokeWidth="1.5"/>
        <circle cx="54" cy="42" r="5" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Open Car Transport",
    description:
      "Cost-effective and reliable transport on our open carriers. Perfect for standard vehicles across South Africa's major routes.",
    features: ["Most affordable option", "Multi-vehicle capacity", "All major routes", "GPS tracked"],
    price: "From R2,500",
    image: "/images/service-open.svg",
    popular: false,
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <rect x="4" y="16" width="48" height="26" rx="4" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="2"/>
        <path d="M4 20h48" stroke="#f97316" strokeWidth="1.5" opacity="0.6"/>
        <path d="M4 38h48" stroke="#f97316" strokeWidth="1.5" opacity="0.6"/>
        <rect x="8" y="24" width="12" height="10" rx="2" fill="#f97316" opacity="0.5"/>
        <rect x="26" y="24" width="12" height="10" rx="2" fill="#f97316" opacity="0.5"/>
        <circle cx="14" cy="44" r="5" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
        <circle cx="44" cy="44" r="5" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Enclosed Transport",
    description:
      "Premium protection for luxury, classic or high-value vehicles. Fully enclosed trailers shield your car from the elements.",
    features: ["Full weather protection", "Luxury & exotic cars", "Extra insurance cover", "White-glove service"],
    price: "From R4,800",
    image: "/images/service-enclosed.svg",
    popular: true,
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <path d="M32 8L52 20v24L32 56 12 44V20L32 8z" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="2"/>
        <path d="M32 8v48" stroke="#f97316" strokeWidth="1.5" opacity="0.5"/>
        <path d="M12 20l40 24" stroke="#f97316" strokeWidth="1.5" opacity="0.5"/>
        <path d="M52 20L12 44" stroke="#f97316" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="32" cy="32" r="6" fill="#f97316" opacity="0.7"/>
      </svg>
    ),
    title: "Door-to-Door Delivery",
    description:
      "We collect from your door and deliver directly to your destination — no depot drop-offs required. Maximum convenience.",
    features: ["Home collection", "Direct delivery", "No depot needed", "Flexible scheduling"],
    price: "From R3,200",
    image: "/images/hero-bg.svg",
    popular: false,
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <rect x="8" y="12" width="48" height="32" rx="4" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="2"/>
        <path d="M20 28h24" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 22h16" stroke="#f97316" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        <path d="M20 34h10" stroke="#f97316" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        <path d="M16 44l-4 8h40l-4-8" fill="#f97316" opacity="0.3" stroke="#f97316" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Corporate Fleet Transport",
    description:
      "Scalable solutions for businesses relocating fleets, dealerships shipping stock, or auction houses moving vehicles in bulk.",
    features: ["Fleet relocation", "Dealer stock transport", "Auction movement", "Volume discounts"],
    price: "Custom Pricing",
    image: "/images/map-sa.svg",
    popular: false,
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.07)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">
            Transport Solutions for{" "}
            <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From single vehicles to entire fleets — SwiftMove has a tailored transport
            solution that fits your timeline and budget.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden card-hover group cursor-pointer ${
                service.popular
                  ? "ring-2 ring-orange-500"
                  : "ring-1 ring-white/10"
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⭐ Most Popular
                </div>
              )}

              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-black/80" />

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
                    {service.icon}
                  </div>
                  <span className="text-orange-400 font-bold text-sm">{service.price}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-4 h-4 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm group-hover:text-orange-300 transition-colors"
                >
                  Book This Service
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
