import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/mkgpbzwv", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  } else {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
  }
};

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-br from-background via-card/30 to-background">
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
            &lt;contact /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            // Have a project or want to chat about AI? Reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="neural-card p-8 code-lines">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-white border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="bg-white border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or just say hi!"
                  rows={5}
                  required
                  className="bg-white border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-background border-0 terminal-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                <span className="font-mono">send_message()</span>
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-primary/20">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:darwaijiya@gmail.com"
                  className="hover:text-primary transition-colors font-mono text-sm"
                >
                  darwaijiya@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-secondary">"""</span>
              <span className="text-foreground/80 italic block my-2 px-4">
                Curiosity drives creation — and that's where every AI journey begins.
              </span>
              <span className="text-secondary">"""</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
