import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { language } = useLanguage();
  
  const content = {
    es: {
      title: "Sobre Nosotros",
      description: "Somos una tienda especializada en tecnología de última generación. Nos dedicamos a ofrecer los mejores productos tecnológicos con un servicio personalizado y experto. Nuestro compromiso es brindar soluciones innovadoras que mejoren la vida digital de nuestros clientes.",
      mission: "Nuestra misión es proporcionar tecnología de calidad y servicio excepcional a precios competitivos.",
      vision: "Buscamos ser líderes en el mercado tecnológico, siendo reconocidos por nuestra excelencia y compromiso con la satisfacción del cliente."
    },
    en: {
      title: "About Us",
      description: "We are a store specialized in cutting-edge technology. We are dedicated to offering the best tech products with personalized and expert service. Our commitment is to provide innovative solutions that enhance our customers' digital lives.",
      mission: "Our mission is to provide quality technology and exceptional service at competitive prices.",
      vision: "We seek to be leaders in the technology market, being recognized for our excellence and commitment to customer satisfaction."
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {content[language].title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-gray-700">
            {content[language].description}
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-3">
                {language === 'es' ? 'Misión' : 'Mission'}
              </h3>
              <p className="text-gray-600">
                {content[language].mission}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-3">
                {language === 'es' ? 'Visión' : 'Vision'}
              </h3>
              <p className="text-gray-600">
                {content[language].vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};