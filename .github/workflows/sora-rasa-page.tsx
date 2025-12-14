import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Clock } from "lucide-react";

interface SoraRasaPageProps {
  onArticleClick: (articleId: string) => void;
}

export function SoraRasaPage({ onArticleClick }: SoraRasaPageProps) {
  const articles = [
    {
      id: "sora-rasa-1",
      title: "Resep Makanan Viral yang Mudah Dibuat",
      excerpt: "Kumpulan resep makanan viral TikTok yang simpel dan enak.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      time: "1 hour ago"
    },
    {
      id: "sora-rasa-2",
      title: "Kuliner Nusantara yang Wajib Dicoba",
      excerpt: "Eksplorasi cita rasa khas Indonesia dari berbagai daerah.",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
      time: "3 hours ago"
    },
    {
      id: "sora-rasa-3",
      title: "Kafe Aesthetic di Jakarta",
      excerpt: "Rekomendasi kafe instagramable dengan menu yang enak.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
      time: "5 hours ago"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl text-[#2C4A64] mb-8">SORA RASA</h1>
      <p className="text-gray-600 mb-8">Kuliner, Resep, dan Food Review</p>
      
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
            <Badge className="mb-2 bg-[#7DA5B8] text-white">SORA RASA</Badge>
            <h3 className="text-xl mb-2 group-hover:text-[#7DA5B8] transition-colors text-[#2C4A64]">{article.title}</h3>
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