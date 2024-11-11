// src/components/Login.js

const Login = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm mt-40 p-8 bg-white shadow-xl rounded-xl">
        <img
          src="images/opinilogo.png"
          alt="OpinaPro Logo"
          className="w-1/3 mx-auto mb-6"
        />
        <p className="text-gray-700 font-bold text-lg text-center mb-1">
          Bem-vindo(a) ao OpinaPro
        </p>
        <p className="text-gray-600 text-center text-sm">
          Insira seu e-mail para prosseguir!
        </p>
        <input
          type="text"
          name="email"
          id="email"
          className="w-full mt-6 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-center"
          placeholder="E-mail"
        />
        <button
          onClick={() => setCurrentPage('inicio')}
          className="w-full mt-6 bg-green-500 text-white font-bold py-3 rounded-full hover:bg-green-600 transition duration-200"
        >
          ENTRAR
        </button>
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p className="font-bold text-sm">2024 OpinaPro LLC</p>
        <p className="text-xs mt-1">Termos e Política de Privacidade</p>
      </div>
    </div>
  );
};

export default Login;
