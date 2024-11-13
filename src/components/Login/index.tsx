import { useState } from "react";
import BelezanaWeb from '../../assets/logo-bw.svg';

const Login = ({ setCurrentPage }: any) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (!email) {
      setError(true);
    } else {
      setError(false);
      setCurrentPage('inicio');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 antialiased">
      <div className="max-w-[370px] sm:max-w-sm bg-white shadow-xl rounded-xl p-6 mx-auto">
        <img
          src={BelezanaWeb}
          alt="OpinaPro Logo"
          className="w-40 h-40 mx-auto mb-4"
        />
        <p className="text-gray-700 font-bold text-center mb-2 text-[1.20rem]">
          Bem-vindo(a) ao Ajude-nos Beleza na Web Feedback
        </p>
        <p className="text-gray-600 text-center text-sm">
          Insira seu e-mail para prosseguir!
        </p>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full mt-6 py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm ${error ? "border-red-500" : "border-gray-300"
            }`}
          placeholder="Digite seu email"
        />
        {error && (
          <p className="text-red-500 text-xs mt-2">Por favor, insira seu e-mail.</p>
        )}
        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-[#a000e4] text-white font-bold py-4 rounded-md hover:bg-green-600 transition duration-200 text-sm"
        >
          ENTRAR
        </button>
      </div>

      <div className="mt-8 text-center text-gray-600 text-xs">
        <p className="font-bold">2007 - 2024 Beleza na Web</p>
        <button
          onClick={() => {
            window.location.href =
              "https://www.belezanaweb.com.br/institucional/condicoes-de-uso/";
          }}
        >
          <p className="mt-1">Termos e Política de Privacidade</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
