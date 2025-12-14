import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Clock } from "lucide-react";

interface GemaSoraPageProps {
  onArticleClick: (articleId: string) => void;
}

export function GemaSoraPage({ onArticleClick }: GemaSoraPageProps) {
  const articles = [
    {
      id: "gema-sora-1",
      title: "Breaking News: Perkembangan Politik Terkini",
      excerpt: "Berita terkini seputar perkembangan politik nasional dan internasional.",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
      time: "2 hours ago"
    },
    {
      id: "gema-sora-2",
      title: "Ekonomi Global Menunjukkan Tren Positif",
      excerpt: "Analisis mendalam tentang perkembangan ekonomi global terkini.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      time: "4 hours ago"
    },
    {
      id: "gema-sora-3",
      title: "Perubahan Kebijakan Pemerintah",
      excerpt: "Pemerintah mengumumkan kebijakan baru yang berdampak luas.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
      time: "6 hours ago"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl text-[#2C4A64] mb-8">GEMA SORA</h1>
      <p className="text-gray-600 mb-8">Berita Politik, Ekonomi, dan Kebijakan Publik</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <Badge className="mb-2 bg-[#7DA5B8] text-white">GEMA SORA</Badge>
            <h3 className="text-xl mb-2 group-hover:text-[#7DA5B8] transition-colors text-[#91b9bf]">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="size-3" />
              <span>{article.time}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}