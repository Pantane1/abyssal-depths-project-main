import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I had to stop playing at 2 AM. Not because I was tired—because I couldn't handle what was behind the next door.",
    source: "IGN — 9.2/10",
  },
  {
    quote: "DEEP-6 understands that true horror isn't what you see. It's what you can't stop imagining.",
    source: "GAMESPOT — EDITOR'S CHOICE",
  },
  {
    quote: "The most unsettling game since SOMA. I still hear the sounds when I close my eyes.",
    source: "PC GAMER — 94%",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-label text-muted-foreground">// EXTERNAL COMM LOGS</span>
          <h2 className="text-display text-4xl md:text-5xl text-foreground mt-4">
            SIGNAL <span className="text-primary glow-text">RECEIVED</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass p-8 flex flex-col justify-between glow-border"
            >
              <p className="text-mono text-sm text-secondary-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <span className="text-label text-primary">{t.source}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
