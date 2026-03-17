import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AMBIENT_URL = "https://cdn.pixabay.com/audio/2022/02/23/audio_ea70ad08e0.mp3";

const AmbientSoundToggle = () => {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(AMBIENT_URL);
    audio.loop = true;
    audio.volume = 0.3;
    audio.addEventListener("canplaythrough", () => setLoaded(true));
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 glass w-12 h-12 flex items-center justify-center border border-border hover:border-primary/60 transition-all duration-300 group"
      title={playing ? "Mute ambient audio" : "Play ambient audio"}
    >
      <AnimatePresence mode="wait">
        {playing ? (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-[3px]"
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-[3px] bg-primary rounded-full"
                animate={{ height: [4, 14, 4] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-[3px]"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-[3px] h-1 bg-muted-foreground rounded-full" />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!loaded && (
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent animate-pulse" />
      )}
    </motion.button>
  );
};

export default AmbientSoundToggle;
