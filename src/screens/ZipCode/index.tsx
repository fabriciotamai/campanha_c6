import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";


const EditAddress = () => {
  // Recupera o `address` do contexto
  const { address } = useAppContext();


  const [title, setTitle] = useState<string>(address?.titulo || "");
  const [deliveryLocation, setDeliveryLocation] = useState<string>(address?.local || "Casa");
  const [cep, setCep] = useState<string>(address?.cep || "");
  const [logradouro, setLogradouro] = useState<string>(address?.logradouro || "");
  const [numero, setNumero] = useState<string>(address?.numero || "");
  const [bairro, setBairro] = useState<string>(address?.bairro || "");
  const [cidadeEstado, setCidadeEstado] = useState<string>(
    address?.localidade && address?.uf ? `${address.localidade}/${address.uf}` : ""
  );
  const [referencia, setReferencia] = useState<string>(address?.referencia || "");
  const [recipientName, setRecipientName] = useState<string>(address?.nome || "");


  useEffect(() => {


    console.log(bairro)
    setTitle(address?.titulo || "");
    setDeliveryLocation(address?.local || "Casa");
    setCep(address?.cep || "");
    setLogradouro(address?.logradouro || "");
    setNumero(address?.numero || "");
    setBairro(address?.bairro || "");
    setCidadeEstado(
      address?.localidade && address?.uf ? `${address.localidade}/${address.uf}` : ""
    );
    setReferencia(address?.referencia || "");
    setRecipientName(address?.nome || "");
  }, [address]);

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
            className="w-full h-10 border border-gray-300 bg-transparent rounded-md p-2 mt-1 text-[0.80rem] appearance-none custom-focus"
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
          <label className="text-sm font-medium flex">Bairro:</label>
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            placeholder="São tomé"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-[#9222DC] focus:outline-none"
          />
        </div>
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

      <div className="mb-4">
        <label className="text-sm font-medium flex">Ponto de referência:</label>
        <input
          type="text"
          value={referencia}
          onChange={(e) => setReferencia(e.target.value)}
          placeholder="Ex. Padaria"
          className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-[#9222DC] focus:outline-none"
        />
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
