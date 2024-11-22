import { useEffect, useRef, useState } from 'react';
import IconCel from '../../assets/c6/iconcel.svg';
import IconDocument from '../../assets/c6/icondocument.svg';
import Iconmail from '../../assets/c6/iconemail.svg';
import IconQrcode from '../../assets/c6/iconqrcode.svg';

import IconArrow from '../../assets/c6/iconarrow.svg';
import IconCelBlack from '../../assets/c6/iconcelBlack.svg';
import IconDocumentBlack from '../../assets/c6/icondocumentBlack.svg';
import IconmailBlack from '../../assets/c6/iconemailblack.svg';
import IconQrcodeBlack from '../../assets/c6/iconqrcodeblack.svg';
import { useAppContext } from '../../context/AppContext';

import Bra from '../../assets/c6/brasil.svg';
import Dolar from '../../assets/c6/eua.svg';
import Euro from '../../assets/c6/euro.svg';

const SaquePage = () => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { quizScore, setIsModalOpenUnLock } = useAppContext();
  const [isWrapped, setIsWrapped] = useState(false);

  useEffect(() => {
    const checkWrap = () => {
      const container = containerRef.current;
      if (container) {
        const isFlexWrapped = container.scrollWidth > container.offsetWidth;
        setIsWrapped(isFlexWrapped);
      }
    };

    // Verifica o wrap no carregamento e ao redimensionar a tela
    window.addEventListener('resize', checkWrap);
    checkWrap();

    return () => {
      window.removeEventListener('resize', checkWrap);
    };
  }, []);


  return (
    <div className="flex flex-col items-center px-4 pt-24 min-h-screen bg-[#121212] antialiased">

      {/* <div className="bg-[#242424] border-[#3b3b3b] border shadow-md rounded-lg p-6 text-center w-full max-w-sm">
        <p className="text-gray-400 text-[0.70rem] font-c6display-light">Seu saldo</p>
        <p className="text-3xl text-green-500 font-bold">R$ 67,00</p>
      </div> */}

      {/* Título */}
      <section
        className="flex flex-row justify-between w-full gap-1 flex-wrap"
        ref={containerRef}
      >
        {/* Real */}
        <div
          className={`${isWrapped ? 'w-full' : 'w-[31.5%]'
            } bg-[#242424] text-white rounded-xl flex flex-col pt-2 border-[#3b3b3b] border justify-between cursor-pointer transition-all`}
        >
          <div className="px-3">
            <div className="flex flex-row items-center space-x-2">
              <img
                src={Bra}
                alt="Real"
                className="w-4 h-4 rounded-[10rem] object-cover"
              />
              <p className="text-[0.70rem]">Real</p>
            </div>
            <div className="py-2" />
            <p className="text-[0.90rem] font-c6display-light py-2">
              R$ {(quizScore)?.toFixed(2)?.replace('.', ',') ?? '0,00'}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between border-t-[1px] border-t-[#4b4a4a] border-opacity-50 py-2 px-2">
            <p className="text-[0.70rem] text-[#4d8bd4]">Disponível</p>
            <img
              src={IconArrow}
              alt="Seta"
              className="w-4 h-4 rounded-[10rem] object-cover"
            />
          </div>
        </div>

        {/* Dólar */}
        <div
          className={`${isWrapped ? 'w-full' : 'w-[31.5%]'
            } bg-[#242424] text-white rounded-xl flex flex-col pt-2 border-[#3b3b3b] border justify-between cursor-pointer transition-all`}
        >
          <div className="px-3">
            <div className="flex flex-row items-center space-x-2">
              <img
                src={Dolar}
                alt="Dólar"
                className="w-4 h-4 rounded-[10rem] object-cover"
              />
              <p className="text-[0.70rem]">Dólar</p>
            </div>
            <div className="py-2" />
            <p className="text-[0.90rem] font-c6display-light py-2">R$ 0,00</p>
          </div>
          <div className="flex flex-row items-center rounded-b-md bg-[#ffcd2e] justify-between border-t-[1px] border-t-[#4b4a4a] border-opacity-50 py-2 px-2">
            <p className="text-[0.70rem] text-[#000]">Indisponível</p>
            <img src={IconArrow} alt="Seta" className="w-5 h-5" />
          </div>
        </div>

        {/* Euro */}
        <div
          className={`${isWrapped ? 'w-full' : 'w-[31.5%]'
            } bg-[#242424] text-white rounded-xl flex flex-col pt-2 border-[#3b3b3b] border justify-between cursor-pointer transition-all`}
        >
          <div className="px-3">
            <div className="flex flex-row items-center space-x-2">
              <img
                src={Euro}
                alt="Euro"
                className="w-4 h-4 rounded-[10rem] object-cover"
              />
              <p className="text-[0.70rem]">Euro</p>
            </div>
            <div className="py-2" />
            <p className="text-[0.90rem] font-c6display-light py-2">R$ 0,00</p>
          </div>
          <div className="flex flex-row items-center rounded-b-md bg-[#ffcd2e] justify-between border-t-[1px] border-t-[#4b4a4a] border-opacity-50 py-2 px-2">
            <p className="text-[0.70rem] text-[#000]">Indisponível</p>
            <img src={IconArrow} alt="Seta" className="w-5 h-5" />
          </div>
        </div>
      </section>

      <p className="mt-6 mb-4 text-gray-300 text-lg font-bold"></p>

      {/* Grid de opções */}
      <div className="grid grid-cols-3 gap-[0.80rem] w-full max-w-md">
        {/* CPF */}
        <div
          onClick={() => setSelectedKey('cpf')} // Define como selecionado
          className={`${selectedKey === 'cpf' ? 'bg-[#fbfbfb] text-black' : 'bg-[#242424] text-white'
            } rounded-xl flex flex-col py-2 border-[#3b3b3b] border px-4 justify-between cursor-pointer hover:bg-[#fbfbfb] hover:text-black transition-all`}
        >
          <img
            src={selectedKey === 'cpf' ? IconDocumentBlack : IconDocument} // Alterna ícone
            alt="CPF"
            className="w-4 h-4 mb-2"
          />
          <div className="py-2" />
          <p className="text-[0.70rem] font-c6display-light">CPF</p>
        </div>

        {/* Telefone */}
        <div
          onClick={() => setSelectedKey('telefone')} // Define como selecionado
          className={`${selectedKey === 'telefone' ? 'bg-[#fbfbfb] text-black' : 'bg-[#242424] text-white'
            } rounded-xl flex flex-col py-2 border-[#3b3b3b] border px-4 justify-between cursor-pointer hover:bg-[#fbfbfb] hover:text-black transition-all`}
        >
          <img
            src={selectedKey === 'telefone' ? IconCelBlack : IconCel} // Alterna ícone
            alt="Telefone"
            className="w-5 h-5 mb-2"
          />
          <div className="py-2" />
          <p className="text-[0.70rem] font-c6display-light">Telefone</p>
        </div>

        {/* Email */}
        <div
          onClick={() => setSelectedKey('email')} // Define como selecionado
          className={`${selectedKey === 'email' ? 'bg-[#fbfbfb] text-black' : 'bg-[#242424] text-white'
            } rounded-xl flex flex-col py-4 border-[#3b3b3b] border px-4 justify-between cursor-pointer hover:bg-[#fbfbfb] hover:text-black transition-all`}
        >
          <img
            src={selectedKey === 'email' ? IconmailBlack : Iconmail} // Alterna ícone
            alt="Email"
            className="w-5 h-5 mb-2"
          />
          <div className="py-2" />
          <p className="text-[0.70rem] font-c6display-light">Email</p>
        </div>

        {/* QR Code */}
        <div
          onClick={() => setSelectedKey('qrcode')} // Define como selecionado
          className={`${selectedKey === 'qrcode' ? 'bg-[#fbfbfb] text-black' : 'bg-[#242424] text-white'
            } rounded-xl flex flex-col py-4 border-[#3b3b3b] border px-4 justify-between cursor-pointer hover:bg-[#fbfbfb] hover:text-black transition-all`}
        >
          <img
            src={selectedKey === 'qrcode' ? IconQrcodeBlack : IconQrcode} // Alterna ícone
            alt="QR Code"
            className="w-5 h-5 mb-2"
          />
          <div className="py-2" />
          <p className="text-[0.70rem] font-c6display-light">QR Code</p>
        </div>
      </div>

      {/* Inputs */}
      <div className="mt-6 w-full px-4 max-w-sm py-4 bg-[#242424] rounded-xl antialiased">
        <input
          className="w-full py-4    text-[1rem] font-c6text-regular  border-[#3b3b3b]  text-white bg-transparent  rounded-md mb-4 placeholder-gray-400 focus:outline-none  focus:ring-green-500"
          type="text"
          placeholder="Digite uma chave Pix"

        />
        <p className=" text-[0.70rem] font-c6text-regular text-[#d3d3d3]">Celular, CPF. CNPJ, E-mail, Chave Aleatória ou Pix Copia e cola</p>
      </div>
      <div className="mt-6 w-full max-w-sm">
        <input
          className="w-full p-3 bg-[#242424] border-[#3b3b3b] border text-white  rounded-md mb-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500"
          type="text"
          placeholder="Digite o valor que deseja sacar"
        />
      </div>



      {/* Botão */}
      <button onClick={() => setIsModalOpenUnLock(true)} className="bg-[#ffcd2e] w-full text-black font-c6display-regular  py-2 px-6 rounded-md hover:bg-green-600 transition-all">
        Sacar
      </button>
    </div>
  );
};

export default SaquePage;
