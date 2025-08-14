'use client';

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Learn", href: "/learn" },
    { label: "Live Trading", href: "/live" },
    { label: "Prop Firms Trading", href: "/prop" },
    { label: "About", href: "/about/mystory" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          Trading Made Easy
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="relative nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger für Mobile */}
        <button
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col px-6 py-4 space-y-2 font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block nav-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
