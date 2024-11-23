import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useNavigate } from "react-router-dom";
import C6bank from "../../assets/c6/c6background.jpg";
import { useAppContext } from "../../context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { addToQuizScore } = useAppContext();
  const handleStart = () => {
    addToQuizScore(123.98); // Soma ao score
    navigate("/selectmarket");
  };

  const expirationTime = new Date().getTime() + 4 * 60 * 60 * 1000;

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#121212] overflow-auto ">
      {/* Conteúdo da página */}
      <div className="relative max-w-[370px] sm:max-w-sm w-full  rounded-xl overflow-hidden shadow-xl py-6">
        {/* Imagem de Fundo */}
        <img
          src={C6bank}
          style={{ filter: "blur(3px)" }}
          alt="OpinaPro Logo"
          className="mx-auto mb-4 rounded-[4rem] w-full h-[600px] object-cover border"
        />
        {/* Camada Preta Translúcida */}
        <div className="absolute inset-0 bg-[#121212] bg-opacity-60"></div>

        {/* Conteúdo sobreposto */}
        <div className="absolute inset-0 flex flex-col py-24 px-6 text-center text-white">
          <section className="border-l-4 border-white w-[100%]">
            <h1 className="font-c6text-bold text-[1.90rem] leading-relaxed text-left px-3 sm:text-xl mb-2">
              <span className="bg-gradient-to-r from-gradient1 via-gradient2 via-gradient3 via-gradient4 via-gradient5 to-gradient6 bg-clip-text text-transparent">
                Bem Vindo
                <br />
                Ao app de Avaliações
                <br />
              </span>
              <span className="text-white">C6Bank</span>
            </h1>
          </section>
          <p className="text-sm sm:text-base mt-4 font-c6display-light text-justify">
            Sua opinião transforma! Avalie nossos serviços e contribua para moldar o futuro do
            C6 Bank. Juntos, podemos construir um banco ainda melhor para você e todos os
            brasileiros!
          </p>
          <p className="text-base font-bold text-white mb-6 mt-6">
            Você já ganhou <span className="text-green-500">R$ 123,98</span> de bônus, que expira
            em:
          </p>
          {/* Flip Clock Countdown */}
          <div className="flex justify-center mb-6">
            <FlipClockCountdown
              to={expirationTime}
              className="flip-clock"
              labels={["Days", "Hours", "Minutos", "Segundos"]}
              labelStyle={{
                fontSize: "10px",
                color: "#fff",
                marginTop: "",
              }}
              digitBlockStyle={{
                width: "1.5rem",
                height: "40px",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            />
          </div>
          <button
            onClick={handleStart}
            className="bg-white hover:bg-[#fbc161] w-full text-black font-c6display-regular py-2 px-6 rounded-md justify-end transition"
          >
            Começar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
