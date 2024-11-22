import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import C6Logo from "../../assets/c6/logoc6bank.svg";
import Moneytime from "../../assets/c6/moneytime.json";

interface ModalCashProps {
  isVisible: boolean;
  onClose: () => void;
  cashValue: number; // Valor do prêmio a ser exibido
}

export function ModalCash({ isVisible, cashValue }: ModalCashProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isVisible) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Moneytime,
    });

    return () => {
      animation.destroy();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex h-full justify-center bg-black bg-opacity-50 z-50 px-6 pt-32 py-4">
      <div className="bg-[#242424] h-[20rem] px-4  py-10 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center">
        <img src={C6Logo} width={120} height={120} alt="C6 Bank Logo" />
        <div ref={containerRef} className="w-[400px] h-[200px] transform scale-[1.5]" />
        <p className="text-[1rem] font-c6display-regular mt-4 text-center text-white">
          Parabéns! Você ganhou{" "}
          <span className="text-green-600 font-c6text-bold text-[1.5rem]">R$ {cashValue.toFixed(2)}</span>
        </p>

      </div>
    </div>
  );
}
