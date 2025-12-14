import { HeroSection } from "../hero-section";
import { NewsGrid } from "../news-grid";
import { TrendingSection } from "../trending-section";
import { CategorySection } from "../category-section";

interface HomePageProps {
  onArticleClick: (articleId: string) => void;
}

export function HomePage({ onArticleClick }: HomePageProps) {
  return (
    <>
      <HeroSection onArticleClick={onArticleClick} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewsGrid onArticleClick={onArticleClick} />
            <CategorySection onArticleClick={onArticleClick} />
          </div>
          <aside className="lg:col-span-1">
            <TrendingSection onArticleClick={onArticleClick} />
          </aside>
        </div>
      </div>
    </>
  );
}