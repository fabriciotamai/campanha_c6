/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { ClipLoader } from 'react-spinners';
import Skincaremobile from '../../assets/images/skincaremobile.webp';

const ShoppingCart = ({ setCurrentPage, onAddressUpdate }: any) => {
  const [zipCode, setZipCode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(''); // Estado para mensagem de erro
  const [isFocused, setIsFocused] = useState<boolean>(false); // Estado para foco

  const handleLoadCep = async () => {
    setLoading(true);
    setError(''); // Limpa o erro ao iniciar nova busca
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);

      if (response.data.erro) {
        throw new Error("CEP não encontrado.");
      }

      setAddress(response.data);
      onAddressUpdate(response.data);
    } catch (error) {
      console.log(error)
      setError("Informe um CEP válido");
    } finally {
      setLoading(false);
    }
  };

  const handleGetLocation = () => {
    setLoading(true);
    setError('');


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {

          const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=8440ff5adb274b5abf90cf1598d1c0c1`);
          const results = response.data.results;

          if (results.length > 0) {
            const postalCode = results[0].components.postcode;
            setZipCode(postalCode);
            await handleLoadCep();
          } else {
            setError("Não foi possível encontrar o CEP com base na sua localização.");
          }
        } catch (err) {
          console.log(err)
          setError("Erro ao buscar CEP com base na localização.");
        } finally {
          setLoading(false);
        }
      }, () => {
        setError("Permissão de localização negada.");
        setLoading(false);
      });
    } else {
      setError("Geolocalização não é suportada pelo seu navegador.");
      setLoading(false);
    }
  };

  const handleFinish = () => {
    if (address) {
      setCurrentPage('finished');
    } else {
      setError("Informe um CEP válido antes de continuar"); // Define um erro se tentar prosseguir sem endereço
    }
  };

  return (
    <div className="relative max-w-md mx-auto p-4 bg-white rounded-md shadow-lg">
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ClipLoader color="#A000E6" size={50} />
        </div>
      )}

      <section className="px-2 mb-4">
        <div className="flex items-center border rounded-md border-[#bbbbbb] px-4 py-3 mb-4 bg-[#f2f2f2]">
          <input
            type="text"
            placeholder="O que você procura hoje?"
            className="flex-grow outline-none text-[1rem] bg-transparent"
          />
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path className="menu-icon-path" fillRule="evenodd" clipRule="evenodd" d="M10.0499 0.75C4.91369 0.75 0.75 4.91369 0.75 10.0499C0.75 15.186 4.91369 19.3497 10.0499 19.3497C12.348 19.3497 14.4514 18.5161 16.0743 17.1348L19.9698 21.0304C20.2627 21.3232 20.7376 21.3232 21.0304 21.0304C21.3233 20.7375 21.3233 20.2626 21.0304 19.9697L17.1349 16.0742C18.5162 14.4513 19.3497 12.3479 19.3497 10.0499C19.3497 4.91369 15.186 0.75 10.0499 0.75ZM2.25 10.0499C2.25 5.74211 5.74211 2.25 10.0499 2.25C14.3576 2.25 17.8497 5.74211 17.8497 10.0499C17.8497 14.3576 14.3576 17.8497 10.0499 17.8497C5.74211 17.8497 2.25 14.3576 2.25 10.0499Z" fill="#007A54"></path>
            </svg>
          </button>
        </div>
      </section>

      <section className="border-[#f0f0f0] border px-2 py-6 rounded-md">
        <div className="px-1">
          <h2 className="text-lg text-left font-light text-[#212121] mb-7">Sacola (1 Produto)</h2>
          <p className="py-1 text-left font-light text-sm text-[#212121] text-[0.85rem]">Estime frete e prazo</p>
          <div className="flex items-center ">
            <InputMask
              mask="99999-999"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="0000-000"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`border rounded-md px-3 py-3 w-full text-sm bg-white focus:outline-none ${error && !isFocused ? 'border-red-500' : isFocused ? 'border-purple-500' : 'border-green-500'
                }`}
            />

            <button
              onClick={handleLoadCep}
              className="bg-[#9222DC] text-white font-normal rounded-[0.30rem] ml-3 px-5 py-[0.70rem]"
              disabled={loading}
            >
              OK
            </button>
          </div>
          {error && <p className="text-[#FF0014] text-[0.75rem] text-left">{error}</p>}
          <button className="text-left flex" onClick={() => handleGetLocation()}>


            <a href="#" className="text-sm text-left py-4 text-[#5466AB] underline mb-2 block">
              Não sei meu CEP
            </a>
          </button>

          {address && <div className="p-3 bg-[#f9f9f9] rounded-md mb-4 flex justify-between">
            <p className="text-sm">Normal (até 5 dias úteis)</p>
            <p className="text-sm font-normal">R$ 29,90</p>
          </div>}

          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-start gap-4">
              <img
                src={Skincaremobile}
                alt="Produto"
                className="w-16 h-16 object-cover"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-sm text-left">CREAMY</h3>
                <p className="text-sm text-[#383737] text-left">Kit Skincare Glicointense Peel e Ácido</p>
                <p className="text-sm text-[#212121] text-left">Salicílico (2 Produtos)</p>
                <p className="text-sm text-left mt-2 text-[#777777]">cód: MP152888</p>
                <p className="text-xs text-gray-500 text-left mt-3">Vendido por <span className="font-bold">Evas Perfumaria</span> e entregue por <span className="font-bold">Beleza na Web</span></p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center border border-gray-300 rounded-md px-3 p-1 text-sm">
                <option value="1">1 unidade</option>
              </div>
              <div className="text-right flex items-center gap-2">
                <p className="text-sm line-through text-gray-500">R$ 299,90</p>
                <p className="text-lg font-bold text-purple-700">R$ 0,00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button onClick={handleFinish} className="flex items-center justify-center bg-[#9222DC] w-full py-3 rounded-lg mt-4">
        <div className="text-white">
          Finalizar envio
        </div>
      </button>
    </div>
  );
};

export default ShoppingCart;
