import { useEffect, useState } from 'react';
import './App.css';
import AdSection from './components/AdSection';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Login from './components/Login';
import SaquePage from './components/SaquePage';
import ShoppingCart from './components/ShoppingCart';
import ThankYouScreen from './components/ThankYouScreen';
import EditAddress from './components/ZipCode';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [cartActive, setCartActive] = useState(false);
  const [address, setAddress] = useState(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Define o limite de largura para mobile
    };

    checkIsMobile(); // Verifica no carregamento inicial

    // Adiciona um listener para atualizar `isMobile` quando a tela é redimensionada
    window.addEventListener('resize', checkIsMobile);

    // Limpa o listener quando o componente é desmontado
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleComplete = () => {
    setCurrentPage('agradecimento');
  };

  const loadCardShop = () => {
    setCartActive(true); // Define cartActive como true
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'inicio':
        return <AdSection onComplete={handleComplete} />;
      case 'saque':
        return <SaquePage />;
      case 'agradecimento':
        return <ThankYouScreen setCurrentPage={setCurrentPage} loadCardShop={loadCardShop} />;
      case 'endereco':
        return <ShoppingCart setCurrentPage={setCurrentPage} onAddressUpdate={setAddress} />;
      case 'finished':
        return <EditAddress address={address || undefined} />;
      default:
        return <Login setCurrentPage={setCurrentPage} />;
    }
  };

  if (!isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center p-4">
        <p className="text-lg font-semibold text-gray-800">
          Este site está disponível apenas para dispositivos móveis. Por favor, acesse em um dispositivo com uma tela menor.
        </p>
      </div>
    );
  }

  return (
    <div className="App min-h-screen flex flex-col">
      {/* Header fixo no topo */}
      <header>
        <HeaderMenu cartActive={cartActive} />
      </header>

      {/* Main com padding-top ajustado */}
      <main className="bg-gray-100 flex-grow pt-10">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="z-10">
        {/* <FooterMenu setCurrentPage={setCurrentPage} currentPage={currentPage} /> */}
      </footer>
    </div>
  );
}

export default App;
