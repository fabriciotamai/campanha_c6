import { useRef } from "react";
import IconPaidOff from "../../assets/IconMoneyOff.svg";
import IconHome from "../../assets/iconHome.svg";
import IconHomeOff from "../../assets/iconHomeOff.svg";
import IconPaid from "../../assets/iconMoney.svg";
import IconHelp from "../../assets/iconSearch.svg";
import IconHelpOff from "../../assets/iconSearchOff.svg";

interface FooterMenuProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const FooterMenu: React.FC<FooterMenuProps> = ({ setCurrentPage, currentPage }) => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={footerRef}
      className="fixed bottom-0 left-0 w-full bg-[#242424] shadow-lg py-3 z-50 "
    >
      <div className="flex justify-around max-w-md mx-auto">
        {/* Saque */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setCurrentPage("saque")}
          className={`flex flex-col items-center text-center cursor-pointer ${currentPage === "saque" ? "text-green-500" : "text-gray-500"
            }`}
        >
          <img
            src={currentPage === "saque" ? IconPaid : IconPaidOff}
            alt="Saque Icon"
            className="w-8 h-8"
          />
          <span className="text-xs mt-1">Saque</span>
        </div>

        {/* Início */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setCurrentPage("inicio")}
          className={`flex flex-col items-center text-center cursor-pointer ${currentPage === "inicio" ? "text-green-500" : "text-gray-500"
            }`}
        >
          <img
            src={currentPage === "inicio" ? IconHome : IconHomeOff}
            alt="Início Icon"
            className="w-8 h-8"
          />
          <span className="text-xs mt-1">Início</span>
        </div>

        {/* Bônus */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setCurrentPage("bonus")}
          className={`flex flex-col items-center text-center cursor-pointer ${currentPage === "bonus" ? "text-green-500" : "text-gray-500"
            }`}
        >
          <img
            src={currentPage === "bonus" ? IconHelp : IconHelpOff}
            alt="Bônus Icon"
            className="w-8 h-8"
          />
          <span className="text-xs mt-1">Bônus</span>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
