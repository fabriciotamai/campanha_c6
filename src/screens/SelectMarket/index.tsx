import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Creamy from "../../assets/creamy.svg";
import Eudora from "../../assets/eudora.svg";
import Wella from "../../assets/wella.svg";
import { useAppContext } from "../../context/AppContext";

export function SelectMarket() {
  const { setCurrentStep, setSelectedBrand } = useAppContext();
  const [localBrand, setLocalBrand] = useState<"Wella" | "Creamy" | "Eudora">("Wella");
  const navigate = useNavigate();

  const handleSelect = (brand: "Wella" | "Creamy" | "Eudora") => {
    setLocalBrand(brand);
  };

  const handleAdvance = () => {
    setSelectedBrand(localBrand);
    setCurrentStep(2);
    navigate("/quiz");
  };

  return (
    <main
      className="flex flex-col items-center px-6 pt-16 space-y-6 min-h-screen mb-4"
    >
      <strong className="text-[1rem] font-medium text-[#212121] text-left w-full max-w-sm">
        Selecione abaixo a marca que você mais se identifica:
      </strong>
      <div className="flex flex-col items-center space-y-3 w-full max-w-sm pb-20">
        {[
          { name: "Wella", image: Wella },
          { name: "Eudora", image: Eudora },
          { name: "Creamy", image: Creamy },
        ].map((brand) => (
          <section
            key={brand.name}
            className={`rounded-md border-[0.1rem] shadow-md cursor-pointer transition-all w-full ${localBrand === brand.name ? "border-purple-700" : "border-gray-200"
              }`}
            onClick={() => handleSelect(brand.name as "Wella" | "Creamy" | "Eudora")}
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-[8rem] sm:h-[10rem] rounded-md object-cover"
            />
          </section>
        ))}

      </div>
      <button
        onClick={handleAdvance}
        className="flex items-center justify-center  mb-6 bg-purple-700 w-full py-3 rounded-lg text-white font-semibold hover:bg-purple-800 transition-all"
      >
        Avançar
      </button>
    </main>
  );
}
