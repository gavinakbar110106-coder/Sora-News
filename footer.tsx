import { Youtube } from "lucide-react";
import { ChevronUp } from "lucide-react";
import soraLogoFooter from "figma:asset/abdfb2879cc0dee06da49a13d1277137d4d3c165.png";

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f8f8ee] mt-16 relative">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <img
                src={soraLogoFooter}
                alt="Sora - sorak realita"
                className="h-15"
                onClick={() => onPageChange("home")}
              />
            </div>
            <p className="text-sm text-gray-700">Cerdas, Ringan, dan Relevan</p>
          </div>

          <div>
            <h3 className="text-[#2C4A64] mb-4">KANAL</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange("gema-sora"); }}
                className="text-sm text-[#2C4A64] hover:underline"
              >
                GEMA SORA
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange("sora-vibe"); }}
                className="text-sm text-[#2C4A64] hover:underline"
              >
                SORA VIBE
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange("sora-kampus"); }}
                className="text-sm text-[#2C4A64] hover:underline"
              >
                SORA KAMPUS
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onPageChange("sora-rasa"); }}
                className="text-sm text-[#2C4A64] hover:underline"
              >
                SORA RASA
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#2C4A64] mb-4">FOLLOW ON :</h3>
            <div className="flex gap-3">
              <a 
                href="https://www.youtube.com/@SorakRealitaNews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF0000] transition-colors"
              >
                <Youtube className="size-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@sorakrealitanews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#2C4A64] transition-colors"
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/sorakrealita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#000000] transition-colors"
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/sorakrealitanews/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E4405F] transition-colors"
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-sm text-center text-[#2C4A64]">
          <p>© 2025. Sora All Rights Reserved</p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#7DA5B8] hover:bg-[#6A92A3] text-white rounded-full p-3 shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp className="size-6" />
      </button>
    </footer>
  );
}