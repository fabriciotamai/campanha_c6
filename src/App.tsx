import { useState } from 'react';
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
  const [cartValue, setCartValue] = useState(0);
  const [address, setAddress] = useState(null);

  const handleComplete = () => {
    setCurrentPage('agradecimento');
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
        return <ThankYouScreen setCurrentPage={setCurrentPage} />;
      case 'endereco':
        return <ShoppingCart setCurrentPage={setCurrentPage} onAddressUpdate={setAddress} />;
      case 'finished':
        return <EditAddress setCurrentPage={setCurrentPage} address={address} />;
      default:
        return <Login setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App min-h-screen flex flex-col">
      {/* Header fixo no topo */}
      <header>
        <HeaderMenu setCurrentPage={setCurrentPage} />
      </header>

      {/* Main com padding-top ajustado */}
      <main className="bg-white flex-grow pt-28">
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