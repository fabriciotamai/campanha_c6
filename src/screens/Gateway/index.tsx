
const GatewayPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Cabeçalho com sua marca */}
      <header className="bg-purple-600 text-white text-center py-4">
        <h1 className="text-lg font-bold">Minha Marca</h1>
      </header>


      <div className="w-full h-[calc(100vh-100px)] mt-4">
        <iframe
          src="https://go.disruptybr.com.br/djtek"
          title="Gateway Disrupt"
          className="w-full h-full border-none"
        />
      </div>

      {/* Rodapé fixo */}
      <footer className="bg-gray-800 text-white text-center py-2">
        <p className="text-sm">&copy; 2024 Minha Marca. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default GatewayPage;
