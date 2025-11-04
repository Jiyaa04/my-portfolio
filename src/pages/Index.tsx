import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import GalleryMarquee from "@/components/GalleryMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Research from "@/components/Research";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll during loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-background">
          <Hero />
          <GalleryMarquee />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <Research />
          <Education />
          <Contact />
          
          {/* Footer */}
          <footer className="border-t border-primary/20 py-8 bg-card/50 neural-grid">
            <div className="container mx-auto px-4 text-center">
              <p className="text-muted-foreground font-mono text-sm">
                <span className="text-secondary">#</span> © 2025 Jiya Darvai{" "}
                <span className="text-primary">|</span> Built with passion for AI and innovation{" "}
                <span className="text-accent">💚</span>
              </p>
              <p className="text-muted-foreground/60 font-mono text-xs mt-2">
                // Powered by Python, Neural Networks & endless curiosity
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Index;
