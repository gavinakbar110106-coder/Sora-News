import { X } from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onPageChange: (page: string) => void;
  onSignUpClick: () => void;
  currentPage: string;
}

export function MobileSidebar({ isOpen, onClose, onPageChange, onSignUpClick, currentPage }: MobileSidebarProps) {
  if (!isOpen) return null;

  const handleNavigation = (page: string) => {
    onPageChange(page);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[60] md:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-[#2C4A64] z-[70] md:hidden shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <h2 className="text-white text-lg">Menu</h2>
          <button onClick={onClose} className="text-white">
            <X className="size-6" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-1">
          <button
            onClick={() => {
              onSignUpClick();
              onClose();
            }}
            className="text-white bg-[#91b9bf] hover:bg-[#7DA5B8] rounded-md py-3 px-4 text-left transition-colors mb-4"
          >
            SIGN UP
          </button>

          <button
            onClick={() => handleNavigation("home")}
            className={`text-white hover:bg-white/10 rounded-md py-3 px-4 text-left transition-colors ${
              currentPage === "home" ? "bg-white/20" : ""
            }`}
          >
            HOME
          </button>

          <button
            onClick={() => handleNavigation("gema-sora")}
            className={`text-white hover:bg-white/10 rounded-md py-3 px-4 text-left transition-colors ${
              currentPage === "gema-sora" ? "bg-white/20" : ""
            }`}
          >
            GEMA SORA
          </button>

          <button
            onClick={() => handleNavigation("sora-vibe")}
            className={`text-white hover:bg-white/10 rounded-md py-3 px-4 text-left transition-colors ${
              currentPage === "sora-vibe" ? "bg-white/20" : ""
            }`}
          >
            SORA VIBE
          </button>

          <button
            onClick={() => handleNavigation("sora-kampus")}
            className={`text-white hover:bg-white/10 rounded-md py-3 px-4 text-left transition-colors ${
              currentPage === "sora-kampus" ? "bg-white/20" : ""
            }`}
          >
            SORA KAMPUS
          </button>

          <button
            onClick={() => handleNavigation("sora-rasa")}
            className={`text-white hover:bg-white/10 rounded-md py-3 px-4 text-left transition-colors ${
              currentPage === "sora-rasa" ? "bg-white/20" : ""
            }`}
          >
            SORA RASA
          </button>

          <button
            onClick={() => handleNavigation("partnes")}
            className={`text-white hover:bg-white/10 rounded-md py-3 px-4 text-left transition-colors ${
              currentPage === "partnes" ? "bg-white/20" : ""
            }`}
          >
            PARTNES
          </button>

          <button
            onClick={() => handleNavigation("redaksi")}
            className={`text-white hover:bg-white/10 rounded-md py-3 px-4 text-left transition-colors ${
              currentPage === "redaksi" ? "bg-white/20" : ""
            }`}
          >
            REDAKSI
          </button>

          <button
            onClick={() => handleNavigation("contact")}
            className={`text-white hover:bg-white/10 rounded-md py-3 px-4 text-left transition-colors ${
              currentPage === "contact" ? "bg-white/20" : ""
            }`}
          >
            CONTACT
          </button>
        </div>
      </div>
    </>
  );
}
