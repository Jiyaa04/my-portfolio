import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import ibmHackathon from "@/assets/gallery/ibm-hackathon.jpg";
import mathCompetition from "@/assets/gallery/math-competition.jpg";
import iiitmHackathon from "@/assets/gallery/iiitm-hackathon.jpg";
import researchPaper from "@/assets/gallery/research-paper.jpg";
import anchoringEvent from "@/assets/gallery/anchoring-event.jpg";
import nvidiaCert from "@/assets/gallery/nvidia-cert.jpg";

const GalleryMarquee = () => {
  const galleryItems = [
    {
      image: ibmHackathon,
      title: "IBM WatsonX Hackathon",
      subtitle: "Top 50 Finalist",
      color: "primary",
    },
    {
      image: mathCompetition,
      title: "WorldSUAS Research Paper Presentation",
      subtitle: "IEEEXplore",
      color: "secondary",
    },
    {
      image: iiitmHackathon,
      title: "IIITM Gwalior Hackathon",
      subtitle: "Top Performer",
      color: "accent",
    },
    {
      image: researchPaper,
      title: "Research Paper Presentation",
      subtitle: "IIM Ahemdabad",
      color: "primary",
    },
    {
      image: anchoringEvent,
      title: "College Event Hosting",
      subtitle: "Head Coordinator",
      color: "secondary",
    },
    {
      image: nvidiaCert,
      title: "NVIDIA Certification",
      subtitle: "CUDA Programming",
      color: "accent",
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-card/50 via-card/30 to-card/50 border-y border-primary/20 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 neural-grid opacity-30"></div>
      
      <div className="relative z-10">
        <div className="mb-6 text-center">
          <h3 className="text-sm uppercase tracking-widest text-primary font-mono mb-2">
            &lt;achievements /&gt;
          </h3>
          <p className="text-xs text-muted-foreground font-mono">
            // Recent highlights from my journey
          </p>
        </div>

        <Marquee gradient={false} speed={50} pauseOnHover>
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="mx-4 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-80 h-48 overflow-hidden rounded-lg border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300">
                {/* Image with overlay */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                
                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-start gap-2 mb-1">
                    <span className={`text-${item.color} text-lg`}>▸</span>
                    <div>
                      <h4 className="text-sm font-bold text-foreground font-heading leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-primary/80 font-mono mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity terminal-glow"></div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default GalleryMarquee;
