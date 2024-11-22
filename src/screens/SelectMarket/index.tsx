import lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../../assets/c6/7PafKw3a0c.json";
import IclonC6bank from "../../assets/c6/logoc6bank.svg";

export function SelectMarket() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false); // Controle de validação do email
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current, // Garantido como não nulo
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);

  // Função para validar o email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função para avançar
  const handleAdvance = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isEmailValid) {
      navigate("/quiz");
    }
  };

  // Monitorar mudanças no email para validar
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value)); // Atualiza o estado de validação
  };

  return (
    <main className="flex flex-col items-center px-6 pt-36 space-y-6 min-h-screen antialiased">
      <form className="w-full bg-[#242424] items-center flex flex-col rounded-md px-4 py-4">
        <img
          src={IclonC6bank}
          alt="appc6"
          className="w-[9rem] py-4 items-center justify-center flex self-center rounded-lg"
        />
        <div ref={containerRef} className="w-[10rem] h-[8rem]" />
        <strong className="text-white font-c6text-bold">
          Bem-vindo(a) ao quiz do C6Bank
        </strong>
        <p className="bg-gradient-to-r from-gradient1 via-gradient2 text-[0.75rem] via-gradient3 via-gradient4 via-gradient5 to-gradient6 bg-clip-text text-transparent font-c6display-light text py-2">
          Nossa missão é conectar você pelo mundo
        </p>

        <input
          value={email}
          onChange={handleEmailChange} // Valida o email ao digitar
          className={`rounded-2xl w-full text-white font-c6display-regular text-[1rem] py-3 bg-black px-4 placeholder:text-[0.80rem] focus:outline-none focus:ring-1 ${isEmailValid ? "focus:ring-green-500" : "focus:ring-red-500"
            }`}
          placeholder="Digite um email válido"
        />
        {!isEmailValid && email && (
          <p className="text-red-500 text-xs mt-1">
            Por favor, insira um email válido.
          </p>
        )}
        <button
          onClick={handleAdvance}
          disabled={!isEmailValid} // Desabilita o botão se o email for inválido
          className={`flex items-center justify-center mt-4 w-full py-2 rounded-lg font-semibold transition-all ${isEmailValid
            ? "bg-white text-black hover:bg-purple-800"
            : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
        >
          Avançar
        </button>
      </form>
    </main>
  );
}
