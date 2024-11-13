
const EditAddress = ({ setCurrentPage }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-6">Edite seu endereço</h2>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="text-left flex text-[0.93rem] text-[#212121]">Título do endereço:</label>
          <input
            type="text"
            placeholder="Ex.: Trabalho, Casa..."
            className="w-full border border-gray-300 rounded-md p-2 mt-1 text-[0.80rem]"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm  flex text-[#212121]">Tipo de local da entrega:</label>
          <select className="w-full border border-gray-300 rounded-md p-2 mt-1 ">
            <option className="" >Casa</option>
          </select>
        </div>
      </div>


      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <label className="text-sm font-medium text-left flex">CEP:</label>
          <div className="border border-gray-300 flex flex-row items-center justify-between ">


            <input
              type="text"
              placeholder="12345-000"
              className="w-[50%] rounded-md p-2 mt-1 px-1"
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
        <label className="text-sm font-medium flex ">Endereço:</label>
        <input
          type="text"
          placeholder="Rua João Bettega"
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>


      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <label className="text-sm font-medium flex">Número da residência:</label>
          <input
            type="text"
            placeholder="644"
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
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
            placeholder="ap 607"
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium flex">Bairro:</label>
          <input
            type="text"
            placeholder="Portão"
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
      </div>


      <div className="mb-4">
        <label className="text-sm font-medium flex">Cidade/Estado:</label>
        <input
          type="text"
          placeholder="Curitiba/PR"
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>


      <div className="mb-4">
        <label className="text-sm font-medium flex">Ponto de referência:</label>
        <input
          type="text"
          placeholder="Ex. Padaria"
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>


      <label className="flex items-center gap-2 text-sm text-purple-600 mb-4">
        <input type="checkbox" className="form-checkbox" />
        O titular da conta é o mesmo que irá receber ou retirar a encomenda
      </label>


      <div className="mb-4">
        <label className="text-sm font-medium flex">Nome de quem vai receber ou retirar:</label>
        <input
          type="text"
          placeholder="Fabricio"
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>
    </div>
  );
};

export default EditAddress;
