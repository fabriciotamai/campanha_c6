import { useState } from 'react';
import CreamyImage1 from '../../assets/images/skin-1.webp';
import CreamyImage2 from '../../assets/images/skin-2.webp';
import CreamyImage3 from '../../assets/images/skin-3.webp';
import WellakitOne from '../../assets/kitwellas.webp';
import WellaskitFor from '../../assets/kitwellas4.webp';
import WellakiFive from '../../assets/kitwellas5.webp';
import WellasSix from '../../assets/kitwellas6.webp';
import WellakiTwo from '../../assets/Wellaskit2.webp';
import WellakiTHere from '../../assets/wellaskit3.webp';

// Tipagem de Props
interface ThankYouScreenProps {
  selectedBrand: 'Wella' | 'Creamy' | 'Eudora'; // Define marcas aceitas
  setCurrentPage: (page: string) => void; // Função para mudar de página
}

const ThankYouScreen = ({ selectedBrand, setCurrentPage }: ThankYouScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mapeamento das imagens por marca
  const brandImages = {
    Wella: [WellakitOne, WellakiTwo, WellakiTHere, WellaskitFor, WellakiFive, WellasSix],
    Creamy: [CreamyImage1, CreamyImage2, CreamyImage3],
    Eudora: [CreamyImage1, CreamyImage2, CreamyImage3],
  };

  const images = brandImages[selectedBrand] || [];

  // Navegação entre as imagens
  const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  // Função chamada ao clicar no botão "Cadastrar Endereço"
  const onLoadCardShop = () => {
    setCurrentPage('endereco'); // Redireciona para a página "endereco"
  };

  // Exibir mensagem de erro caso `selectedBrand` seja inválido
  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        <p>Erro: Marca selecionada inválida.</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden">
        {/* Cabeçalho */}
        <section className="px-6 py-4 text-center">
          <h1 className="text-xl md:text-2xl font-bold mb-4">Obrigado pelo seu tempo!</h1>
          <p className="text-base mb-2 leading-5 md:leading-6">
            Agradecemos por compartilhar sua opinião conosco! Seu feedback nos ajuda a melhorar nossos produtos e
            serviços.
          </p>
          <p className="text-base font-semibold text-purple-600 mb-6">
            Como agradecimento, a <span className="text-pink-500 font-bold">Beleza na Web</span> oferece um kit
            especial para você!
          </p>
        </section>

        {/* Imagens e controles */}
        <div className="relative flex justify-center items-center mb-6">
          <button
            onClick={prevImage}
            aria-label="Imagem anterior"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#d3d3d3] rounded-md p-2 shadow-md hover:bg-gray-300 transition z-10"
          >
            ◀
          </button>

          <img
            src={images[currentIndex]}
            alt={`Kit de Agradecimento - ${selectedBrand}`}
            className="w-full max-w-full object-contain rounded-lg"
          />

          <button
            onClick={nextImage}
            aria-label="Próxima imagem"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#d3d3d3] rounded-md p-2 shadow-md hover:bg-gray-300 transition z-10"
          >
            ▶
          </button>
        </div>

        {/* Indicador de progresso */}
        <div className="flex justify-center space-x-2 mb-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`rounded-full ${index === currentIndex ? 'bg-gray-500 w-6 h-2' : 'bg-gray-300 w-2 h-2'}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Botão para cadastrar endereço */}
      <button
        onClick={onLoadCardShop}
        className="flex items-center justify-center bg-purple-700 w-full max-w-sm sm:max-w-md py-3 rounded-lg mt-6 text-white font-semibold hover:bg-purple-800 transition"
      >
        Cadastrar Endereço
      </button>
    </main>
  );
};

export default ThankYouScreen;
