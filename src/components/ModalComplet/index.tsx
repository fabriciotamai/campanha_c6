import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export function CompletePage() {
  const [progress, setProgress] = useState(0);
  const { quizScore } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center  w-full min-h-screen   bg-[#212121] text-center antialiased pb-16 ">
      <div className="w-full max-w-md flex flex-col items-center pt-36">
        {/* Progresso Circular */}
        <div className="w-48 h-48 relative mb-8">
          <CircularProgressbar
            value={progress}
            styles={buildStyles({
              textColor: "#F4F4F4",
              pathColor: "#FBC161",
              trailColor: "#d6d6d6",
            })}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white text-lg font-bold">
              {`R$ ${quizScore?.toFixed(2)?.replace(".", ",")}`}
            </p>
            <p className="text-[#d3d3d3] text-sm mt-1">Saldo acumulado</p>
          </div>
        </div>

        {/* Mensagem de agradecimento */}
        <strong className="text-[#F4F4F4] font-c6text-semibold text-[2rem] mb-6">
          Muito obrigado!
        </strong>
        <p className="text-[#d3d3d3] px-4 font-c6text-regular mb-10">
          Com base no seu questionamento sabemos onde estamos errando e quais
          produtos devemos melhorar para você{" "}
          <b className="text-[#ffff]">Cliente C6Bank</b> e todas as pessoas{" "}
          <strong className="bg-gradient-to-r from-gradient1 via-gradient3 to-gradient6 bg-clip-text text-transparent">
            No Brasil e no mundo!
          </strong>
        </p>

        {/* Botão para sacar o saldo */}
        <button
          onClick={() => navigate("/saque")}
          className="w-[90%] bg-[#F4F4F4] px-12 py-3  mb-6 rounded-[0.85rem] font-bold text-[#212121] hover:bg-gray-300 transition"
        >
          Liberar meu saldo
        </button>
      </div>
    </div>
  );
}

export default CompletePage;
