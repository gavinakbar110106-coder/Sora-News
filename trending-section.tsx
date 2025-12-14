import { TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

interface TrendingSectionProps {
  onArticleClick: (articleId: string) => void;
}

const trendingArticles = [
  {
    id: "trending-1",
    title: "Economic Recovery Shows Strong Momentum",
    views: "125K views"
  },
  {
    id: "trending-2",
    title: "Space Mission Returns Valuable Data",
    views: "98K views"
  },
  {
    id: "trending-3",
    title: "Education Reform Plan Announced",
    views: "87K views"
  },
  {
    id: "trending-4",
    title: "Renewable Energy Investment Surges",
    views: "76K views"
  },
  {
    id: "trending-5",
    title: "Major Tech Company Unveils Innovation",
    views: "65K views"
  }
];

export function TrendingSection({ onArticleClick }: TrendingSectionProps) {
  return (
    <div className="sticky top-24">
      <Card className="p-6 border-[#7DA5B8]">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="size-5 text-red-500" />
          <h2 className="text-xl text-[#2C4A64]">Trending Now</h2>
        </div>
        <div className="space-y-4">
          {trendingArticles.map((article, index) => (
            <div 
              key={article.id} 
              className="group cursor-pointer"
              onClick={() => onArticleClick(article.id)}
            >
              <div className="flex gap-3">
                <span className="text-2xl text-gray-300">{index + 1}</span>
                <div className="flex-1">
                  <h3 className="text-sm mb-1 group-hover:text-[#7DA5B8] transition-colors text-[#2C4A64]">
                    {article.title}
                  </h3>
                  <span className="text-xs text-gray-500">{article.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 mt-6 border-[#7DA5B8]">
        <h3 className="mb-4 text-[#2C4A64]">Newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">Get daily news updates delivered to your inbox.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 text-sm focus:outline-none focus:border-[#7DA5B8]"
        />
        <button className="w-full bg-[#7DA5B8] text-white py-2 rounded-md hover:bg-[#6A92A3] transition-colors">
          Subscribe
        </button>
      </Card>
    </div>
  );
}