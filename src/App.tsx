import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import { Modal } from "./components/createaccount"; // Importe o modal
import { AppProvider } from "./context/AppContext";

import { Navigate, Route, Routes } from "react-router-dom";
import AdSection from "./screens/AdSection";
import Login from "./screens/Login";
import { SelectMarket } from "./screens/SelectMarket";
import ShoppingCart from "./screens/ShoppingCart";
import ThankYouScreen from "./screens/ThankYouScreen";
import EditAddress from "./screens/ZipCode";

const App = () => {
  return (
    <AppProvider>
      <main className="App min-h-screen flex flex-col bg-[#000000]">
        <HeaderMenu />

        <Modal /> {/* Modal global */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/selectmarket" element={<SelectMarket />} />
          <Route path="/quiz" element={<AdSection />} />
          <Route path="/agradecimento" element={<ThankYouScreen />} />
          <Route path="/endereco" element={<ShoppingCart />} />
          <Route path="/finished" element={<EditAddress />} />
        </Routes>
      </main>
    </AppProvider>
  );
};

export default App;
