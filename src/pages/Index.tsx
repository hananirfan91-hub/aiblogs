import { Header } from "@/components/blog/Header";
import { Hero } from "@/components/blog/Hero";
import { FeaturedPosts } from "@/components/blog/FeaturedPosts";
import { CategorySection } from "@/components/blog/CategorySection";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { Newsletter } from "@/components/blog/Newsletter";
import { Footer } from "@/components/blog/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <Hero />
        <FeaturedPosts />
        <CategorySection />
        <AuthorCard />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
