import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

import IconCopy from "../../assets/c6/iconCopy.svg";
import { onLoadStatusPayment } from "../../hooks/onLoadStatusPaymen";

type IPropsDataQrCode = {
  code: string;
  idTransaction: string;
  onClose: () => void;
};

export function QrCodeStepOne({ code, idTransaction, onClose }: IPropsDataQrCode) {
  const [progress, setProgress] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(390);
  const [copied, setCopied] = useState<boolean>(false);
  const { quizScore } = useAppContext();
  const navigate = useNavigate();


  useEffect(() => {
    let intervalId: number;

    if (idTransaction) {
      intervalId = window.setInterval(async () => {
        try {
          const statusPayment = await onLoadStatusPayment(idTransaction);

          if (statusPayment === "COMPLETED") {
            navigate("/adiantamento");
            clearInterval(intervalId);
          } else if (statusPayment === "PENDING") {
            console.log("Aguardando pagamento");
          } else {
            console.warn(`Status inesperado: ${statusPayment}`);
          }
        } catch (error) {
          console.error("Erro ao verificar status:", error);
          clearInterval(intervalId);
        }
      }, 15000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [idTransaction, navigate]);


  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    const progressInterval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / 390);
      });
    }, 1000);

    const timerInterval = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          clearInterval(progressInterval);
          setTimeout(onClose, 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      clearInterval(progressInterval);
      clearInterval(timerInterval);
    };
  }, [onClose]);


  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };


  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 px-4">
      <div className="bg-[#242424] rounded-xl shadow-lg px-6 py-6 items-center relative w-[95vw] sm:w-[85vw] md:w-[60vw] lg:w-[40vw] max-w-md h-auto antialiased">

        <h1 className="text-[#FBC161] text-[1.2rem] sm:text-[1.5rem] font-bold text-center">
          Obá! Estamos quase lá...
        </h1>

        <p className="text-[#fff] font-light text-[0.9rem] sm:text-[1rem] mt-4 text-center leading-relaxed">
          Escaneie o QR Code com seu celular agora para concluir a transação e validar sua identidade.
          Assim, liberaremos seu bônus de <b className="text-[#38c600] font-c6text-bold text-[1rem]">R$ {Number(quizScore).toFixed(2).replace('.', ',')}</b> e o reembolso integral da taxa! Aproveite
          esta oportunidade única.
        </p>

        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white text-xl sm:text-2xl font-bold hover:text-[#FBC161] transition duration-200"
        >
          ×
        </button>


        <section className="py-4 flex flex-col items-center justify-center">

          <div className="bg-white p-3 rounded-lg">
            <QRCodeSVG value={code} size={180} className="rounded-lg sm:size-[220px]" />
          </div>


          <div className="flex items-center mt-4 justify-between gap-3 w-full max-w-[280px]">
            <input
              type="text"
              value={code}
              readOnly
              className="flex-grow bg-transparent text-white border border-[#FBC161] text-xs sm:text-sm font-light py-2 px-4 rounded-lg"
            />
            <button
              onClick={handleCopy}
              className="bg-[#FBC161] hover:bg-[#e0ab4d] text-black text-xs sm:text-sm font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-1 transition duration-200"
            >
              <img src={IconCopy} alt="Copiar" className="w-4 h-4" />
              <span>Copiar</span>
            </button>
          </div>


          {copied && (
            <p className="text-green-400 text-xs sm:text-sm mt-2">Código Pix copiado com sucesso!</p>
          )}


          <div className="w-full max-w-[280px] mt-6">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FBC161] transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>


          <p className="text-white text-xs sm:text-sm mt-4">
            Tempo restante: <span className="font-bold">{formatTime(timeLeft)}</span>
          </p>
        </section>
      </div>
    </div>,
    document.body
  );
}
