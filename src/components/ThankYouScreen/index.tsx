import { useState } from 'react';
import GiftImage1 from '../../assets/images/skin-1.webp';
import GiftImage2 from '../../assets/images/skin-2.webp';
import GiftImage3 from '../../assets/images/skin-3.webp';
import useWindowSize from '../../hooks/useResizeObserver'; // Certifique-se de que o caminho está correto

const ThankYouScreen = ({ setCurrentPage, loadCardShop }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowSize = useWindowSize();

  const images = [GiftImage1, GiftImage2, GiftImage3];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const onLoadCardShop = () => {
    loadCardShop();
    setCurrentPage('endereco');
  };

  // Defina o tamanho da imagem com base nas dimensões da janela
  const imageWidth = windowSize.width
    ? windowSize.width < 768
      ? windowSize.width * 0.8
      : 400 // Largura máxima para telas maiores
    : 400;

  const imageHeight = imageWidth * 0.75; // Ajuste a proporção conforme necessário

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md mx-auto bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden">
        <section className="px-6 py-4 text-center">
          <h1 className="text-xl font-bold mb-4">Obrigado pelo seu tempo!</h1>
          <p className="text-base mb-2 leading-5">
            Agradecemos por compartilhar sua opinião conosco! Seu feedback nos ajuda a melhorar nossos produtos e serviços.
          </p>
          <p className="text-base font-semibold text-purple-600 mb-6">
            Como agradecimento, a <span className="text-pink-500 font-bold">Beleza na Web</span> oferece um kit especial para você!
          </p>
        </section>

        <div className="relative flex justify-center items-center mb-4 ">
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#d3d3d3] rounded-md p-2 shadow-md hover:bg-gray-200 transition"
          >
            ◀
          </button>

          <img
            src={images[currentIndex]}
            alt="Kit de Agradecimento"
            style={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              objectFit: 'contain',
            }}
          />

          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#d3d3d3] rounded-md p-2 shadow-md hover:bg-gray-200 transition"
          >
            ▶
          </button>
        </div>

        <div className="flex justify-center space-x-2 mb-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`rounded-full ${index === currentIndex ? 'bg-gray-500 w-6 h-2' : 'bg-gray-300 w-2 h-2'
                }`}
            ></div>
          ))}
        </div>
      </div>
      <button
        onClick={onLoadCardShop}
        className="flex items-center justify-center bg-purple-700 w-full max-w-md py-3 rounded-lg mt-6 text-white font-semibold"
      >
        Cadastrar Endereço
      </button>
    </main>
  );
};

export default ThankYouScreen;
