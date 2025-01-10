import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";

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

const translations = {
  es: {
    welcome: "Bienvenido a 4lifeStore",
    subtitle: "Descubre nuestra selección de productos tecnológicos de alta calidad. Innovación y excelencia en cada detalle.",
    viewAll: "Ver todos los productos",
    featuredProducts: "Productos Destacados",
    viewInfo: "Ver información",
    buyNow: "Comprar ahora",
    addedToCart: "¡Producto agregado al carrito!",
  },
  en: {
    welcome: "Welcome to 4lifeStore",
    subtitle: "Discover our selection of high-quality tech products. Innovation and excellence in every detail.",
    viewAll: "View all products",
    featuredProducts: "Featured Products",
    viewInfo: "View information",
    buyNow: "Buy now",
    addedToCart: "Product added to cart!",
  }
};

const featuredProducts: Product[] = [
  {
    id: 1,
    name: {
      es: "Smartwatch Pro",
      en: "Pro Smartwatch"
    },
    description: {
      es: "Reloj inteligente con múltiples funciones",
      en: "Smart watch with multiple functions"
    },
    fullDescription: {
      es: "Un reloj inteligente avanzado con monitor de ritmo cardíaco, GPS integrado, y más de 20 modos deportivos. Resistente al agua y con una batería que dura hasta 7 días.",
      en: "An advanced smartwatch with heart rate monitor, integrated GPS, and more than 20 sport modes. Water resistant and with a battery that lasts up to 7 days."
    },
    price: 299.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=400",
  },
  {
    id: 2,
    name: {
      es: "Auriculares Premium",
      en: "Premium Headphones"
    },
    description: {
      es: "Auriculares inalámbricos con cancelación de ruido",
      en: "Wireless headphones with noise cancellation"
    },
    fullDescription: {
      es: "Experimenta un sonido cristalino con estos auriculares premium. Incluyen cancelación activa de ruido, 30 horas de batería y un diseño ergonómico para máxima comodidad.",
      en: "Experience crystal clear sound with these premium headphones. They include active noise cancellation, 30 hours of battery life and an ergonomic design for maximum comfort."
    },
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400",
  },
  {
    id: 3,
    name: {
      es: "Tablet Ultra",
      en: "Ultra Tablet"
    },
    description: {
      es: "Tablet de última generación",
      en: "Latest generation tablet"
    },
    fullDescription: {
      es: "Una tablet potente con pantalla 4K de 11 pulgadas, procesador de última generación y 256GB de almacenamiento. Perfecta para trabajo y entretenimiento.",
      en: "A powerful tablet with 11-inch 4K display, latest generation processor and 256GB storage. Perfect for work and entertainment."
    },
    price: 499.99,
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&h=400",
  },
  {
    id: 4,
    name: {
      es: "Cámara Digital Pro",
      en: "Pro Digital Camera"
    },
    description: {
      es: "Cámara profesional para fotografía",
      en: "Professional camera for photography"
    },
    fullDescription: {
      es: "Captura momentos increíbles con esta cámara digital profesional. Sensor de 24MP, grabación 4K y sistema de enfoque automático avanzado.",
      en: "Capture incredible moments with this professional digital camera. 24MP sensor, 4K recording and advanced autofocus system."
    },
    price: 799.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=400",
  },
  {
    id: 5,
    name: {
      es: "Altavoz Bluetooth",
      en: "Bluetooth Speaker"
    },
    description: {
      es: "Altavoz portátil resistente al agua",
      en: "Waterproof portable speaker"
    },
    fullDescription: {
      es: "Altavoz bluetooth portátil con sonido 360°, resistente al agua IPX7, 20 horas de batería y posibilidad de conectar múltiples unidades.",
      en: "Portable bluetooth speaker with 360° sound, IPX7 water resistant, 20 hours of battery life and the ability to connect multiple units."
    },
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=400",
  },
];

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [language, setLanguage] = useState<"es" | "en">("es");
  const t = translations[language];

  return (
    <div className="animate-fadeIn">
      <HeroSection translations={t} />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t.featuredProducts}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                language={language}
                onViewInfo={setSelectedProduct}
                translations={t}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/products">{t.viewAll}</Link>
            </Button>
          </div>
        </div>
      </section>

      <ProductDialog
        product={selectedProduct}
        language={language}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
        translations={t}
      />
    </div>
  );
};

export default Index;