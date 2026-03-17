import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section id="story" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-label text-muted-foreground">// RECOVERED TRANSMISSION — PARTIAL</span>
        </motion.div>

        <div className="space-y-8">
          {[
            "In 2087, PATHOS-III lost contact with the surface. The last transmission was a single word, repeated: REMEMBER.",
            "Six thousand meters below the Atlantic, the research station sits in perpetual darkness. The crew is gone. The machines are not.",
            "Something is alive down here. Something that wears familiar faces and speaks in voices you trusted. It knows you're coming.",
            "The question isn't whether you'll survive. The question is whether what leaves will still be you.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="text-mono text-sm md:text-base text-secondary-foreground leading-relaxed"
              style={{ textWrap: "balance" }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-label text-muted-foreground/40"
        >
          [TRANSMISSION ENDS — SIGNAL LOST]
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
