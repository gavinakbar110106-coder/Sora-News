import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface HeroSectionProps {
  onArticleClick: (articleId: string) => void;
}

export function HeroSection({ onArticleClick }: HeroSectionProps) {
  return (
    <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            className="relative group cursor-pointer"
            onClick={() => onArticleClick("1")}
          >
            <div className="aspect-[16/10] overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop"
                alt="Breaking news"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <Badge className="mb-2 bg-red-600 hover:bg-red-700">Breaking News</Badge>
              <h2 className="text-3xl mb-2 text-[#2C4A64]">Global Summit Reaches Historic Climate Agreement</h2>
              <p className="text-gray-600 mb-2">World leaders unite in unprecedented commitment to reduce carbon emissions by 2030.</p>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                id: "2",
                category: "Politics",
                title: "Senate Passes Major Infrastructure Bill",
                time: "4 hours ago",
                image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop"
              },
              {
                id: "3",
                category: "Technology",
                title: "AI Breakthrough Revolutionizes Healthcare",
                time: "6 hours ago",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop"
              },
              {
                id: "4",
                category: "Business",
                title: "Markets Rally on Positive Economic Data",
                time: "8 hours ago",
                image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop"
              }
            ].map((article) => (
              <div 
                key={article.id} 
                className="flex gap-4 group cursor-pointer"
                onClick={() => onArticleClick(article.id)}
              >
                <div className="w-32 h-20 flex-shrink-0 overflow-hidden rounded">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-1 border-[#2C4A64] text-[#2C4A64]">{article.category}</Badge>
                  <h3 className="text-sm mb-1 group-hover:text-[#7DA5B8] transition-colors text-[#2C4A64]">{article.title}</h3>
                  <span className="text-xs text-gray-500">{article.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}