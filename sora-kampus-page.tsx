import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Clock } from "lucide-react";

interface SoraKampusPageProps {
  onArticleClick: (articleId: string) => void;
}

export function SoraKampusPage({ onArticleClick }: SoraKampusPageProps) {
  const articles = [
    {
      id: "sora-kampus-1",
      title: "Tips Sukses Menghadapi Ujian Akhir Semester",
      excerpt: "Strategi belajar efektif untuk memaksimalkan hasil UAS.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      time: "2 hours ago"
    },
    {
      id: "sora-kampus-2",
      title: "Organisasi Kampus dan Manfaatnya untuk Karir",
      excerpt: "Mengapa aktif di organisasi kampus penting untuk masa depan.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      time: "4 hours ago"
    },
    {
      id: "sora-kampus-3",
      title: "Beasiswa Kuliah yang Masih Dibuka",
      excerpt: "Informasi beasiswa dalam dan luar negeri untuk mahasiswa.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
      time: "6 hours ago"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl text-[#2C4A64] mb-8">SORA KAMPUS</h1>
      <p className="text-gray-600 mb-8">Informasi Pendidikan dan Kehidupan Kampus</p>
      
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
            <Badge className="mb-2 bg-[#7DA5B8] text-white">SORA KAMPUS</Badge>
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