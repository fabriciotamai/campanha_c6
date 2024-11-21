import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import { AppProvider } from "./context/AppContext";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import FooterMenu from "./components/FooterMenu/";
import { Modal } from "./components/createaccount"; // Importe o Modal
import AdSection from "./screens/AdSection";
import Login from "./screens/Login";
import { SelectMarket } from "./screens/SelectMarket";


const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("inicio");
  const location = useLocation();

  const hideFooterRoutes = ["/agradecimento"];

  return (
    <AppProvider>
      <div className="flex flex-col h-screen bg-black">
        {/* Header */}
        <HeaderMenu />

        {/* Modal */}
        <Modal />

        {/* Conteúdo Principal (Rolável) */}
        <div className="flex-grow overflow-y-auto pb-16">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/selectmarket" element={<SelectMarket />} />
            <Route path="/quiz" element={<AdSection />} />


          </Routes>
        </div>

        {/* Footer Fixo */}
        {!hideFooterRoutes.includes(location.pathname) && (
          <FooterMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
      </div>
    </AppProvider>
  );
};

export default App;
