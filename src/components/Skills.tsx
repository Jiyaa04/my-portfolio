import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "Flask",
    "REST APIs",
    "Django",
    "AI/ML Libraries",
    "Data Science",
    "EDA",
    "Data Analysis",
    "Statistical Modelling",
    "Data Visualization",
    "Model Deployment",
    "MLOps",
    "Time Series Forecasting",
    "OCR Systems",
    "Data Wrangling",
    "MVC",
    "JDBC",
    "Git",
    "GitHub",
    "Google Colab",
    "Jupyter Notebook",
    "Computer Vision",
    "CUDA",
    "Power BI",
    "Tableau",
    "Project Management",
  ];

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="absolute inset-0 neural-grid opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono block mb-4">
            &lt;skills /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            # Tools and technologies I work with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="neural-card p-8 code-lines">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.02 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-muted/50 text-foreground border border-primary/20 hover:border-primary/50 transition-all px-4 py-2 text-sm font-mono cursor-default hover:bg-primary/10"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
