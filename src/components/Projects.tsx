import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "AQI Prediction Model",
      subtitle: "Time Series Forecasting using LSTM",
      description: "Built an FB - Prophet deep learning model to predict Air Quality Index with high accuracy, helping environmental monitoring.",
      tech: ["Python", "FB-Prophet", "TensorFlow", "Data Analysis"],
      gradient: "from-primary/10 to-primary/5",
      borderColor: "border-primary/30",
      github: "https://github.com/Jiyaa04/AeroSense",
      demo: "https://aero-sensee.netlify.app/",
    },
    {
      title: "Air Canvas",
      subtitle: "Draw using Hand Gestures",
      description: "Developed a computer vision application using OpenCV that allows users to draw in the air using hand gestures and real-time tracking.",
      tech: ["Python", "OpenCV", "Computer Vision", "MediaPipe"],
      gradient: "from-secondary/10 to-secondary/5",
      borderColor: "border-secondary/30",
      github: "https://github.com/Jiyaa04/Virtual-Board",
      demo: "https://github.com/Jiyaa04/Virtual-Board",
    },
    {
      title: "Document Summarizer",
      subtitle: "NLP + Transformers",
      description: "Created an NLP-powered tool that automatically summarizes long documents using advanced natural language processing techniques.",
      tech: ["Python", "NLP", "Transformers", "BERT"],
      gradient: "from-accent/10 to-accent/5",
      borderColor: "border-accent/30",
      github: "https://github.com/Jiyaa04/Document-Summerize",
      demo: "https://github.com/Jiyaa04/Document-Summerize",
    },
    {
      title: "Document Scanner",
      subtitle: "OCR, Edge Detection, Tesseract",
      description: "Implemented an OCR-based document scanner that digitizes physical documents with high accuracy and text extraction capabilities.",
      tech: ["Python", "OCR", "Tesseract", "Image Processing"],
      gradient: "from-primary/10 to-secondary/10",
      borderColor: "border-primary/30",
      github: "https://github.com/Jiyaa04/Edge_Detection",
      demo: "https://github.com/Jiyaa04/Edge_Detection",
    },
    {
      title: "Crowd Analysis System",
      subtitle: "People Counting via Computer Vision",
      description: "Developed a computer vision system for real-time crowd detection, tracking, and analysis for public safety applications.",
      tech: ["Python", "YOLO", "Computer Vision", "Deep Learning"],
      gradient: "from-secondary/10 to-accent/10",
      borderColor: "border-secondary/30",
      github: "https://github.com/Jiyaa04/IBM-TechXchange-CrowdDetection",
      demo: "https://youtu.be/jM9pEjSzajg?si=aTuqnrGkaaN2izvI",
    },
  ];

  return (
    <section id="projects" className="py-20 relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="absolute inset-0 neural-grid opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-mono block mb-4">
            &lt;projects /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            // Showcasing innovative AI and ML solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="neural-card overflow-hidden hover:border-primary/50 transition-all duration-300 group hover:scale-[1.02]">
                <div className={`h-3 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-1 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary/70 font-medium mb-3">{project.subtitle}</p>
                  <p className="text-foreground/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-muted text-foreground/90 border-border/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/30 hover:bg-primary/5 transition-all"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white border-0 transition-all"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
