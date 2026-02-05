import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BlogCard } from "./BlogCard";
import postAiFuture from "@/assets/post-ai-future.jpg";
import postCrypto from "@/assets/post-crypto.jpg";
import postTech from "@/assets/post-tech.jpg";

const featuredPosts = [
  {
    slug: "future-of-artificial-intelligence-2026",
    title: "The Future of Artificial Intelligence: How AI Will Reshape Jobs, Healthcare, and Creativity",
    excerpt: "Exploring the transformative impact of AI on every aspect of human life, from workplace automation to creative industries.",
    category: "AI",
    readTime: "8 min read",
    date: "Jan 28, 2026",
    image: postAiFuture,
    featured: true,
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
    slug: "best-developer-tools-2026",
    title: "Top 10 Developer Tools Powered by AI in 2026",
    excerpt: "A comprehensive review of the most innovative AI-powered development tools that are changing how we code.",
    category: "Tech",
    readTime: "6 min read",
    date: "Jan 22, 2026",
    image: postTech,
  },
];

export function FeaturedPosts() {
  return (
    <section className="py-20 relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="gradient-text">Featured</span> Articles
            </h2>
            <p className="text-muted-foreground">
              Handpicked insights on AI and technology
            </p>
          </div>
          <Link
            to="/category/all"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all articles →
          </Link>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredPosts.map((post, index) => (
            <BlogCard key={post.slug} {...post} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
