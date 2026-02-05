import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Cpu, Bitcoin, ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Artificial Intelligence",
    slug: "ai",
    description: "Explore the future of AI, machine learning, and intelligent systems",
    icon: Brain,
    color: "primary",
    count: 24,
  },
  {
    name: "Technology",
    slug: "tech",
    description: "Latest gadgets, software reviews, and tech news",
    icon: Cpu,
    color: "accent",
    count: 18,
  },
  {
    name: "Web3 & Blockchain",
    slug: "web3",
    description: "Cryptocurrency, DeFi, NFTs, and the decentralized future",
    icon: Bitcoin,
    color: "primary",
    count: 12,
  },
];

export function CategorySection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Explore</span> Categories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dive deep into topics that shape our digital future
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/category/${category.slug}`} className="block group">
                <div className="card-glow rounded-2xl p-6 border border-border/50 transition-all duration-500 group-hover:border-primary/30 h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-${category.color}/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <category.icon className={`w-7 h-7 text-${category.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {category.count} articles
                    </span>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
