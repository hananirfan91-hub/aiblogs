import { motion } from "framer-motion";
import { Instagram, Facebook, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// TikTok icon component since lucide doesn't have it
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/tearswithhanan/",
    icon: Instagram,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@pathan_x_babarian565",
    icon: TikTokIcon,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/HananIrfan001",
    icon: Facebook,
  },
  {
    name: "Portfolio",
    url: "https://hananirfanportfolio.vercel.app/",
    icon: Globe,
  },
];

export function AuthorCard() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-glow rounded-3xl p-8 md:p-12 border border-border/50 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center text-4xl font-bold gradient-text">
                    HI
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-pulse-glow">
                  <span className="text-xs font-bold text-primary-foreground">✓</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Hanan Irfan
                </h3>
                <p className="text-primary font-medium mb-4">
                  AI Researcher & Computer Science Expert
                </p>
                <p className="text-muted-foreground mb-6 max-w-xl">
                  Passionate about exploring the intersection of artificial intelligence and human creativity. 
                  I write about emerging technologies, AI trends, and their real-world applications to help 
                  everyone understand and embrace the digital future.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 border border-border/50 hover:border-primary/30 flex items-center justify-center transition-all duration-300"
                      title={link.name}
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                    </a>
                  ))}
                </div>

                {/* CTA */}
                <Button asChild>
                  <a href="https://hananirfanportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Visit Portfolio
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
