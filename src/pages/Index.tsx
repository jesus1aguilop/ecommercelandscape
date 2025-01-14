import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";
import { useLanguage } from "@/contexts/LanguageContext";

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

const products: Product[] = [
  {
    id: 1,
    name: {
      es: "Cámara Digital Profesional",
      en: "Professional Digital Camera"
    },
    description: {
      es: "Cámara DSLR de alta resolución con múltiples funciones",
      en: "High-resolution DSLR camera with multiple features"
    },
    fullDescription: {
      es: "Cámara profesional con sensor full-frame, grabación 4K, pantalla táctil y conectividad WiFi integrada.",
      en: "Professional camera with full-frame sensor, 4K recording, touch screen and built-in WiFi connectivity."
    },
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
  },
  {
    id: 2,
    name: {
      es: "Laptop Ultradelgada",
      en: "Ultrathin Laptop"
    },
    description: {
      es: "Portátil ligero y potente para profesionales",
      en: "Light and powerful laptop for professionals"
    },
    fullDescription: {
      es: "Laptop con procesador de última generación, 16GB RAM, SSD de 512GB y pantalla 4K.",
      en: "Laptop with latest generation processor, 16GB RAM, 512GB SSD and 4K display."
    },
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23"
  },
  {
    id: 3,
    name: {
      es: "Auriculares Inalámbricos",
      en: "Wireless Headphones"
    },
    description: {
      es: "Auriculares con cancelación de ruido activa",
      en: "Headphones with active noise cancellation"
    },
    fullDescription: {
      es: "Auriculares premium con 30 horas de batería, cancelación de ruido y sonido de alta fidelidad.",
      en: "Premium headphones with 30-hour battery life, noise cancellation and high-fidelity sound."
    },
    price: 299.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
  },
  {
    id: 4,
    name: {
      es: "Smartwatch Deportivo",
      en: "Sports Smartwatch"
    },
    description: {
      es: "Reloj inteligente con GPS y monitor cardíaco",
      en: "Smart watch with GPS and heart rate monitor"
    },
    fullDescription: {
      es: "Smartwatch resistente al agua con GPS, monitor de ritmo cardíaco y más de 20 modos deportivos.",
      en: "Water-resistant smartwatch with GPS, heart rate monitor and over 20 sports modes."
    },
    price: 199.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 5,
    name: {
      es: "Tablet Gráfica",
      en: "Graphics Tablet"
    },
    description: {
      es: "Tablet para diseñadores y artistas digitales",
      en: "Tablet for designers and digital artists"
    },
    fullDescription: {
      es: "Tablet con 8192 niveles de presión, área activa grande y lápiz sin batería.",
      en: "Tablet with 8192 pressure levels, large active area and battery-free pen."
    },
    price: 249.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  },
  {
    id: 6,
    name: {
      es: "Altavoz Inteligente",
      en: "Smart Speaker"
    },
    description: {
      es: "Altavoz con asistente virtual integrado",
      en: "Speaker with built-in virtual assistant"
    },
    fullDescription: {
      es: "Altavoz inteligente con sonido 360°, control por voz y compatibilidad con múltiples servicios de streaming.",
      en: "Smart speaker with 360° sound, voice control and compatibility with multiple streaming services."
    },
    price: 129.99,
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
  },
  {
    id: 7,
    name: {
      es: "Monitor Gaming",
      en: "Gaming Monitor"
    },
    description: {
      es: "Monitor curvo de alta frecuencia de actualización",
      en: "Curved monitor with high refresh rate"
    },
    fullDescription: {
      es: "Monitor gaming de 27\" con 165Hz, 1ms de respuesta y tecnología G-Sync.",
      en: "27\" gaming monitor with 165Hz, 1ms response time and G-Sync technology."
    },
    price: 399.99,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
  },
  {
    id: 8,
    name: {
      es: "Teclado Mecánico",
      en: "Mechanical Keyboard"
    },
    description: {
      es: "Teclado gaming con switches mecánicos",
      en: "Gaming keyboard with mechanical switches"
    },
    fullDescription: {
      es: "Teclado mecánico con retroiluminación RGB, switches Cherry MX y reposamuñecas ergonómico.",
      en: "Mechanical keyboard with RGB backlight, Cherry MX switches and ergonomic wrist rest."
    },
    price: 149.99,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
  },
  {
    id: 9,
    name: {
      es: "Router WiFi 6",
      en: "WiFi 6 Router"
    },
    description: {
      es: "Router de última generación con WiFi 6",
      en: "Next-generation router with WiFi 6"
    },
    fullDescription: {
      es: "Router con WiFi 6, velocidades de hasta 5400Mbps y cobertura para hogares grandes.",
      en: "Router with WiFi 6, speeds up to 5400Mbps and coverage for large homes."
    },
    price: 279.99,
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
  },
  {
    id: 10,
    name: {
      es: "Impresora 3D",
      en: "3D Printer"
    },
    description: {
      es: "Impresora 3D para makers y entusiastas",
      en: "3D printer for makers and enthusiasts"
    },
    fullDescription: {
      es: "Impresora 3D con volumen de impresión grande, doble extrusor y pantalla táctil.",
      en: "3D printer with large print volume, dual extruder and touch screen."
    },
    price: 599.99,
    image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632"
  },
  {
    id: 11,
    name: {
      es: "Drone con Cámara 4K",
      en: "4K Camera Drone"
    },
    description: {
      es: "Drone profesional con cámara de alta resolución",
      en: "Professional drone with high-resolution camera"
    },
    fullDescription: {
      es: "Drone con cámara 4K, 30 minutos de vuelo, GPS y seguimiento automático.",
      en: "Drone with 4K camera, 30 minutes flight time, GPS and automatic tracking."
    },
    price: 799.99,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4"
  },
  {
    id: 12,
    name: {
      es: "Consola de Videojuegos",
      en: "Gaming Console"
    },
    description: {
      es: "Última generación de consolas gaming",
      en: "Latest generation gaming console"
    },
    fullDescription: {
      es: "Consola con procesador de última generación, 1TB de almacenamiento y ray tracing.",
      en: "Console with latest generation processor, 1TB storage and ray tracing."
    },
    price: 499.99,
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170"
  },
  {
    id: 13,
    name: {
      es: "Proyector 4K",
      en: "4K Projector"
    },
    description: {
      es: "Proyector de cine en casa con resolución 4K",
      en: "Home theater projector with 4K resolution"
    },
    fullDescription: {
      es: "Proyector 4K con 3000 lúmenes, HDR y corrección de keystone automática.",
      en: "4K projector with 3000 lumens, HDR and automatic keystone correction."
    },
    price: 899.99,
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369"
  },
  {
    id: 14,
    name: {
      es: "Cargador Inalámbrico",
      en: "Wireless Charger"
    },
    description: {
      es: "Base de carga rápida inalámbrica",
      en: "Fast wireless charging pad"
    },
    fullDescription: {
      es: "Cargador inalámbrico con carga rápida de 15W y compatibilidad universal.",
      en: "Wireless charger with 15W fast charging and universal compatibility."
    },
    price: 39.99,
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
  },
  {
    id: 15,
    name: {
      es: "Webcam 4K",
      en: "4K Webcam"
    },
    description: {
      es: "Cámara web profesional para streaming",
      en: "Professional webcam for streaming"
    },
    fullDescription: {
      es: "Webcam 4K con micrófono dual, corrección de luz y enfoque automático.",
      en: "4K webcam with dual microphone, light correction and autofocus."
    },
    price: 159.99,
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15"
  }
];

const translations = {
  es: {
    featuredProducts: "Productos Destacados",
    viewInfo: "Ver Info",
    buyNow: "Comprar Ahora",
    addedToCart: "¡Agregado al carrito!",
  },
  en: {
    featuredProducts: "Featured Products",
    viewInfo: "View Info",
    buyNow: "Buy Now",
    addedToCart: "Added to cart!",
  }
};

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <h2 className="text-3xl font-bold text-center mb-8">
        {t.featuredProducts}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            language={language}
            onViewInfo={setSelectedProduct}
            translations={{
              viewInfo: t.viewInfo,
            }}
          />
        ))}
      </div>
      <ProductDialog
        product={selectedProduct}
        language={language}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
        translations={{
          buyNow: t.buyNow,
          addedToCart: t.addedToCart,
        }}
      />
    </div>
  );
};

export default Index;