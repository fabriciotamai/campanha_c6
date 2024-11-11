// src/App.js
import { useState } from 'react';
import './App.css';
import AdSection from './components/AdSection';
import FooterMenu from './components/FooterMenu';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Login from './components/Login';
import SaquePage from './components/SaquePage';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'inicio':
        return (
          <>
            <HeaderMenu setCurrentPage={setCurrentPage} />
            <AdSection />
          </>
        );
      case 'saque':
        return <SaquePage />;
      default:
        return <Login setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      <FooterMenu setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}


export default App;
