import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Clock } from "lucide-react";

interface NewsGridProps {
  onArticleClick: (articleId: string) => void;
}

const articles = [
  {
    id: "news-5",
    category: "World",
    title: "International Trade Talks Show Promising Results",
    excerpt: "Negotiators from multiple countries report significant progress in ongoing trade discussions.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
    time: "3 hours ago"
  },
  {
    id: "news-6",
    category: "Science",
    title: "New Discovery in Deep Ocean Exploration",
    excerpt: "Marine biologists uncover previously unknown species in the Mariana Trench.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    time: "5 hours ago"
  },
  {
    id: "news-7",
    category: "Sports",
    title: "Championship Finals Set New Viewership Records",
    excerpt: "Historic match draws millions of viewers worldwide in thrilling conclusion.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    time: "7 hours ago"
  },
  {
    id: "news-8",
    category: "Technology",
    title: "Quantum Computing Reaches New Milestone",
    excerpt: "Researchers achieve breakthrough in quantum error correction, paving the way for practical applications.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    time: "9 hours ago"
  },
  {
    id: "news-9",
    category: "Health",
    title: "Medical Study Reveals Benefits of Plant-Based Diet",
    excerpt: "Long-term research shows significant health improvements among participants.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    time: "12 hours ago"
  },
  {
    id: "news-10",
    category: "Culture",
    title: "Art Exhibition Breaks Attendance Records",
    excerpt: "Museum visitors flock to see rare collection of contemporary masterpieces.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
    time: "14 hours ago"
  }
];

export function NewsGrid({ onArticleClick }: NewsGridProps) {
  return (
    <section>
      <h2 className="text-2xl mb-6 text-[#2C4A64]">Berita Utama</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <article 
            key={article.id} 
            className="group cursor-pointer"
            onClick={() => onArticleClick(article.id)}
          >
            <div className="aspect-[16/10] overflow-hidden rounded-lg mb-3">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <Badge variant="secondary" className="mb-2 bg-[#7DA5B8] text-white hover:bg-[#6A92A3]">{article.category}</Badge>
            <h3 className="text-xl mb-2 group-hover:text-[#7DA5B8] transition-colors text-[#2C4A64]">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="size-3" />
              <span>{article.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}