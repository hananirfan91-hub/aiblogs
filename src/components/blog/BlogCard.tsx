import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  readTime,
  date,
  image,
  featured = false,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative ${featured ? "md:col-span-2" : ""}`}
    >
      <Link to={`/post/${slug}`} className="block">
        <div className="card-glow rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5">
          {/* Image */}
          <div className={`relative overflow-hidden ${featured ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="category-tag text-primary">{category}</span>
            </div>

            {/* Arrow Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <ArrowUpRight className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className={`font-bold text-foreground group-hover:gradient-text transition-all duration-300 line-clamp-2 mb-3 ${featured ? "text-2xl" : "text-lg"}`}>
              {title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
              {excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
