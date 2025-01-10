import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  translations: {
    welcome: string;
    subtitle: string;
    viewAll: string;
  };
}

export const HeroSection = ({ translations }: HeroSectionProps) => {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {translations.welcome}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {translations.subtitle}
            </p>
            <Button asChild>
              <Link to="/products">{translations.viewAll}</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=400"
              alt="Tech products"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};