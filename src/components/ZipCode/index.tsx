import { useState } from "react";

// Interface para tipar os dados de endereço
interface Address {
  titulo?: string;
  local?: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  referencia?: string;
  nome?: string;
}

// Tipagem do componente e dos props
interface EditAddressProps {
  address?: Address;
}

const EditAddress = ({ address = {} }: EditAddressProps) => {
  // Estados para cada campo de entrada, com valores padrão vindos de `address`
  const [title, setTitle] = useState<string>(address.titulo || "");
  const [deliveryLocation, setDeliveryLocation] = useState<string>(address.local || "Casa");
  const [cep, setCep] = useState<string>(address.cep || "");
  const [logradouro, setLogradouro] = useState<string>(address.logradouro || "");
  const [numero, setNumero] = useState<string>(address.numero || "");
  const [bairro, setBairro] = useState<string>(address.bairro || "");
  const [cidadeEstado, setCidadeEstado] = useState<string>(
    address.localidade && address.uf ? `${address.localidade}/${address.uf}` : ""
  );
  const [referencia, setReferencia] = useState<string>(address.referencia || "");
  const [recipientName, setRecipientName] = useState<string>(address.nome || "");

  return (
    <div className="max-w-lg mx-auto px-4 bg-white rounded-lg shadow-md min-h-screen pt-20">
      <h2 className="text-xl font-semibold text-center mb-6">Edite seu endereço</h2>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="text-left flex text-[0.93rem] text-[#212121]">Título do endereço:</label>
          <input
            type="text"
            placeholder="Ex.: Trabalho, Casa..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 text-[0.80rem]"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm text-[0.93rem] flex text-[#212121]">Local da entrega:</label>
          <select
            value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 text-[0.80rem]"
          >
            <option value="Casa">Casa</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-left flex">CEP:</label>
          <div className="border border-gray-300 flex flex-row items-center justify-between rounded-md focus-within:border-[#9222DC]">
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="12345-000"
              className="w-[50%] p-2 mt-1 px-3 rounded-md focus:outline-none"
            />
            <a href="#" className="text-sm text-[#777777] underline px-4">
              Não sei meu CEP
            </a>
          </div>
        </div>
      </div>

      <a href="#" className="flex items-center text-purple-600 text-sm mb-4">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zM12 11.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
        </svg>
        Usar localização atual
      </a>

      <div className="mb-4">
        <label className="text-sm font-medium flex">Endereço:</label>
        <input
          type="text"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
          placeholder="Rua Maria José"
          className="w-full border border-gray-300 rounded-md p-2 mt-1 px-3 focus:border-[#9222DC] focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <label className="text-sm font-medium flex">Número da residência:</label>
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            placeholder="2024"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-[#9222DC] focus:outline-none"
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" className="form-checkbox" />
        Sem número
      </label>

      <div className="flex gap-4 mt-4 mb-6">
        <div className="flex-1">
          <label className="text-sm font-medium flex">Complemento:</label>
          <input
            type="text"
            placeholder="Sobrado 1 ap 1"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-[#9222DC] focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium flex">Bairro:</label>
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            placeholder="Bairro"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-[#9222DC] focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium flex">Cidade/Estado:</label>
        <input
          type="text"
          value={cidadeEstado}
          onChange={(e) => setCidadeEstado(e.target.value)}
          placeholder="São Paulo/SP"
          className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-[#9222DC] focus:outline-none"
        />
      </div>

      <div className="mb-4 focus:border-[#9222DC]">
        <label className="text-sm font-medium flex">Ponto de referência:</label>
        <input
          type="text"
          value={referencia}
          onChange={(e) => setReferencia(e.target.value)}
          placeholder="Ex. Padaria"
          className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-[#9222DC] focus:outline-none"
        />
      </div>

      <div className="flex items-start py-2 focus:border-[#9222DC]">
        <label className="flex items-start text-xs text-purple-600">
          <input type="checkbox" className="form-checkbox mt-1 mr-2 " />
          <span className="text-left font-bold">
            O titular da conta é o mesmo que irá receber ou retirar a encomenda
          </span>
        </label>
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium flex">Nome de quem vai receber ou retirar:</label>
        <input
          type="text"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
          placeholder="Ex João..."
          className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-[#9222DC] focus:outline-none"
        />
      </div>

      <button
        className="bg-[#9222DC] w-full py-4 mt-4 rounded-md text-white"
        onClick={() => {
          window.location.href = "https://go.disruptybr.com.br/djtek";
        }}
      >
        Finalizar
      </button>
    </div>
  );
};

export default EditAddress;
