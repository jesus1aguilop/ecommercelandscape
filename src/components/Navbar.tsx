import { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  es: {
    home: "Inicio",
    products: "Productos",
    about: "Sobre Nosotros",
    contact: "Contáctanos",
    language: "Español/Colombia"
  },
  en: {
    home: "Home",
    products: "Products",
    about: "About Us",
    contact: "Contact Us",
    language: "English/USA"
  }
};

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const { language, setLanguage } = useLanguage();

  const t = translations[language];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed w-full z-50 glass-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3d61e228-8e83-42fb-9cdd-ae58c0b74766.png" 
              alt="4Life Store Logo" 
              className="h-12 w-auto" // Aumentado de h-8 a h-12
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t.home}
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              {t.products}
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              {t.about}
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              {t.contact}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      {language === "es" ? "ES" : "EN"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setLanguage("es")}>
                      Español
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("en")}>
                      English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t.language}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </nav>
  );
}