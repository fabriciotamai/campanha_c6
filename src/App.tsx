import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import AdSection from "./screens/AdSection";
import Login from "./screens/Login";
import { SelectMarket } from "./screens/SelectMarket";
import ShoppingCart from "./screens/ShoppingCart";
import ThankYouScreen from "./screens/ThankYouScreen";
import EditAddress from "./screens/ZipCode";


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const App = () => {
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height || 0;
        setHeaderHeight(height);
      }
      console.log(headerHeight)
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  if (!isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center p-4">
        <p className="text-lg font-semibold text-gray-800">
          Este site está disponível apenas para dispositivos móveis. Por favor, acesse em um dispositivo
          com uma tela menor.
        </p>
      </div>
    );
  }

  return (
    <div className="App min-h-screen flex flex-col">
      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full bg-white shadow z-10"
        style={{ minHeight: "64px" }}
      >
        <HeaderMenu />
      </header>

      {/* Main Content */}
      <main
        style={{
          paddingTop: `${headerHeight}px`,
        }}
        className="bg-gray-100 flex-grow"
      >
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/selectmarket"
            element={<SelectMarket />}
          />

          <Route
            path="/quiz"
            element={
              <AdSection

              />
            }
          />
          <Route
            path="/agradecimento"
            element={<ThankYouScreen />}
          />
          <Route
            path="/endereco"
            element={
              <ShoppingCart />
            }
          />
          <Route
            path="/finished"
            element={<EditAddress />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
