import { useRef } from 'react';
import IconPaidOff from '../../assets/IconMoneyOff.svg';
import IconHome from '../../assets/iconHome.svg';
import IconHomeOff from '../../assets/iconHomeOff.svg';
import IconPaid from '../../assets/iconMoney.svg';
import IconHelp from '../../assets/iconSearch.svg';
import IconHelpOff from '../../assets/iconSearchOff.svg';

const FooterMenu = ({ setCurrentPage, currentPage }) => {
  const footerRef = useRef(null);

  return (
    <div
      ref={footerRef}
      className="fixed bottom-0 left-0 w-full bg-white shadow-md py-4 z-10 rounded-t-2xl"
    >
      <div className="flex justify-around max-w-md mx-auto">
        <a
          href="#"
          onClick={() => setCurrentPage('saque')}
          className={`flex flex-col items-center text-center ${currentPage === 'saque' ? 'text-green-500' : 'text-gray-500'
            }`}
        >
          <img
            src={currentPage === 'saque' ? IconPaid : IconPaidOff}
            alt="Saque Icon"
            className="w-8 h-8"
          />
        </a>
        <a
          href="#"
          onClick={() => setCurrentPage('inicio')}
          className={`flex flex-col items-center text-center ${currentPage === 'inicio' ? 'text-green-500' : 'text-gray-500'
            }`}
        >
          <img
            src={currentPage === 'inicio' ? IconHome : IconHomeOff}
            alt="Início Icon"
            className="w-8 h-8"
          />
        </a>
        <a
          href="#"
          onClick={() => setCurrentPage('bonus')}
          className={`flex flex-col items-center text-center ${currentPage === 'bonus' ? 'text-green-500' : 'text-gray-500'
            }`}
        >
          <img
            src={currentPage === 'bonus' ? IconHelp : IconHelpOff}
            alt="Ajuda Icon"
            className="w-8 h-8"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterMenu;
