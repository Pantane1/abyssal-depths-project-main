import { motion } from "framer-motion";
import gameplayImg from "@/assets/gameplay-1.jpg";

const mechanics = [
  { label: "EXPLORATION", desc: "Navigate labyrinthine corridors of a facility that seems to shift when you're not looking." },
  { label: "STEALTH", desc: "Sound is your enemy. Every footstep echoes. Every breath betrays your position." },
  { label: "PUZZLE-SOLVING", desc: "Bypass failing systems with degraded interfaces. The answers are there—if you can read the static." },
];

const GameplaySection = () => {
  return (
    <section id="gameplay" className="relative py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image - 60% */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-3 relative"
          >
            <div className="relative overflow-hidden">
              <img src={gameplayImg} alt="Gameplay environment" className="w-full aspect-video object-cover" />
              <div className="absolute inset-0 vignette-overlay" />
              <div className="absolute inset-0 scanline-overlay opacity-20 pointer-events-none" />
            </div>
            <div className="text-label text-muted-foreground/40 mt-3">
              FEED_03 // CONTROL ROOM B — TIMESTAMP CORRUPTED
            </div>
          </motion.div>

          {/* Text - 40% */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-label text-muted-foreground">// OPERATIONAL PROTOCOLS</span>
              <h2 className="text-display text-3xl md:text-4xl text-foreground mt-4 mb-8">
                SURVIVE THE <span className="text-primary glow-text">DEEP</span>
              </h2>

              <div className="space-y-6">
                {mechanics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                    className="border-l border-primary/30 pl-4"
                  >
                    <h3 className="text-display text-xs text-primary mb-1">{m.label}</h3>
                    <p className="text-mono text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;
