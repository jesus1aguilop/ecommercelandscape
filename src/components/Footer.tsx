import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/123456789', '_blank');
  };

  return (
    <footer className="bg-primary/5 border-t relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">4lifeStore</h3>
            <p className="text-sm text-muted-foreground">
              Tu tienda en línea de confianza para productos de calidad.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: info@estore.com</li>
              <li className="text-sm text-muted-foreground">Tel: (123) 456-7890</li>
              <li className="text-sm text-muted-foreground">
                Dirección: Calle Principal #123
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <FaXTwitter size={24} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Una iniciativa de jesu.dev 4lifeStore. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </footer>
  );
}