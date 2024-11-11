// src/components/SaquePage.js

const SaquePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <p className="text-gray-600 text-sm">Seu saldo</p>
        <span className="text-4xl text-green-500 font-bold">R$ 67,00</span>
      </div>
      <p className="mt-6 mb-4 text-gray-600 font-bold">Selecione seu tipo de chave PIX</p>
      <div className="flex space-x-4">
        <button className="w-12 h-12 bg-gray-300 rounded-full">
          <img src="images/cpf.png" alt="CPF" />
        </button>
        <button className="w-12 h-12 bg-gray-300 rounded-full">
          <img src="images/telefone.png" alt="Telefone" />
        </button>
        <button className="w-12 h-12 bg-gray-300 rounded-full">
          <img src="images/email.png" alt="Email" />
        </button>
        <button className="w-12 h-12 bg-gray-300 rounded-full">
          <img src="images/qr.png" alt="QR" />
        </button>
      </div>
      <input
        className="mt-4 w-1/2 p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Digite sua chave PIX aqui"
      />
      <input
        className="mt-2 w-1/2 p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Digite o valor que deseja sacar"
      />
      <button className="mt-4 bg-green-500 text-white font-bold py-2 px-6 rounded-md">REALIZAR SAQUE</button>
    </div>
  );
};

export default SaquePage;
