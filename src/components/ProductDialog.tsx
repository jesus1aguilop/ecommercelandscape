import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ProductDialogProps {
  product: Product | null;
  language: "es" | "en";
  onOpenChange: (open: boolean) => void;
  translations: {
    buyNow: string;
    addedToCart: string;
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

export const ProductDialog = ({ product, language, onOpenChange, translations }: ProductDialogProps) => {
  const { toast } = useToast();

  const handleBuy = () => {
    toast({
      title: translations.addedToCart,
      duration: 2000,
    });
  };

  if (!product) return null;

  return (
    <Dialog open={!!product} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{product.name[language]}</DialogTitle>
          <DialogDescription>
            <img
              src={product.image}
              alt={product.name[language]}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{product.fullDescription[language]}</p>
            <p className="text-lg font-bold mb-4">
              ${product.price.toFixed(2)}
            </p>
            <Button 
              className="w-full" 
              onClick={handleBuy}
            >
              {translations.buyNow}
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};