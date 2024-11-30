import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

import IconCopy from "../../assets/c6/iconCopy.svg";
import Security from '../../assets/c6/security.svg';
import { onLoadStatusPayment } from "../../hooks/onLoadStatusPaymen";
import { FooterOriginalC6 } from "../FooterOriginalC6";

// type IPropsDataQrCode = {
//   code: string;
//   idTransaction: string;
//   onClose: () => void;
// };

export function QrCodeStepOne() {
  const [progress, setProgress] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(390);
  const [copied, setCopied] = useState<boolean>(false);
  const { quizScore, code, idTransaction } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
        // onClose();
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

          // Aguarda 500ms antes de realizar qualquer ação (se necessário)
          setTimeout(() => {
            console.log("Tempo esgotado.");
            // Coloque aqui qualquer lógica adicional.
          }, 500);

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
  }, []);


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


  return (
    <div className="min-h-screen bg-[#121212] pt-20 ">
      <div className="flex items-center justify-center bg-[#1e1e1e] py-3 px-4">
        <img src={Security} alt="Seguro" className="h-6 w-6" />
        <span className="text-[#FBC161] text-[1.10rem] font-semibold ml-2">
          Transação 100% Segura
        </span>
      </div>

      <div className=" shadow-lg max-w-md px-6">
        <h1 className="text-[#F4F4F4] text-[1.5rem] font-bold text-center pt-4">
          Estamos quase lá
        </h1>

        <p className="text-[#fff] font-light text-[1rem] mt-4 text-center leading-relaxed">
          Para validar sua identidade e concluir a transação, escaneie o QR Code com seu celular.
          Após a validação, seu bônus de <b className="text-[#38c600] text-lg font-semibold">
            R$ {Number(quizScore).toFixed(2).replace('.', ',')}
          </b> será liberado, junto com o reembolso da taxa.
        </p>

        <section className="py-4 flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <QRCodeSVG value={code} size={180} className="rounded-lg" />
          </div>

          <div className="flex items-center mt-6 gap-3 w-full">
            <input
              type="text"
              value={code}
              readOnly
              className="flex-grow bg-transparent text-white border border-[#FBC161] text-sm py-2 px-4 rounded-lg"
            />
            <button
              onClick={handleCopy}
              className="bg-[#FBC161] hover:bg-[#e0ab4d] text-black text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition duration-200"
            >
              <img src={IconCopy} alt="Copiar" className="w-4 h-4" />
              <span>Copiar</span>
            </button>
          </div>

          {copied && (
            <p className="text-green-400 text-sm mt-3">Código Pix copiado com sucesso!</p>
          )}

          <div className="w-full mt-6">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FBC161] progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-white text-sm mt-2 text-center">
              Tempo restante: <span className="font-bold">{formatTime(timeLeft)}</span>
            </p>
          </div>
        </section>

        <p className="text-white text-sm text-center mt-6">
          Mais de 10.000 transações realizadas com sucesso.
        </p>
      </div>
      <FooterOriginalC6 />
    </div>


  );
}
