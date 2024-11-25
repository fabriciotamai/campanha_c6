import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import { useAppContext } from "./context/AppContext";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ErrorModal from "./components/ErrorModal";
import FooterMenu from "./components/FooterMenu/";
import { CompletePage } from "./components/ModalComplet";
import { Modal } from "./components/createaccount";
import { ModalUnlock } from "./components/modalUnlock";
import { useMediaQuery } from "./hooks/useMediaQuery";
import AdSection from "./screens/AdSection";
import GatewayPage from "./screens/Gateway";
import GatewayWithdrawal from "./screens/GatewayWithdrawal";
import Login from "./screens/Login";
import { PaymentVideo } from "./screens/PaymentVideo";
import SaquePage from "./screens/SaquePage";
import { SelectMarket } from "./screens/SelectMarket";
import { WithdrawalTwo } from "./screens/Withdrawaltwo";

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("inicio");
  const location = useLocation();
  const { isModalOpen, isModalOpenUnlock } = useAppContext();

  const hideFooterRoutes = ["/agradecimento", "/login", "/selectmarket", "/resgate", "/adiantamento"];
  const hideHeaderRoutes = ["/resgate"]; // Adicione rotas onde o Header também deve ser ocultado

  const shouldHideFooter =
    hideFooterRoutes.includes(location.pathname) || isModalOpen || isModalOpenUnlock;

  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  const isMobile = useMediaQuery("(max-width: 768px)");

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
      <div className="flex-grow overflow-y-auto pb-16">
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

        </Routes>
      </div>

      {!shouldHideFooter && (
        <FooterMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default App;
