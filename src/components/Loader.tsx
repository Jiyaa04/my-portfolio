import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const asciiLines = [
    "     ██╗██╗██╗   ██╗ █████╗ ",
    "     ██║██║╚██╗ ██╔╝██╔══██╗",
    "     ██║██║ ╚████╔╝ ███████║",
    "██   ██║██║  ╚██╔╝  ██╔══██║",
    "╚█████╔╝██║   ██║   ██║  ██║",
    " ╚════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝",
  ];

  useEffect(() => {
    if (currentLine >= asciiLines.length) {
      setTimeout(() => {
        onComplete();
      }, 800);
      return;
    }

    const line = asciiLines[currentLine];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= line.length) {
        setDisplayedText((prev) => {
          const lines = prev.split("\n");
          lines[currentLine] = line.substring(0, charIndex);
          return lines.join("\n");
        });
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
          setDisplayedText((prev) => prev + "\n");
        }, 50);
      }
    }, 15);

    return () => clearInterval(typingInterval);
  }, [currentLine, onComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background neural-grid"
      >
        {/* Neural network connections in background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 p-8 neural-card terminal-glow">
          <div className="mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="ml-3 text-sm text-muted-foreground font-mono">
              ~/jiya-portfolio
            </span>
          </div>

          <div className="code-lines pl-4">
            <div className="flex items-start gap-2">
              <span className="text-primary font-mono text-sm">$ </span>
              <div>
                <pre className="text-base md:text-xl font-mono text-primary leading-tight whitespace-pre">
                  {displayedText}
                  {showCursor && currentLine < asciiLines.length && (
                    <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse"></span>
                  )}
                </pre>
              </div>
            </div>

            {currentLine >= asciiLines.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 flex items-center gap-2"
              >
                <span className="text-primary font-mono text-sm">$ </span>
                <span className="text-secondary font-mono text-sm">
                  Loading portfolio...
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-secondary"
                >
                  █
                </motion.span>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(currentLine / asciiLines.length) * 100}%` }}
            transition={{ duration: 0.3 }}
            className="mt-6 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full terminal-glow"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
