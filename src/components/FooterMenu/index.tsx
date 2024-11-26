import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import IconPaidOff from "../../assets/IconMoneyOff.svg";
import IconHome from "../../assets/iconHome.svg";
import IconHomeOff from "../../assets/iconHomeOff.svg";
import IconPaid from "../../assets/iconMoney.svg";
import IconHelp from "../../assets/iconSearch.svg";
import IconHelpOff from "../../assets/iconSearchOff.svg";
import { useAppContext } from "../../context/AppContext";

interface FooterMenuProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const FooterMenu: React.FC<FooterMenuProps> = ({ setCurrentPage, currentPage }) => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const { resetQuizScore } = useAppContext()
  const navigate = useNavigate();

  function handleResetQuiz() {
    resetQuizScore(123.98);
    setCurrentPage('inicio');
    navigate("/quiz");
  }

  function handleResetQuestion() {
    resetQuizScore(0);
    setCurrentPage('bonus');
    navigate("/perguntas");
  }
  return (
    <div
      ref={footerRef}
      className="fixed bottom-0 left-0 w-full bg-[#242424] shadow-lg py-3 z-50"
    >
      <div className="flex justify-around max-w-md mx-auto">
        {/* Saque */}
        <button
          role="button"
          tabIndex={0}
          onClick={() => [setCurrentPage("saque"), navigate("/saque")]}
          className="flex flex-col items-center justify-between text-center cursor-pointer relative w-16 h-8"
        >
          <img
            src={currentPage === "saque" ? IconPaid : IconPaidOff}
            alt="Saque Icon"
            className="w-6 h-5 mb-1"
          />
          <span
            className={`text-[0.60rem] ${currentPage === "saque" ? "invisible" : "text-gray-500"
              }`}
          >
            Saque
          </span>
          {currentPage === "saque" && (
            <div className="absolute bottom-0 w-6 h-[4px] bg-yellow-400 rounded-full"></div>
          )}
        </button>

        {/* Início */}
        <button
          role="button"
          tabIndex={0}
          onClick={handleResetQuiz}
          className="flex flex-col items-center justify-between text-center cursor-pointer relative w-16 h-8"
        >
          <img
            src={currentPage === "inicio" ? IconHome : IconHomeOff}
            alt="Início Icon"
            className="w-6 h-5 mb-1"
          />
          <span
            className={`text-[0.60rem] ${currentPage === "inicio" ? "invisible" : "text-gray-500"
              }`}
          >
            Início
          </span>
          {currentPage === "inicio" && (
            <div className="absolute bottom-0 w-6 h-[4px] bg-yellow-400 rounded-full"></div>
          )}
        </button>

        {/* Bônus */}
        <div
          role="button"
          tabIndex={0}
          onClick={handleResetQuestion}
          className="flex flex-col items-center justify-between text-center cursor-pointer relative w-16 h-8"
        >
          <img
            src={currentPage === "bonus" ? IconHelp : IconHelpOff}
            alt="Bônus Icon"
            className="w-6 h-5 mb-1"
          />
          <span
            className={`text-[0.60rem] ${currentPage === "bonus" ? "invisible" : "text-gray-500"
              }`}
          >
            Bônus
          </span>
          {currentPage === "bonus" && (
            <div className="absolute bottom-0 w-6 h-[4px] bg-yellow-400 rounded-full"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
