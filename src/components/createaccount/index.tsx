import IconSvg from "../../assets/c6/iconClose.svg";
import QrCode from '../../assets/c6/qrcode.png';
import { useAppContext } from "../../context/AppContext";

export function Modal() {
  const { isModalOpen, setIsModalOpen } = useAppContext();

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <>
      {/* Overlay de fundo */}
      <div
        className={`fixed antialiased inset-0 bg-[#121212] bg-opacity-50 z-40 transition-opacity duration-300 ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={handleCloseModal} // Fecha o modal ao clicar fora
      ></div>

      {/* Modal Drawer */}
      <section
        className={`fixed inset-y-0 right-0 bg-[#242424] text-white w-full sm:w-[400px] h-full shadow-lg transform transition-transform duration-500 z-50 ${isModalOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={handleCloseModal}
          className="absolute top-14 right-10 text-gray-400 hover:text-gray-200 flex items-center space-x-6"
        >
          <p className="text-sm  font-c6display-light font-light text-[#f4f4f4]  tracking-widest">Fechar</p>
          <img src={IconSvg} alt="close" className="w-3 h-3" />
        </button>

        <div className="flex flex-col  items-center  h-full px-10 mt-28">
          <p className="text-[2.2rem] font-c6display-light  font-extralight  mb-4 leading-10">
            Abra sua conta em minutos
          </p>
          <p className="text-[1rem] font-c6display-light font-light  text-gray-300 mb-8 leading-6">
            Ligue a câmera do seu celular e aponte para o QR Code abaixo. Você
            será redirecionado para a loja de aplicativos. Aí é só baixar o app
            do C6 Bank e abrir a sua conta.
          </p>
          <div className="flex justify-center  rounded-xl border-[0.40rem]">
            <img
              src={QrCode}
              alt="QR Code"
              width={250}

            />
          </div>
        </div>
      </section>
    </>
  );
}
