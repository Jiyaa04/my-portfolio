import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Cynapto Technologies Pvt. Ltd.",
      role: "AI Intern",
      duration: "Sept 2025 - Present",
      skills: ["Generative AI", "Computer Vision", "LLMs", "Python"],
      description: "Working on cutting-edge AI projects involving generative AI models and computer vision solutions.",
    },
    {
      company: "Blucursor",
      role: "AI/ML Intern",
      duration: "Dec 2024 - Jan 2025",
      skills: ["OpenCV", "Python", "Deep Learning", "Image Processing"],
      description: "Developed computer vision applications and implemented deep learning models for real-world applications.",
    },
    {
      company: "Ypsilon IT Solutions",
      role: "Java Intern",
      duration: "Dec 2023 - Feb 2024",
      skills: ["Java", "JDBC", "MySQL", "Full-stack Development"],
      description: "Built full-stack applications using Java, JDBC, and MySQL for enterprise solutions.",
    },
  ];

  return (
    <section id="experience" className="py-20 relative bg-gradient-to-b from-background via-card/20 to-background">
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
            &lt;experience /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Professional <span className="text-gradient">Internships</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            // Real-world AI & ML implementations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="neural-card p-6 hover:border-primary/50 transition-all duration-300 group hover:scale-[1.02] code-lines">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3 ml-14">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <p className="text-foreground/80 mb-4 ml-14">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 ml-14">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-muted text-foreground/90 border-border/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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

export default Experience;
