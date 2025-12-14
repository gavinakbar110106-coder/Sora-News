import { useState, useEffect } from "react";
import { X, Search } from "lucide-react";
import { articleData } from "../utils/articles-data";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onArticleClick: (articleId: string) => void;
}

export function SearchModal({ isOpen, onClose, onArticleClick }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Search through article data
    const results: any[] = [];
    Object.keys(articleData).forEach((key) => {
      const article = articleData[key];
      if (
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        results.push({ ...article, id: key });
      }
    });

    setSearchResults(results);
  }, [searchQuery]);

  if (!isOpen) return null;

  const handleArticleClick = (articleId: string) => {
    onArticleClick(articleId);
    onClose();
    setSearchQuery("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Search className="size-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari artikel..."
            className="flex-1 outline-none text-lg"
            autoFocus
          />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="size-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(80vh-80px)]">
          {searchQuery.trim() !== "" && searchResults.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600 mb-2">Mohon Maaf</p>
              <p className="text-gray-500">
                Pencarian dari kata kunci "<span className="text-[#2C4A64]">{searchQuery}</span>" tidak ditemukan
              </p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="p-4">
              {searchResults.map((article, index) => (
                <div
                  key={index}
                  onClick={() => handleArticleClick(article.id)}
                  className="p-4 hover:bg-gray-50 cursor-pointer rounded-lg mb-2 transition-colors"
                >
                  <div className="flex gap-4">
                    {article.image && (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1">
                      <span className="text-xs text-[#7DA5B8] mb-1 block">{article.category}</span>
                      <h3 className="text-[#2C4A64] mb-1">{article.title}</h3>
                      <span className="text-xs text-gray-500">{article.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-400">
              <Search className="size-12 mx-auto mb-4 opacity-50" />
              <p>Mulai ketik untuk mencari artikel</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
