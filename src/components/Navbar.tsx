import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = ["Home", "Story", "Gameplay", "Features", "Gallery", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-500 border-b ${
        scrolled
          ? "glass-strong border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-display text-primary text-sm tracking-wider">
        DEEP-6
      </button>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="text-label text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {link}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-label text-muted-foreground">SIGNAL ACTIVE</span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
