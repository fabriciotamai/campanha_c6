import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import { useAppContext } from "./context/AppContext";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import FooterMenu from "./components/FooterMenu/";
import { Modal } from "./components/createaccount";
import { ModalUnlock } from "./components/modalUnlock";
import AdSection from "./screens/AdSection";
import GatewayPage from "./screens/Gateway";
import Login from "./screens/Login";
import SaquePage from "./screens/SaquePage";
import { SelectMarket } from "./screens/SelectMarket";

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("inicio");
  const location = useLocation();

  // Consome o contexto para verificar os modais
  const { isModalOpen, isModalOpenUnlock } = useAppContext();

  // Rotas onde o Footer não deve ser exibido
  const hideFooterRoutes = ["/agradecimento", "/login"];

  // Verifica se o Footer deve ser ocultado
  const shouldHideFooter =
    hideFooterRoutes.includes(location.pathname) || isModalOpen || isModalOpenUnlock;

  return (
    <div className="flex flex-col h-screen bg-[#121212]">
      {/* Header */}
      <HeaderMenu />

      {/* Modal */}
      <Modal />
      <ModalUnlock />

      {/* Conteúdo Principal (Rolável) */}
      <div className="flex-grow overflow-y-auto pb-16">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/selectmarket" element={<SelectMarket />} />
          <Route path="/saque" element={<SaquePage />} />
          <Route path="/quiz" element={<AdSection />} />
          <Route path="/gateway" element={<GatewayPage />} />
        </Routes>
      </div>

      {/* Footer Fixo */}
      {!shouldHideFooter && (
        <FooterMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default App;
