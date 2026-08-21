"use client";

import { motion } from "framer-motion";

const links = {
  Services: [
    { label: "Open Car Transport", href: "#services" },
    { label: "Enclosed Transport", href: "#services" },
    { label: "Door-to-Door Delivery", href: "#services" },
    { label: "Corporate Fleet", href: "#services" },
  ],
  "Popular Routes": [
    { label: "JHB → Cape Town", href: "#coverage" },
    { label: "JHB → Durban", href: "#coverage" },
    { label: "Cape Town → PE", href: "#coverage" },
    { label: "Durban → PE", href: "#coverage" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(249,115,22,0.05)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/>
                  <circle cx="7.5" cy="14.5" r="1.5"/>
                  <circle cx="16.5" cy="14.5" r="1.5"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-black text-white">
                  Swift<span className="text-gradient">Move</span>
                </span>
                <div className="text-[10px] text-orange-400 font-semibold tracking-widest uppercase -mt-1">
                  Auto Transport
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              South Africa&apos;s most trusted car transport company since 2012. We deliver
              your vehicle safely across all 9 provinces with full insurance coverage
              and real-time GPS tracking.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { label: "Facebook", icon: "f", color: "#1877f2" },
                { label: "Instagram", icon: "📷", color: "#e4405f" },
                { label: "WhatsApp", icon: "W", color: "#25d366" },
                { label: "YouTube", icon: "▶", color: "#ff0000" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white hover:border-orange-500/40 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-orange-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 text-xs">
            © {new Date().getFullYear()} SwiftMove Auto Transport (Pty) Ltd. All rights reserved. | Reg: 2012/123456/07
          </div>
          <div className="flex gap-5 text-xs text-gray-600">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Powered by */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 text-xs text-gray-700">
            <div className="flex gap-1">
              <span className="text-green-600">🇿🇦</span>
            </div>
            Proudly South African — Moving the Nation Forward
          </div>
        </div>
      </div>
    </footer>
  );
}
