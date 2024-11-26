import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../../assets/c6/7PafKw3a0c.json";
import IclonC6bank from "../../assets/c6/logoc6bank.svg";

export function SelectMarket() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);
  const [inputToken, setInputToken] = useState<string[]>(["", "", "", ""]);
  const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
  const [emailError, setEmailError] = useState<string | null>(null); // Erro do email
  const [tokenError, setTokenError] = useState<string | null>(null); // Erro do token
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  const preventScrollOnFocus = (e: React.FocusEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleGenerateToken = () => {
    setTokenError(null); // Limpar erro do token ao gerar um novo
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      setEmailError("É preciso inserir email válido antes de gerar o token");
      return;
    }
    setIsEmailValid(true);
    setEmailError(null);
    if (attemptsLeft > 0) {
      const generatedToken = Math.floor(1000 + Math.random() * 9000).toString(); // Token de 4 dígitos
      setToken(generatedToken);
      setAttemptsLeft(attemptsLeft - 1);
    } else {
      setEmailError("Você excedeu o número de tentativas para gerar um token.");
    }
  };

  const handleInputChange = (value: string, index: number) => {
    setTokenError(null); // Limpar erro do token ao digitar
    if (!/^\d$/.test(value) && value !== "") return; // Apenas números
    const updatedToken = [...inputToken];
    updatedToken[index] = value;
    setInputToken(updatedToken);

    // Foca no próximo campo automaticamente
    if (value !== "" && index < inputToken.length - 1) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleValidateToken = () => {
    const enteredToken = inputToken.join("");
    if (enteredToken === token) {
      setTokenError(null);
      navigate("/quiz"); // Navegar para a próxima página
    } else {
      setTokenError("Token inválido. Por favor, tente novamente.");
    }
  };

  return (
    <main className="flex flex-col items-center px-8 py-4 space-y-6 antialiased pt-24">
      {/* <div ref={containerRef} className="w-full h-full absolute bottom-80 -right-48 opacity-15 object-cover" /> */}
      <form className="w-full max-w-md bg-[#242424] flex flex-col items-center rounded-md px-6 py-5 opacity-80">
        <img src={IclonC6bank} alt="appc6" className="w-32 py-4 rounded-lg" />

        <strong className="text-white font-c6text-bold text-center text-lg">
          Bem-vindo(a) ao quiz do C6Bank
        </strong>
        <p className="bg-gradient-to-r from-gradient1 py-6 via-gradient2 to-gradient6 bg-clip-text text-transparent font-c6display-light text-center text-[0.90rem]">
          Nossa missão é conectar você pelo mundo
        </p>

        <div className="w-full">
          {/* Campo para email */}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEmailValid(true); // Resetar borda ao digitar
              setEmailError(null);
            }}
            className={`rounded-[0.85rem] w-full border ${isEmailValid ? "border-[#F4F4F4]" : "border-red-500"
              } bg-transparent text-white font-c6display-regular text-base py-3 bg-black px-4 placeholder:text-sm focus:outline-none focus:border-[#fbc161] focus:ring-[#fbc161] focus:ring-1`}
            placeholder="Digite um email válido"
          />
          {emailError && (
            <p className="text-red-500 text-xs mt-1  py-2">{emailError}</p>
          )}
        </div>

        {/* Botão para gerar token */}
        <button
          type="button"
          onClick={handleGenerateToken}
          className={`mt-4 w-full font-c6display-regular py-3 text-[0.90rem] px-6 rounded-2xl transition ${isEmailValid
            ? "bg-[#fbc161] text-[#212121] hover:bg-[#fbc161]"
            : "bg-white text-black hover:bg-[#fbc161]"
            }`}
        >
          Gerar Token
        </button>

        {token && (
          <p className="text-white text-sm pt-4">
            Seu token: <strong className="font-bold text-[1.20rem] text-[#fff]">{token}</strong>. Você tem <strong>{attemptsLeft}</strong> tentativa(s) restante(s).
          </p>
        )}

        {/* Inputs para o token */}
        {token && (
          <div className="flex  justify-center  mt-4 w-[90%] gap-4">
            {inputToken.map((digit, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="text"
                value={digit}
                onFocus={preventScrollOnFocus} // Evitar scroll ao focar
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !digit && index > 0) {
                    // Foco no input anterior ao apagar
                    const previousInput = document.getElementById(`input-${index - 1}`);
                    if (previousInput) {
                      (previousInput as HTMLInputElement).focus();
                    }
                  }
                }}
                maxLength={1}
                className="w-[3rem] h-[4rem] text-center border border-[#F4F4F4] bg-transparent text-white font-c6display-regular text-lg py-2 rounded-md focus:outline-none focus:border-[#fbc161] focus:ring-[#fbc161] focus:ring-2 transition-all"
              />
            ))}
          </div>
        )}

        {/* Botão para validar token */}
        {token && (
          <>
            <button
              type="button"
              onClick={handleValidateToken}
              className={`mt-6 w-full rounded-xl ${inputToken.every((digit) => digit !== "")
                ? "bg-white text-black hover:bg-[#fbc161]"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
                } font-c6display-regular py-3 px-6 rounded-md transition`}
            >
              Validar Token
            </button>
            {tokenError && (
              <p className="text-red-500 text-xs mt-2">{tokenError}</p>
            )}
          </>
        )}
      </form>
    </main>
  );
}
