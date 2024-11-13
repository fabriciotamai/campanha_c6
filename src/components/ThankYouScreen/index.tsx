// src/components/ThankYouScreen.js
import { useState } from 'react';
import GiftImage1 from '../../assets/images/skin-1.webp';
import GiftImage2 from '../../assets/images/skin-2.webp';
import GiftImage3 from '../../assets/images/skin-3.webp';

const ThankYouScreen = ({ setCurrentPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [GiftImage1, GiftImage2, GiftImage3];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="flex flex-col items-center justify-center text-white rounded-xl shadow-lg ">
      <section className="bg-white text-gray-900 rounded-xl shadow-lg w-full max-w-md mx-auto text-center overflow-hidden">
        <section className="px-4 py-1">
          <h1 className="text-xl font-bold mb-4">Obrigado pelo seu tempo!</h1>
          <p className="text-base mb-2 leading-5 ">
            Agradecemos por compartilhar sua opinião conosco! Seu feedback nos ajuda a melhorar nossos produtos e serviços.
          </p>
          <p className="text-[1rem] font-semibold text-purple-600 mb-6">
            Como agradecimento, a <span className="text-pink-500 font-bold">Beleza na Web</span> oferece um kit especial para você!
          </p>
        </section>

        <div className="relative flex justify-center mb-2">
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-md px-4 py-2 shadow-md hover:bg-gray-200 transition ml-4">
            ◀
          </button>

          <img src={images[currentIndex]} alt="Kit de Agradecimento" />
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-md px-4 py-2 mr-4 shadow-md hover:bg-gray-200 transition"
          >
            ▶
          </button>
        </div>

        <div className="flex justify-center space-x-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`rounded-full border-2 ${index === currentIndex ? 'bg-[#c2c2c2] w-8 h-3' : 'w-3 h-3 border-[#9fa8d0]'}`}
            ></div>
          ))}
        </div>

        <strong className="text-[0.85rem] px-8">Creamy </strong>
        <section className="px-10 mt-6">
          <button
            onClick={() => setCurrentPage('endereco')}
            className="bg-[#a000e4] text-[0.85rem] text-white font-bold py-2 px-6 rounded-lg w-full mt-4 hover:bg-purple-700 transition duration-300">
            Cadastrar Endereço
          </button>
        </section>
      </section>
    </main>
  );
};

export default ThankYouScreen;
