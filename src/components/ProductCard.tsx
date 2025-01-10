import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  language: "es" | "en";
  onViewInfo: (product: Product) => void;
  translations: {
    viewInfo: string;
  };
}

interface Product {
  id: number;
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  fullDescription: {
    es: string;
    en: string;
  };
  price: number;
  image: string;
}

export const ProductCard = ({ product, language, onViewInfo, translations }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={product.image}
        alt={product.name[language]}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name[language]}</h3>
        <p className="text-muted-foreground mb-4">
          {product.description[language]}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">
            ${product.price.toFixed(2)}
          </span>
          <Button
            variant="outline"
            onClick={() => onViewInfo(product)}
          >
            {translations.viewInfo}
          </Button>
        </div>
      </div>
    </div>
  );
};