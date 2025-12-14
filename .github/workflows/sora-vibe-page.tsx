import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Clock } from "lucide-react";

interface SoraVibePageProps {
  onArticleClick: (articleId: string) => void;
}

export function SoraVibePage({ onArticleClick }: SoraVibePageProps) {
  const articles = [
    {
      id: "sora-vibe-1",
      title: "Tren Fashion Terbaru 2025",
      excerpt: "Eksplorasi gaya fashion terkini yang sedang viral di kalangan anak muda.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
      time: "1 hour ago"
    },
    {
      id: "sora-vibe-2",
      title: "Musik Indie Lokal yang Wajib Didengar",
      excerpt: "Daftar musisi indie lokal yang sedang naik daun.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
      time: "3 hours ago"
    },
    {
      id: "sora-vibe-3",
      title: "Destinasi Wisata Hits untuk Gen Z",
      excerpt: "Rekomendasi tempat wisata yang instagramable dan ramah kantong.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop",
      time: "5 hours ago"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl text-[#2C4A64] mb-8">SORA VIBE</h1>
      <p className="text-gray-600 mb-8">Lifestyle, Entertainment, dan Pop Culture</p>
      
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
            <Badge className="mb-2 bg-[#7DA5B8] text-white">SORA VIBE</Badge>
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