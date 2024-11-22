import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import C6Logo from "../../assets/c6/logoc6bank.svg";
import Moneytime from "../../assets/c6/moneytime.json";

interface ModalCashProps {
  isVisible: boolean; // Indica se o modal deve ser exibido
  cashValue: number; // Valor do prêmio a ser exibido
  onClose: () => void; // Função para fechar o modal
}

export function ModalCash({ isVisible, cashValue, onClose }: ModalCashProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible) {
      const animation = lottie.loadAnimation({
        container: containerRef.current!,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: Moneytime,
      });

      return () => {
        animation.destroy(); // Destrói a animação quando o modal é fechado
      };
    }
  }, [isVisible]);

  if (!isVisible) return null; // Não renderiza nada se o modal não estiver visível

  return (
    <div
      className="fixed inset-0 flex h-full justify-center bg-black bg-opacity-50 z-50 px-6 pt-48 py-4"
      onClick={onClose} // Fecha o modal ao clicar fora
    >
      <div
        className="bg-[#242424] h-[15rem] px-4 py-10 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal feche-o
      >
        {/* Logo */}
        <img src={C6Logo} width={120} height={120} alt="C6 Bank Logo" />

        {/* Animação Lottie */}
        <div ref={containerRef} className="w-[400px] h-[200px] transform scale-[1.3] absolute" />

        <p className="text-[1rem] font-c6display-regular mt-10 text-center text-white">
          <b>Parabéns!</b> Você ganhou
        </p>
        <span className="text-green-600 mt-4 font-c6text-bold text-[1.5rem]">
          R$ {cashValue.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
