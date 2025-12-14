import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface CategorySectionProps {
  onArticleClick: (articleId: string) => void;
}

const categories = [
  {
    name: "GEMA SORA",
    articles: [
      {
        id: "11",
        title: "Breaking News: Perkembangan Politik Terkini",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
        time: "2 hours ago"
      },
      {
        id: "12",
        title: "Ekonomi Global Menunjukkan Tren Positif",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
        time: "4 hours ago"
      },
      {
        id: "13",
        title: "Perubahan Kebijakan Pemerintah",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
        time : "6 hours ago",
      }
    ]
  },
  {
    name: "SORA KAMPUS",
    articles: [
      {
        id: "14",
        title: "Tips Sukses Menghadapi Ujian Akhir Semester",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
        time: "2 hours ago"
      },
      {
        id: "15",
        title: "Organisasi Kampus dan Manfaatnya untuk Karir",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
        time: "4 days ago"
      },
      {
        id: "16",
        title: "Beasiswa Kuliah yang Masih Dibuka",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
        time: "6 hours ago",
      }
    ]
  },
  {
    name: "SORA VIBE",
    articles: [
      {
        id: "17",
        title: "Startups Attract Record Venture Capital",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
        time: "1 hours ago"
      },
      {
        id: "18",
        title: "Retail Sector Sees Digital Transformation",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
        time: "3 hours ago"
      },
      {
        id: "19",
        title: "Destinasi Wisata Hits untuk Gen Z",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop",
        time: "5 hours ago",
      }
    ]
  }
];

export function CategorySection({ onArticleClick }: CategorySectionProps) {
  return (
    <section className="mt-12">
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-10">
          <h2 className="text-2xl mb-4 text-[#2C4A64]">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.articles.map((article) => (
              <div 
                key={article.id} 
                className="flex gap-4 group cursor-pointer"
                onClick={() => onArticleClick(article.id)}
              >
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2 border-[#2C4A64] text-[#2C4A64]">{category.name}</Badge>
                  <h3 className="text-sm mb-1 group-hover:text-[#7DA5B8] transition-colors text-[#2C4A64]">{article.title}</h3>
                  <span className="text-xs text-gray-500">{article.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}