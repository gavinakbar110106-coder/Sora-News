import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Clock, User } from "lucide-react";
import { articleData } from "../../utils/articles-data";

interface ArticlePageProps {
  articleId: string;
  onBack: () => void;
  onPageChange: (page: string) => void;
}

export function ArticlePage({ articleId, onBack, onPageChange }: ArticlePageProps) {
  const [comments, setComments] = useState([
    { id: 1, name: "Ahmad", text: "Artikel yang sangat menarik dan informatif!", time: "2 hours ago" },
    { id: 2, name: "Siti", text: "Terima kasih atas informasinya", time: "5 hours ago" }
  ]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });

  const article = articleData[articleId] || {
    id: articleId,
    category: "World",
    title: "Global Summit Reaches Historic Climate Agreement",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
    time: "2 hours ago",
    author: "John Doe",
    content: `
      <p>World leaders from over 150 countries gathered at the Global Climate Summit to address one of the most pressing issues of our time: climate change. After days of intense negotiations and discussions, the summit concluded with a historic agreement that sets ambitious targets for reducing carbon emissions by 2030.</p>

      <h2>Key Points of the Agreement</h2>
      <p>The agreement includes several groundbreaking commitments:</p>
      <ul>
        <li>Reduction of global carbon emissions by 45% by 2030</li>
        <li>Investment of $100 billion annually in renewable energy infrastructure</li>
        <li>Protection of 30% of the world's land and oceans by 2030</li>
        <li>Phase-out of coal power plants in developed nations by 2035</li>
      </ul>

      <h2>Global Response</h2>
      <p>Environmental groups have praised the agreement as a significant step forward in the fight against climate change. "This is a momentous occasion," said Maria Rodriguez, Director of the Global Environmental Alliance. "For the first time, we have a truly comprehensive framework that involves all major economies in meaningful climate action."</p>

      <p>However, some critics argue that the targets, while ambitious, may still fall short of what is needed to prevent the most catastrophic effects of climate change. Climate scientists have warned that limiting global warming to 1.5 degrees Celsius above pre-industrial levels will require even more aggressive action.</p>

      <h2>Implementation Challenges</h2>
      <p>The success of this agreement will depend on effective implementation and enforcement mechanisms. Each participating country will be required to submit detailed action plans within six months and undergo regular reviews of their progress.</p>

      <p>Developing nations have been assured financial and technical support to help them transition to cleaner energy sources while maintaining economic growth. This represents a significant commitment from wealthy nations to support global climate action.</p>

      <h2>Looking Ahead</h2>
      <p>As we move forward, the true test will be whether nations can translate these commitments into concrete actions. The next Global Climate Summit, scheduled for 2027, will be crucial in assessing progress and adjusting strategies as needed.</p>

      <p>The historic agreement reached today represents hope for a sustainable future, but it also serves as a reminder that the hard work of implementation lies ahead. The world is watching, and the stakes have never been higher.</p>
    `
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.text) {
      setComments([
        { id: comments.length + 1, name: newComment.name, text: newComment.text, time: "Just now" },
        ...comments
      ]);
      setNewComment({ name: "", text: "" });
    }
  };

return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="mb-6 text-[#7DA5B8] hover:underline"
      >
        ← Kembali
      </button>


      <article>
        <Badge className="mb-4 bg-[#7DA5B8] text-white">{article.category}</Badge>
        <h1 className="text-4xl text-[#2C4A64] mb-4">{article.title}</h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <User className="size-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            <span>{article.time}</span>
          </div>
        </div>

        <div className="mb-8">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full rounded-lg"
          />
        </div>

        <div 
          className="prose prose-lg max-w-none text-gray-700 mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75'
          }}
        />

        {/* Comments Section */}
        <div className="border-t border-gray-300 pt-8">
          <h2 className="text-2xl text-[#2C4A64] mb-6">Komentar ({comments.length})</h2>

          {/* Comment Form */}
          <form onSubmit={handleSubmitComment} className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg text-[#2C4A64] mb-4">Tulis Komentar</h3>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nama Anda"
                value={newComment.name}
                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#7DA5B8]"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Tulis komentar Anda..."
                value={newComment.text}
                onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#7DA5B8]"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              Kirim
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#7DA5B8] rounded-full flex items-center justify-center text-white">
                    {comment.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#2C4A64]">{comment.name}</span>
                      <span className="text-xs text-gray-500">{comment.time}</span>
                    </div>
                    <p className="text-gray-700">{comment.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}