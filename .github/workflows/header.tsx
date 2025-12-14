import { useState } from "react";
import { Menu, Search, User, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import soraLogo from "figma:asset/15e4c515c94454fd8e950c1259c471ffa50e6e73.png";
import { MobileSidebar } from "./mobile-sidebar";
import { SearchModal } from "./search-modal";

interface HeaderProps {
  onSignUpClick: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
  onArticleClick: (articleId: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Header({
  onSignUpClick,
  currentPage,
  onPageChange,
  onArticleClick,
  isDarkMode,
  onToggleDarkMode,
}: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    { id: "home", label: "HOME" },
    { id: "gema-sora", label: "GEMA SORA" },
    { id: "sora-vibe", label: "SORA VIBE" },
    { id: "sora-kampus", label: "SORA KAMPUS" },
    { id: "sora-rasa", label: "SORA RASA" },
    { id: "partnes", label: "PARTNES" },
    { id: "redaksi", label: "REDAKSI" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      <header className="bg-[#2C4A64] sticky top-0 z-50">
        {/* Main Header */}
        <div className="flex items-center justify-between px-4 h-20 md:h-25">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onPageChange("home")}
          >
            <img
              src={soraLogo}
              alt="Sora - sorak realita"
              className="h-18 md:h-22 mt-[-12px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white">
            {categories.map((category) => (
              <a
                key={category.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(category.id);
                }}
                className="relative hover:text-gray-300 transition-colors pb-1"
              >
                {category.label}
                {currentPage === category.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600"></span>
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop Buttons */}
            <Button
              onClick={onSignUpClick}
              className="bg-[#91b9bf] hover:bg-[#7DA5B8] text-[#2C4A64] rounded-full px-6 hidden md:block"
            >
              SIGN UP
            </Button>

            {/* Mobile Icons - Login, Search, Dark Mode, Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={onSignUpClick}
              >
                <User className="size-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="size-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={onToggleDarkMode}
              >
                {isDarkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="size-6" />
              </Button>
            </div>

            {/* Desktop Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hidden md:flex"
              onClick={onToggleDarkMode}
            >
              {isDarkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Sub-header with horizontal scroll */}
        <div className="md:hidden bg-[#4f74a3] overflow-x-auto">
          <div className="flex gap-4 px-4 py-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onPageChange(category.id)}
                className={`text-white text-sm whitespace-nowrap px-3 py-1 rounded transition-colors ${
                  currentPage === category.id
                    ? "bg-red-600"
                    : "hover:bg-white/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onPageChange={onPageChange}
        onSignUpClick={onSignUpClick}
        currentPage={currentPage}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onArticleClick={onArticleClick}
      />
    </>
  );
}