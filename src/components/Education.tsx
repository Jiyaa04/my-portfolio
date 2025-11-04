import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "PIEMR, Indore",
      duration: "2022 - 2026",
      grade: "CGPA: 7.4",
      color: "text-primary",
      bgColor: "from-primary/10 to-primary/5",
    },
    {
      icon: School,
      degree: "Class 12th",
      institution: "St. Arnold's Hr. Sec. School",
      duration: "2022",
      grade: "69%",
      color: "text-secondary",
      bgColor: "from-secondary/10 to-secondary/5",
    },
    {
      icon: School,
      degree: "Class 10th",
      institution: "St. Arnold's Hr. Sec. School",
      duration: "2020",
      grade: "87%",
      color: "text-accent",
      bgColor: "from-accent/10 to-accent/5",
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-gradient-to-b from-background via-card/20 to-background">
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
            &lt;education /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            // Building foundations in AI & Data Science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-6">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline node */}
                  <div className={`absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br ${edu.bgColor} border-4 border-white shadow-md hidden md:block`} />

                  <Card className="neural-card p-6 hover:border-primary/50 transition-all duration-300 group hover:scale-[1.02] md:ml-20">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.bgColor} group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${edu.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-lg font-heading font-bold mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-foreground/70">{edu.institution}</p>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-muted text-foreground/90 border-border/50">
                            {edu.duration}
                          </Badge>
                        </div>
                        <p className={`font-semibold ${edu.color}`}>{edu.grade}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
