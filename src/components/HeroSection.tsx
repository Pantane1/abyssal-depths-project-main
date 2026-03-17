import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const glitchVariants = {
  animate: {
    x: [0, -2, 2, -1, 0],
    opacity: [0.9, 1, 0.7, 1, 0.9],
    transition: { repeat: Infinity, duration: 0.3, repeatDelay: 5 },
  },
};

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 vignette-overlay" />
        <div className="absolute inset-0 scanline-overlay opacity-30 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-left px-6 md:px-12 max-w-5xl w-full">
        {/* Technical metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-label text-muted-foreground mb-8"
        >
          DEPTH: 6,102M &nbsp;|&nbsp; OXYGEN: 14% &nbsp;|&nbsp; INTEGRITY: FAILING
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={glitchVariants}
          animate="animate"
          className="text-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] text-foreground mb-6"
          style={{ mixBlendMode: "normal" }}
        >
          DEEP<span className="text-primary glow-text">-6</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-mono text-secondary-foreground text-sm md:text-base max-w-lg mb-10"
          style={{ textWrap: "balance" }}
        >
          The water isn't what's killing you.
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(180 60% 50% / 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="glass px-8 py-3 text-label text-primary border border-primary/30 hover:border-primary/60 transition-all duration-300"
        >
          ENTER THE FACILITY
        </motion.button>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-6 md:left-12 text-label text-muted-foreground"
        >
          LAT 36.1699° N &nbsp;|&nbsp; LONG 115.1398° W &nbsp;|&nbsp; STATION THETA-7
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
