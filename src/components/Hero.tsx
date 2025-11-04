import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Terminal, Code2 } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background neural-grid">
      {/* Animated neural network nodes */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Connecting lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              width: `${20 + Math.random() * 40}%`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/30 terminal-glow">
              <Terminal className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-mono text-foreground">
                <span className="text-primary">status:</span>{" "}
                <span className="text-secondary">"available_for_opportunities"</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 leading-tight">
              <span className="text-muted-foreground font-mono text-lg md:text-xl block mb-2">
                &gt; print(
                <span className="text-secondary">"Hello, World!"</span>)
              </span>
              <span className="block">Hi, I'm</span>
              <span className="text-gradient block">Jiya Darvai</span>
              <span className="text-primary">_</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 code-lines pl-4"
          >
            <p className="text-lg md:text-xl text-muted-foreground font-mono mb-2">
              <span className="text-secondary">class</span>{" "}
              <span className="text-foreground">JiyaDarvai</span>:
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-mono pl-4">
              <span className="text-secondary">def</span>{" "}
              <span className="text-accent">__init__</span>(self):
            </p>
            <p className="text-sm md:text-base text-muted-foreground font-mono pl-8">
              self.role = <span className="text-primary">"AI Enthusiast | ML Developer | Tech Explorer"</span>
            </p>
            <p className="text-sm md:text-base text-muted-foreground font-mono pl-8">
              self.passion = <span className="text-primary">"Transforming ideas into intelligent systems"</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
  href="https://drive.google.com/file/d/1xvw1mhNSfEoIBOY0lq6MAgrgS-f_cuQU/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-primary hover:bg-primary/90 text-background border-0 px-8 rounded-lg terminal-glow group"
  >
    <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
    My Resume
  </Button>
</a>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary rounded-lg text-foreground"
            >
              <Terminal className="w-5 h-5 mr-2" />
              Let's Connect
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <ArrowDown className="w-6 h-6 text-primary/60" />
            </motion.div>
            <p className="text-xs text-muted-foreground font-mono mt-2">
              // scroll to explore
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
