"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 8, 0)", "rgba(5, 5, 8, 0.95)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0.05, 0.2]
  );

  const navLinks = [
    { id: "home", label: "Home", href: "#" },
    { id: "insights", label: "Insights", href: "#insights" },
    { id: "dashboard", label: "Dashboard", href: "#dashboard" },
    { id: "features", label: "Features", href: "#features" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 shadow-lg"
    >
      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-primary/50 to-transparent"
        style={{ opacity: borderOpacity }}
      />
      
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer relative group"
          >
            <span className="text-gradient relative z-10">Xai</span>
            <motion.span
              className="absolute -inset-2 bg-linear-to-r from-brand-primary/20 to-brand-secondary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-lg"
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`relative z-10 ${
                  activeLink === link.id 
                    ? "text-brand-primary" 
                    : "text-text-secondary hover:text-text-primary"
                }`}>
                  {link.label}
                </span>
                {activeLink === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-brand-primary/10 rounded-lg border border-brand-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {activeLink !== link.id && (
                  <motion.span
                    className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity"
                  />
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Button variant="primary" size="sm" className="relative overflow-hidden group">
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative cursor-pointer z-10">Get Started</span>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors relative"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.id);
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block px-4 py-3 rounded-lg transition-all ${
                      activeLink === link.id
                        ? "bg-brand-primary/10 text-brand-primary border border-brand-primary/20"
                        : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <Button variant="primary" size="sm" className="w-full">
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}