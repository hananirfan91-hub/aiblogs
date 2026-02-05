import { useParams } from "react-router-dom";
import { Header } from "@/components/blog/Header";
import { Footer } from "@/components/blog/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { motion } from "framer-motion";
import { Brain, Cpu, Bitcoin, Layers } from "lucide-react";
import postAiFuture from "@/assets/post-ai-future.jpg";
import postCrypto from "@/assets/post-crypto.jpg";
import postTech from "@/assets/post-tech.jpg";

const categoryData: Record<string, { name: string; description: string; icon: any; color: string }> = {
  ai: {
    name: "Artificial Intelligence",
    description: "Explore the future of AI, machine learning, and intelligent systems",
    icon: Brain,
    color: "primary",
  },
  tech: {
    name: "Technology",
    description: "Latest gadgets, software reviews, and tech news",
    icon: Cpu,
    color: "accent",
  },
  web3: {
    name: "Web3 & Blockchain",
    description: "Cryptocurrency, DeFi, NFTs, and the decentralized future",
    icon: Bitcoin,
    color: "primary",
  },
  all: {
    name: "All Articles",
    description: "Browse our complete collection of tech insights",
    icon: Layers,
    color: "primary",
  },
};

const allPosts = [
  {
    slug: "future-of-artificial-intelligence-2026",
    title: "The Future of Artificial Intelligence: How AI Will Reshape Jobs, Healthcare, and Creativity",
    excerpt: "Exploring the transformative impact of AI on every aspect of human life, from workplace automation to creative industries.",
    category: "AI",
    readTime: "8 min read",
    date: "Jan 28, 2026",
    image: postAiFuture,
  },
  {
    slug: "machine-learning-beginners-guide",
    title: "Machine Learning for Beginners: A Complete Guide to Getting Started",
    excerpt: "Everything you need to know to start your journey into machine learning and neural networks.",
    category: "AI",
    readTime: "12 min read",
    date: "Jan 26, 2026",
    image: postAiFuture,
  },
  {
    slug: "chatgpt-vs-gemini-comparison",
    title: "ChatGPT vs Gemini: Which AI Assistant Wins in 2026?",
    excerpt: "A detailed comparison of the two leading AI assistants and their capabilities.",
    category: "AI",
    readTime: "6 min read",
    date: "Jan 24, 2026",
    image: postAiFuture,
  },
  {
    slug: "bitcoin-price-prediction-ai-analysis",
    title: "Bitcoin in 2026: AI-Powered Price Analysis and Market Trends",
    excerpt: "Using machine learning models to analyze cryptocurrency market patterns and future predictions.",
    category: "Web3",
    readTime: "5 min read",
    date: "Jan 25, 2026",
    image: postCrypto,
  },
  {
    slug: "ethereum-smart-contracts-explained",
    title: "Ethereum Smart Contracts: Building the Future of DeFi",
    excerpt: "Understanding how smart contracts work and their role in decentralized finance.",
    category: "Web3",
    readTime: "7 min read",
    date: "Jan 20, 2026",
    image: postCrypto,
  },
  {
    slug: "nft-marketplace-guide-2026",
    title: "NFT Marketplaces in 2026: Where to Buy and Sell Digital Art",
    excerpt: "A comprehensive guide to the best NFT platforms and how to navigate the digital art market.",
    category: "Web3",
    readTime: "6 min read",
    date: "Jan 18, 2026",
    image: postCrypto,
  },
  {
    slug: "best-developer-tools-2026",
    title: "Top 10 Developer Tools Powered by AI in 2026",
    excerpt: "A comprehensive review of the most innovative AI-powered development tools that are changing how we code.",
    category: "Tech",
    readTime: "6 min read",
    date: "Jan 22, 2026",
    image: postTech,
  },
  {
    slug: "iphone-16-review",
    title: "iPhone 16 Pro Max Review: The AI-Powered Revolution",
    excerpt: "Apple's latest flagship brings advanced AI features that transform mobile photography and productivity.",
    category: "Tech",
    readTime: "8 min read",
    date: "Jan 15, 2026",
    image: postTech,
  },
  {
    slug: "cloud-gaming-future",
    title: "Cloud Gaming in 2026: The End of Console Wars?",
    excerpt: "How cloud gaming services are changing the gaming industry and what it means for players.",
    category: "Tech",
    readTime: "5 min read",
    date: "Jan 12, 2026",
    image: postTech,
  },
];

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categoryData[slug || "all"] || categoryData.all;
  
  const filteredPosts = slug === "all" || !slug 
    ? allPosts 
    : allPosts.filter(post => post.category.toLowerCase() === slug.toLowerCase() || 
        (slug === "web3" && post.category === "Web3"));

  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{category.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              {category.description}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              {filteredPosts.length} articles
            </p>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
