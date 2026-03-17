import { motion } from "framer-motion";
import { Brain, Headphones, Cpu, BookOpen } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "PSYCHOLOGICAL HORROR",
    desc: "Reality fractures at depth. Trust nothing—not your instruments, not your memories, not the voice on the radio.",
  },
  {
    icon: Headphones,
    title: "IMMERSIVE AUDIO",
    desc: "Binaural 3D soundscape. Every creak of metal, every distant groan of the hull tells you something is wrong.",
  },
  {
    icon: Cpu,
    title: "AI-DRIVEN THREAT",
    desc: "An adaptive intelligence that learns your patterns. It doesn't chase. It waits where you're going.",
  },
  {
    icon: BookOpen,
    title: "NARRATIVE EXPLORATION",
    desc: "Piece together what happened from corrupted logs, dying terminals, and the whispers of those who didn't escape.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-label text-muted-foreground">// SYSTEM DIAGNOSTICS</span>
          <h2 className="text-display text-4xl md:text-5xl text-foreground mt-4">
            CORE <span className="text-primary glow-text">SYSTEMS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, borderColor: "hsl(180 60% 50% / 0.4)" }}
              className="glass p-8 aspect-[3/4] flex flex-col justify-between group cursor-default"
            >
              <div>
                <f.icon className="w-6 h-6 text-primary mb-6 stroke-[1px] group-hover:drop-shadow-[0_0_10px_hsl(180_60%_50%/0.5)] transition-all" />
                <h3 className="text-display text-sm text-foreground mb-3">{f.title}</h3>
                <p className="text-mono text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
              <div className="text-label text-muted-foreground/40 mt-4">
                NODE_{String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
