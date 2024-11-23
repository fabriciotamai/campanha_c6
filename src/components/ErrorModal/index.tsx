import { useEffect, useState } from "react";
import IconWarning from "../../assets/c6/iconWarning.svg";
import { useAppContext } from "../../context/AppContext";

const ErrorModal = () => {
  const { isModalOpenError, setIsModalOpenError } = useAppContext();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let interval: number | undefined;

    if (isModalOpenError) {
      setProgress(0); // Reinicia o progresso ao abrir o modal

      interval = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval); // Limpa o intervalo ao atingir 100%
            setTimeout(closeModal, 500); // Fecha o modal automaticamente após 500ms
            return 100;
          }
          return prev + 2; // Incrementa o progresso
        });
      }, 100); // Atualiza a barra de progresso a cada 100ms
    }

    return () => {
      if (interval) clearInterval(interval); // Limpa o intervalo ao desmontar
    };
  }, [isModalOpenError]); // Reexecuta quando o modal abre ou fecha

  const closeModal = () => {
    setIsModalOpenError(false); // Atualiza o estado para fechar o modal
    setProgress(0); // Reinicia o progresso
  };

  // Retorna null se o modal não estiver aberto
  if (!isModalOpenError) return null;

  return (
    <div
      className="antialiased"
      style={{
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -20%)",
        width: "400px",
        background: "#212121",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "15px 20px",
        textAlign: "left",
        color: "#fff",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img src={IconWarning} alt="Warning Icon" />
        <p
          className="font-c6text-regular"
          style={{ fontSize: "16px", lineHeight: "1.5" }}
        >
          É obrigatório inserir o valor que deseja sacar!
        </p>
      </div>



      {/* Barra de progresso */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "4px",
          background: "#555",
          borderRadius: "0 0 10px 10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#FF6F61",
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default ErrorModal;
