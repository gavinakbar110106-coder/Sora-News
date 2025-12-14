import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { LoginDialog } from "./components/login-dialog";
import { HomePage } from "./components/pages/home-page";
import { GemaSoraPage } from "./components/pages/gema-sora-page";
import { SoraVibePage } from "./components/pages/sora-vibe-page";
import { SoraKampusPage } from "./components/pages/sora-kampus-page";
import { SoraRasaPage } from "./components/pages/sora-rasa-page";
import { PartnesPage } from "./components/pages/partnes-page";
import { RedaksiPage } from "./components/pages/redaksi-page";
import { ContactPage } from "./components/pages/contact-page";
import { ArticlePage } from "./components/pages/article-page";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentArticle, setCurrentArticle] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleArticleClick = (articleId: string) => {
    setCurrentArticle(articleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromArticle = () => {
    setCurrentArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (page: string) => {
    setCurrentArticle(null); // Exit article view when changing pages
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Auto scroll to top when page changes (except when opening login dialog)
  useEffect(() => {
    if (!isLoginOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, currentArticle]);

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderPage = () => {
    if (currentArticle) {
      return <ArticlePage articleId={currentArticle} onBack={handleBackFromArticle} onPageChange={handlePageChange} />;
    }

    switch (currentPage) {
      case "home":
        return <HomePage onArticleClick={handleArticleClick} />;
      case "gema-sora":
        return <GemaSoraPage onArticleClick={handleArticleClick} />;
      case "sora-vibe":
        return <SoraVibePage onArticleClick={handleArticleClick} />;
      case "sora-kampus":
        return <SoraKampusPage onArticleClick={handleArticleClick} />;
      case "sora-rasa":
        return <SoraRasaPage onArticleClick={handleArticleClick} />;
      case "partnes":
        return <PartnesPage />;
      case "redaksi":
        return <RedaksiPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onArticleClick={handleArticleClick} />;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#00000] text-[#91b9bf]' : 'bg-white text-gray-900'} relative`}>
      <Header 
        onSignUpClick={() => setIsLoginOpen(true)} 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onArticleClick={handleArticleClick}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      
      <main className="relative">
        {renderPage()}
      </main>
      
      <Footer onPageChange={handlePageChange} />
      <LoginDialog isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}