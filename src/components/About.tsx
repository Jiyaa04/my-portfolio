import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, GraduationCap, Linkedin, Github, Code2 } from "lucide-react";
import profileImage from "@/assets/profile-jiya.jpg";
import { motion } from "framer-motion";

const About = () => {
  const quickInfo = [
    { icon: MapPin, text: "Indore, India", color: "text-primary" },
    { icon: GraduationCap, text: "PIEMR, B.Tech (AI & DS)", color: "text-secondary" },
    { icon: Mail, text: "darwaijiya@gmail.com", color: "text-accent" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/jiya-darvai-baa061265/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Jiyaa04", label: "GitHub" },
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="absolute inset-0 neural-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-widest text-primary font-mono">
              &lt;about&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            // Building the future with AI, one line at a time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse-glow" />
            <div className="relative">
              <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="absolute inset-0 border-2 border-secondary/50 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform"></div>
              <img
                src={profileImage}
                alt="Jiya Darvai - AI & ML Developer"
                className="relative w-full rounded-2xl shadow-2xl border-2 border-primary/30"
              />
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-secondary"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-secondary"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="neural-card p-6 space-y-4 code-lines">
              <p className="text-base leading-relaxed text-foreground/90 font-mono text-sm">
                <span className="text-secondary">"""</span>
              </p>
              <p className="text-base leading-relaxed text-foreground/90 pl-4">
                I'm a <span className="text-primary font-semibold">B.Tech student in Artificial Intelligence and Data Science</span> at PIEMR, Indore. I'm passionate about leveraging AI to solve real-world challenges — from computer vision to generative AI.
              </p>
              <p className="text-base leading-relaxed text-foreground/90 pl-4">
                Beyond coding, I'm a communicator, leader, and curious learner who believes innovation starts with curiosity.
              </p>
              <p className="text-base leading-relaxed text-foreground/90 font-mono text-sm">
                <span className="text-secondary">"""</span>
              </p>
            </Card>

            {/* Quick Info Cards */}
            <div className="space-y-3">
              {quickInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="neural-card p-4 hover:border-primary/50 transition-all cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${info.color} group-hover:scale-110 transition-transform`} />
                        <span className="text-foreground/90 font-mono text-sm">{info.text}</span>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border-2 border-primary/30 hover:border-primary text-foreground rounded-lg terminal-glow transition-all"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm">{link.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
