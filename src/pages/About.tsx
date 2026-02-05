import { Header } from "@/components/blog/Header";
import { Footer } from "@/components/blog/Footer";

import { motion } from "framer-motion";
import { Instagram, Facebook, Globe, ExternalLink, Award, BookOpen, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/tearswithhanan/", icon: Instagram },
  { name: "TikTok", url: "https://www.tiktok.com/@pathan_x_babarian565", icon: TikTokIcon },
  { name: "Facebook", url: "https://www.facebook.com/HananIrfan001", icon: Facebook },
  { name: "Portfolio", url: "https://hananirfanportfolio.vercel.app/", icon: Globe },
];

const expertise = [
  { icon: Code, title: "AI Development", description: "Building intelligent systems and machine learning models" },
  { icon: BookOpen, title: "Tech Writing", description: "Simplifying complex topics for everyone to understand" },
  { icon: Award, title: "Research", description: "Exploring cutting-edge developments in computer science" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
      
            {/* Avatar */}
            <div className="inline-block relative mb-8">
              <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-primary to-accent p-[3px]">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center text-5xl font-bold gradient-text">
                  <img src="/favicon.png" alt="favicon" />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-primary rounded-xl flex items-center justify-center animate-pulse-glow">
                <span className="text-sm font-bold text-primary-foreground">✓</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Hanan Irfan</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              AI Researcher & Computer Science Student
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary/50 hover:bg-primary/20 border border-border/50 hover:border-primary/30 flex items-center justify-center transition-all duration-300"
                  title={link.name}
                >
                  <link.icon className="w-6 h-6 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>

            <Button asChild size="lg">
              <a href="https://hananirfanportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Full Portfolio
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="card-glow rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-bold mb-4 gradient-text">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm passionate about exploring the intersection of artificial intelligence and human creativity. 
                  With a background in computer science and a deep fascination for emerging technologies, I write 
                  to help everyone understand and embrace the digital future.
                </p>
                <p>
                  Through this blog, I share insights on AI advancements, technology trends, blockchain innovations, 
                  and practical guides that bridge the gap between complex tech concepts and everyday understanding.
                </p>
                <p>
                  My mission is simple: <span className="text-foreground font-medium">make technology accessible</span>. 
                  Whether you're a developer, business owner, or just curious about AI – you'll find valuable insights here.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="gradient-text">Areas of Expertise</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="card-glow rounded-2xl p-6 border border-border/50 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
