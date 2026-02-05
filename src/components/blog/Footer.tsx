import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Globe, Heart } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

const footerLinks = {
  categories: [
    { name: "Artificial Intelligence", href: "/category/ai" },
    { name: "Technology", href: "/category/tech" },
    { name: "Web3 & Blockchain", href: "/category/web3" },
    { name: "All Articles", href: "/category/all" },
  ],
  resources: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Newsletter", href: "#newsletter" },
  ],
  external: [
    { name: "Sproutus AI", href: "https://sproutus.ai", external: true },
    { name: "ROI-AI Technologies", href: "https://roi-ai.com", external: true },
    { name: "Support AI", href: "https://support.ai", external: true },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/tearswithhanan/", icon: Instagram },
  { name: "TikTok", href: "https://www.tiktok.com/@pathan_x_babarian565", icon: TikTokIcon },
  { name: "Facebook", href: "https://www.facebook.com/HananIrfan001", icon: Facebook },
  { name: "Portfolio", href: "https://hananirfanportfolio.vercel.app/", icon: Globe },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-bold gradient-text">AI Blogs</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Decoding AI & Technology for everyone. Expert insights on the digital future.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary/50 hover:bg-primary/20 border border-border/50 hover:border-primary/30 flex items-center justify-center transition-all duration-300"
                  title={link.name}
                >
                  <link.icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links (Backlinks) */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Partners</h4>
            <ul className="space-y-3">
              {footerLinks.external.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Blogs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> by Hanan Irfan
          </p>
        </div>
      </div>
    </footer>
  );
}
