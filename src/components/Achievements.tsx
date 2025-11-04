import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Mic, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "IBM TechXchange 2025",
      description: "Top 50 - WatsonX Hackathon",
      category: "Hackathon",
      color: "text-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100/50",
      link: "https://www.credly.com/badges/71f0e513-ed44-45ad-97be-517e6e599e7c/linked_in_profile",
    },
    {
      icon: Star,
      title: "NVIDIA CUDA Programming",
      description: "Python Programming Certification",
      category: "Certification",
      color: "text-green-600",
      bgColor: "from-green-50 to-green-100/50",
      link: "https://drive.google.com/file/d/1RFJWRE-wkFvVBm5DBTF9ZKr9gFJJ3KiY/view",
    },
    {
      icon: Award,
      title: "Best Delegate",
      description: "PMUN",
      category: "Certification",
      color: "text-primary",
      bgColor: "from-primary/10 to-primary/5",
      link: "https://drive.google.com/file/d/18zWMcYqf8rybwH9UkATDo79C66_gZYtc/view",
    },
    {
      icon: Trophy,
      title: "IIITM Gwalior Hackathon",
      description: "Top Performer among hundreds",
      category: "Hackathon",
      color: "text-secondary",
      bgColor: "from-secondary/10 to-secondary/5",
      link: "https://drive.google.com/file/d/1C260T8bVFoSdZW6nPu8Ralr9V9OO9rPo/view",
    },
    {
      icon: BookOpen,
      title: "Leadership & Sustainability",
      description: "IUCEE Certification",
      category: "Certification",
      color: "text-accent",
      bgColor: "from-accent/10 to-accent/5",
      link: "https://drive.google.com/file/d/1raHtCsJZYpLj8M0OpL44PTtFs2fzhK-6/view",
    },
    {
      icon: Mic,
      title: "Head Anchoring Coordinator",
      description: "Anchored 10+ college events at PIEMR",
      category: "Leadership",
      color: "text-purple-600",
      bgColor: "from-purple-50 to-purple-100/50",
      link: "https://drive.google.com/file/d/1Ww8zO_XRTpRA4iEoqlnOx-fEBu9nogBD/view",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 relative bg-gradient-to-b from-background via-card/20 to-background"
    >
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
            &lt;achievements /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Awards & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            // Recognized excellence in AI & tech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="neural-card p-6 hover:border-primary/50 transition-all duration-300 group hover:scale-[1.05] relative overflow-hidden cursor-pointer">
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.bgColor} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                    <div className="relative">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${achievement.bgColor} group-hover:scale-110 transition-transform`}
                        >
                          <Icon className={`w-6 h-6 ${achievement.color}`} />
                        </div>
                        <div className="flex-1">
                          <Badge
                            variant="secondary"
                            className="mb-2 text-xs bg-muted/50 border-border/50"
                          >
                            {achievement.category}
                          </Badge>
                          <h3 className="text-lg font-heading font-bold mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-foreground/70">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
