import { useEffect, useRef, useState } from 'react';
import './App.css';
import AdSection from './components/AdSection';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Login from './components/Login';
import QuizCreamy from './components/QuizCreamy';
import QuizEuDora from './components/QuizEudora';
import QuizWella from './components/QuizWella';

import { SelectMarket } from './components/SelectMarket';
import ShoppingCart from './components/ShoppingCart';
import ThankYouScreen from './components/ThankYouScreen';
import EditAddress from './components/ZipCode';


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [cartActive, setCartActive] = useState(false);
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);


  const steps = ['Email', 'Marca', 'Quiz', 'Endereço', 'Frete'];
  const currentStep = steps.findIndex((step) => {
    if (currentPage === 'login') return step === 'Email';
    if (currentPage === 'selectmarket') return step === 'Marca';
    if (currentPage === 'quiz') return step === 'Quiz';
    if (currentPage === 'endereco') return step === 'Endereço';
    if (currentPage === 'frete') return step === 'Frete';
    return false;
  });

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height || 0;
        setHeaderHeight(height);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  const handleComplete = () => setCurrentPage('agradecimento');

  const handleAddressUpdate = (newAddress: string) => {
    setAddress(newAddress);
    console.log('Endereço atualizado:', newAddress); // Debug para verificar o valor
  };


  const renderPage = () => {
    if (currentPage === 'quiz') {

      if (selectedBrand === 'Wella') {
        return <QuizWella onComplete={() => setCurrentPage('agradecimento')} />;
      } else if (selectedBrand === 'Eudora') {
        return <QuizEuDora onComplete={() => setCurrentPage('agradecimento')} />;
      } else if (selectedBrand === 'Creamy') {
        return <QuizCreamy onComplete={() => setCurrentPage('agradecimento')} />;
      }
    }

    const pages = {
      login: <Login setCurrentPage={setCurrentPage} />,
      selectmarket: (
        <SelectMarket
          setCurrentPage={setCurrentPage}
          setSelectedBrand={setSelectedBrand}
          headerHeight={headerHeight}
        />
      ),
      inicio: <AdSection selectedBrand={selectedBrand} onComplete={() => setCurrentPage('endereco')} />,
      agradecimento: <ThankYouScreen
        setCurrentPage={setCurrentPage}
        selectedBrand={selectedBrand}
      />,
      endereco: <ShoppingCart setCurrentPage={setCurrentPage} headerHeight={headerHeight} />,
      finished: <EditAddress address={undefined} />,
    };

    return pages[currentPage] || <Login setCurrentPage={setCurrentPage} />;
  };

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
        style={{ minHeight: '64px' }}
      >
        <HeaderMenu cartActive={cartActive} currentStep={currentStep} steps={steps} />
      </header>

      {/* Main */}
      <main
        style={{
          paddingTop: `${headerHeight}px`,
        }}
        className="bg-gray-100 flex-grow"
      >
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
