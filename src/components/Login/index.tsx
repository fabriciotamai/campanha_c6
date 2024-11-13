const Login = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(85vh)] bg-gray-100 px-4 py-8">
      <div className="w-full max-w-xs sm:max-w-sm bg-white shadow-xl rounded-xl p-6">
        <img
          src="/images/opinilogo.png"
          alt="OpinaPro Logo"
          className="w-20 h-auto mx-auto mb-4"
        />
        <p className="text-gray-700 font-bold text-center mb-2 text-base">
          Bem-vindo(a) ao Ajude nos Beleza Web Feedback
        </p>
        <p className="text-gray-600 text-center text-sm">
          Insira seu e-mail para prosseguir!
        </p>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full mt-6 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-center text-sm"
          placeholder="E-mail"
        />
        <button
          onClick={() => setCurrentPage('inicio')}
          className="w-full mt-6 bg-green-500 text-white font-bold py-3 rounded-full hover:bg-green-600 transition duration-200 text-sm"
        >
          ENTRAR
        </button>
      </div>

      <div className="mt-8 text-center text-gray-600 text-xs">
        <p className="font-bold">2024 OpinaPro LLC</p>
        <p className="mt-1">Termos e Política de Privacidade</p>
      </div>
    </div>
  );
};

export default Login;
