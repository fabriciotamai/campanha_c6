import { useState } from "react";
import { useNavigate } from "react-router-dom";
import C6bank from '../../assets/c6/c6background.jpg';
import { useAppContext } from "../../context/AppContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setCurrentStep } = useAppContext();

  const handleLogin = () => {
    if (!email) {
      setError(true);
    } else {
      setError(false);
      setCurrentStep(1);
      navigate("/selectmarket");
    }
  };

  return (
    <div className="flex flex-col items-center  min-h-screen bg-[#000000]  antialiased ">
      <div className="max-w-[370px] sm:max-w-sm bg-black shadow-xl rounded-xl py-6 mt-10 ">
        {/* <p className="text-gray-700 font-bold text-center mb-2 text-[1rem]">
          Bem-vindo(a) ao Ajude-nos Beleza na Web Feedback
        </p> */}
        <img
          src={C6bank}
          style={{ filter: 'blur(3px)' }}
          alt="OpinaPro Logo"
          className="mx-auto mb-4 rounded-[4rem]  w-[full] h-[500px] object-cover"
        />

        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full mt-6 py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-base ${error ? "border-red-500" : "border-gray-300"
            }`}
          placeholder="Digite seu email"
        />
        {error && (
          <p className="text-red-500 text-xs mt-2">Por favor, insira seu e-mail.</p>
        )}
        {/* <button
          onClick={handleLogin}
          className="w-full mt-4 bg-[#a000e4] text-white font-bold py-3 rounded-md hover:bg-green-600 transition duration-200 text-[1rem]"
        >
          Entrar
        </button> */}
      </div>

      <div className="mb-6 mt-4 text-center text-gray-600 text-xs">
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
