import lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../../assets/c6/7PafKw3a0c.json";
import IclonC6bank from "../../assets/c6/logoc6bank.svg";

export function SelectMarket() {

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
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



  const handleAdvance = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevenir comportamento padrão do botão

    navigate("/quiz");
  };

  return (
    <main className="flex flex-col items-center px-6 pt-20 space-y-6 min-h-screen antialiased">
      <form className="w-full bg-[#242424] items-center flex flex-col rounded-md px-4 py-4">
        <img
          src={IclonC6bank}
          alt="appc6"
          className="w-[9rem] py-4 items-center justify-center flex self-center rounded-lg"
        />
        <div ref={containerRef} className="   w-[10rem] h-[8rem]" />
        <strong className="text-white font-c6text-bold ">
          Bem-vindo(a) ao quiz do C6Bank
        </strong>
        <p className="bg-gradient-to-r from-gradient1 via-gradient2 text-[0.75rem] via-gradient3 via-gradient4 via-gradient5 to-gradient6 bg-clip-text text-transparent font-c6display-light text  py-2">
          Nossa missão é conectar você pelo mundo
        </p>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-2xl w-full font-c6display-regular text-[0.90rem] text-[#c6c6c6] py-2 bg-black px-4 placeholder:text-[0.70rem] focus:outline-none focus:ring-1 focus:ring-[#d3d3d3] focus:border-[#d3d3d3] border-transparent"
          placeholder="Digite um email válido"
        />
        <button
          onClick={handleAdvance}
          className="flex items-center justify-center mt-4 bg-white w-full py-2 rounded-lg text-black font-semibold hover:bg-purple-800 transition-all"
        >
          Avançar
        </button>
      </form>
    </main>
  );
}
