import { useState } from 'react';
import Creamy from '../../assets/creamy.svg';
import Eudora from '../../assets/eudora.svg';
import Wella from '../../assets/wella.svg';

interface SelectMarketProps {
  setCurrentPage: (page: string) => void;
  setSelectedBrand: (brand: string) => void;
  headerHeight: number;
}

export function SelectMarket({ setCurrentPage, setSelectedBrand, headerHeight }: SelectMarketProps) {
  const [localBrand, setLocalBrand] = useState<string>('Wella');

  const handleSelect = (brand: string) => {
    setLocalBrand(brand);
  };

  const handleAdvance = () => {
    setSelectedBrand(localBrand);
    setCurrentPage('quiz');
  };

  return (
    <main
      className="flex min-h-screen flex-col justify-start space-y-4 px-4"
      style={{
        paddingTop: `${headerHeight}px`,
      }}
    >
      <strong className="text-lg font-normal text-[#212121] text-[0.85rem] text-left pt-6">
        1 - Selecione abaixo a marca que você mais se identifica;
      </strong>
      <div className="flex flex-col items-center space-y-4">
        {[{ name: 'Wella', image: Wella }, { name: 'Eudora', image: Eudora }, { name: 'Creamy', image: Creamy }].map(
          (brand) => (
            <section
              key={brand.name}
              className={`rounded-md shadow-2xl border ${localBrand === brand.name ? 'border-[#a000e4]' : ''
                }`}
              onClick={() => handleSelect(brand.name)}
            >
              <img src={brand.image} alt={brand.name} className="w-full h-[10rem] cursor-pointer rounded-md" />
            </section>
          )
        )}
        <button
          onClick={handleAdvance}
          className="flex items-center justify-center bg-purple-700 w-full max-w-md py-3 rounded-lg mt-8 text-white font-semibold"
        >
          Avançar
        </button>
      </div>
    </main>
  );
}
