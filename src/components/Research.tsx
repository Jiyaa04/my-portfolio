import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Research = () => {
  const papers = [
    {
      title: "AI-powered BMS for EVs",
      description: "Developing an intelligent Battery Management System using machine learning to optimize battery performance, predict failures, and extend lifespan for electric vehicles.",
      status: "Under Review",
      conference: "ACET-25",
      keywords: ["AI", "Battery Management", "Predictive Analytics", "IoT"],
      link: "https://drive.google.com/file/d/1XuPDDUFH9ncrJ2G-MckbjLqG66UZzFMA/view?usp=drivesdk",
    },
    {
      title: "Virtual Whiteboard Using Computer Vision",
      description: "Creating an interactive virtual whiteboard system using computer vision and gesture recognition for remote collaboration and teaching.",
      status: "Presented",
      conference: "CTDP",
      keywords: ["Computer Vision", "Gesture Recognition", "HCI"],
      link: "https://drive.google.com/file/d/1CvkXZBBpl6FravMqmXC7TbfpNf8pwpap/view?usp=drivesdk",
    },
    {
      title: "AI-driven EDA for Accelerating Data Understanding",
      description: "Automating Exploratory Data Analysis processes using AI to generate insights, visualizations, and recommendations for data scientists.",
      status: "Published at IEEE Xplore",
      conference: "IEEE",
      keywords: ["Automated EDA", "AI", "Data Science"],
      link: " https://ieeexplore.ieee.org/document/11199227",
    },
        {
      title: "Clustering Students Based on Learning Styles",
      description: "Machine learning approach to categorize students by learning preferences.",
      status: "Published at IEEE Xplore",
      conference: "IEEE",
      keywords: ["Classification", "AI", "Data Science", "KNN"],
      link: " https://ieeexplore.ieee.org/document/11199227",
    },
    {
      title: "Optimizing Document Processing",
      description: "Enhancing OCR accuracy for diverse languages and document formats using deep learning and transfer learning techniques.",
      status: "Under Review",
      conference: "ICACTMMS",
      keywords: ["OCR", "Deep Learning", "NLP"],
      link: "https://drive.google.com/file/d/156gRoYaIYaOUln5JJYY4vT_iEcrZllYS/view?usp=drivesdk",
    },
  ];

  return (
    <section id="research" className="py-20 relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="absolute inset-0 neural-grid opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-secondary font-mono block mb-4">
            &lt;research /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            // Pushing boundaries of AI and ML
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-8">
            {papers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-white shadow-md hidden md:block" />

                <Card className="neural-card p-6 hover:border-primary/50 transition-all duration-300 group hover:scale-[1.01] md:ml-20 code-lines">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform">
                        <FileText className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-heading font-bold group-hover:text-gradient transition-colors">
                          {paper.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className={`w-fit ${
                            paper.status === "Presented"
                              ? "bg-green-100 text-green-700 border-green-300"
                              : "bg-primary/10 text-primary border-primary/30"
                          }`}
                        >
                          {paper.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium text-secondary">{paper.conference}</span>
                      </div>
                      <p className="text-foreground/80 mb-4">
                        {paper.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.keywords.map((keyword, keyIndex) => (
                          <Badge
                            key={keyIndex}
                            variant="outline"
                            className="text-xs border-border/50 text-muted-foreground"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary hover:bg-primary/10 group/btn"
                        asChild
                      >
                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
