import Marquee from "react-fast-marquee";
import { Trophy, Award, Users, FileText, Mic } from "lucide-react";
import { motion } from "framer-motion";

const AchievementMarquee = () => {
  const achievements = [
    {
      icon: Trophy,
      text: "🧠 IBM WatsonX Hackathon – Top 50",
      color: "text-primary",
    },
    {
      icon: Award,
      text: "🥈 2nd Prize – Mathematical Model Making",
      color: "text-secondary",
    },
    {
      icon: Trophy,
      text: "🏅 Top Performer – Data Science & ML Hackathon, IIITM Gwalior",
      color: "text-accent",
    },
    {
      icon: FileText,
      text: "📄 Research Paper – AI-driven EDA (under review at IEEE)",
      color: "text-primary",
    },
    {
      icon: Mic,
      text: "🎙 Anchored 10+ College Events",
      color: "text-secondary",
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-y border-border/50">
      <Marquee gradient={false} speed={40} pauseOnHover>
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={index}
              className="mx-6 flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Icon className={`w-5 h-5 ${achievement.color}`} />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {achievement.text}
              </span>
            </motion.div>
          );
        })}
      </Marquee>
    </section>
  );
};

export default AchievementMarquee;
