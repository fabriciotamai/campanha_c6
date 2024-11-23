import lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../../assets/c6/7PafKw3a0c.json";
import IclonC6bank from "../../assets/c6/logoc6bank.svg";

export function SelectMarket() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAdvance = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isEmailValid) {
      navigate("/quiz");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  return (
    <main className="flex flex-col items-center px-8 py-6 space-y-6 antialiased pt-16">
      <div ref={containerRef} className="w-full h-full  absolute bottom-80 -right-48  opacity-15 object-cover " />
      <form className="w-full max-w-md bg-[#242424] flex flex-col items-center rounded-lg px-6 py-10  z-40 opacity-80">
        <img
          src={IclonC6bank}
          alt="appc6"
          className="w-32 py-4 rounded-lg"
        />

        <strong className="text-white font-c6text-bold text-center text-lg">
          Bem-vindo(a) ao quiz do C6Bank
        </strong>
        <p className="bg-gradient-to-r from-gradient1 py-6 via-gradient2 to-gradient6 bg-clip-text text-transparent font-c6display-light  text-center text-[0.90rem]">
          Nossa missão é conectar você pelo mundo
        </p>

        <div className="w-full ">
          <input
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            className={`rounded-[0.85rem] w-full border ${isEmailValid && !isFocused
              ? "border-[#F4F4F4]" // Borda branca quando validado e desfocado
              : isEmailValid
                ? "border-transparent"
                : "border-[#F4F4F4]"
              } bg-transparent text-white font-c6display-regular text-base py-3 bg-black px-4 placeholder:text-sm focus:outline-none focus:ring-1 ${isEmailValid ? "focus:ring-green-500" : "focus:ring-red-500"
              } focus:border-transparent`}
            placeholder="Digite um email válido"
          />
          <p
            className={`text-red-500 text-xs mt-1 transition-opacity duration-300 ${!isEmailValid && email ? "opacity-100" : "opacity-0"
              }`}
          >
            Por favor, insira um email válido.
          </p>
        </div>

        <button
          onClick={handleAdvance}
          disabled={!isEmailValid}
          className={`flex items-center justify-center mt-2 w-full text-[1rem] py-3 rounded-[0.85rem] font-c6display-regular transition-all ${isEmailValid
            ? "bg-white text-black hover:bg-purple-800 "
            : "bg-gray-500 text-gray-300 cursor-not-allowed mt-4"
            }`}
        >
          Avançar
        </button>
      </form>
    </main>
  );
}
