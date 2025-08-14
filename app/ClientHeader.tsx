// app/ClientHeader.tsx
'use client';

import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className="block px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
      onClick={() => setOpenMenu(null)}
    >
      {label}
    </Link>
  );

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300);
  };

  // Animations-Settings für Dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98, pointerEvents: "none" as const },
    visible: { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" as const },
    exit: { opacity: 0, y: -10, scale: 0.98, pointerEvents: "none" as const },
  };

  const renderDropdown = (menuName: string, items: (string | { label: string; href: string })[]) => (
    <AnimatePresence>
      {openMenu === menuName && (
        <motion.ul
          className="absolute flex flex-col bg-gray-800/90 rounded-lg mt-4 shadow-xl py-3 w-56 z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdownVariants}
          transition={{ duration: 0.008, ease: "easeInOut" }}
        >
          {items.map((item, i) => {
            const label = typeof item === "string" ? item : item.label;
            const href = typeof item === "string" ? "#" : item.href;
            return (
              <li key={i} className="dropdown-item" style={{ "--i": i + 1 } as React.CSSProperties}>
                {navItem(href, label)}
              </li>
            );
          })}
        </motion.ul>
      )}
    </AnimatePresence>
  );

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

        {/* Menu */}
        <ul className="flex space-x-8 font-medium">
          <li><Link href="/" className="relative nav-link">Home</Link></li>

          <li className="relative" onMouseEnter={() => handleMouseEnter("learn")} onMouseLeave={handleMouseLeave}>
            <span className="cursor-pointer nav-link">Learn</span>
            {renderDropdown("learn", ["Basic Understandings", "Technical Analysis", "Money Management", "Psychology"])}
          </li>

          <li className="relative" onMouseEnter={() => handleMouseEnter("live")} onMouseLeave={handleMouseLeave}>
            <span className="cursor-pointer nav-link">Live Trading</span>
            {renderDropdown("live", ["Best Brokers", "Platforms", "Demo Trading"])}
          </li>

          <li className="relative" onMouseEnter={() => handleMouseEnter("prop")} onMouseLeave={handleMouseLeave}>
            <span className="cursor-pointer nav-link">Prop Firms Trading</span>
            {renderDropdown("prop", ["Best Firms", "Be Aware", "Risk Management"])}
          </li>
          
          <li className="relative">
            <Link href="/about/mystory" className="cursor-pointer nav-link">
              About
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
