import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

type IsDataProps = {
  isVisible: boolean;
  onComplete?: () => void;
};

export function ModalComplet({ isVisible, onComplete }: IsDataProps) {
  const [progress, setProgress] = useState(0);
  const { quizScore } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isVisible) {
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            if (onComplete) onComplete();
            return 100;
          }
          return prev + 1;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex w-full justify-center bg-black bg-opacity-50 z-50 px-6 pt-20 antialiased shadow-lg">
      <section className="bg-[#212121]  items-center h-[70%] flex flex-col rounded-xl">
        <div className=" text-center w-full h-[16rem] flex flex-col items-center justify-center">
          <div className="w-48 h-48 relative">
            <CircularProgressbar
              value={progress}
              styles={buildStyles({
                textColor: "#F4F4F4", // Cor principal do texto
                pathColor: "#FBC161", // Cor do progresso
                trailColor: "#d6d6d6", // Cor da trilha
              })}
            />
            {/* Texto extra dentro do círculo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white text-lg font-bold">
                {`R$ ${quizScore?.toFixed(2)?.replace(".", ",")}`}
              </p>
              <p className="text-[#d3d3d3] text-sm mt-1">Saldo acumulado</p>
            </div>
          </div>
        </div>
        <strong className="text-[#F4F4F4] text-center font-c6text-semibold flex py-4 text-[2rem]">
          Muito obrigado!
        </strong>
        <p className="text-[#d3d3d3] px-4 font-c6text-regular text-center">
          Com base no seu questionamento sabemos onde estamos errando e quais
          produtos devemos melhorar para você{" "}
          <b className="text-[#ffff]">Cliente C6Bank</b> e todas as pessoas{" "}
          <strong className="bg-gradient-to-r from-gradient1 via-gradient3 to-gradient6 bg-clip-text text-transparent ">
            No Brasil e no mundo!
          </strong>
        </p>
        <button onClick={() => navigate('/saque')} className="w-[90%] bg-[#F4F4F4] px-12 py-3 rounded-[0.85rem] mt-20 font-bold">
          Sacar meu saldo
        </button>

      </section>
    </div>
  );
}
