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
      className="flex min-h-screen flex-col justify-start space-y-4 px-6"
      style={{
        paddingTop: "64px",
      }}
    >
      <strong className="text-lg font-normal text-[#212121] text-[0.85rem] text-left px-4 pt-4">
        1 - Selecione abaixo a marca que você mais se identifica;
      </strong>
      <div className="flex flex-col items-center space-y-4">
        {[
          { name: "Wella", image: Wella },
          { name: "Eudora", image: Eudora },
          { name: "Creamy", image: Creamy },
        ].map((brand) => (
          <section
            key={brand.name}
            className={`rounded-md  shadow-2xl border-[0.1rem] cursor-pointer transition ${localBrand === brand.name ? "border-[#a000e4]" : ""
              }`}
            onClick={() => handleSelect(brand.name as "Wella" | "Creamy" | "Eudora")}

          >

            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-[10rem] rounded-md"
            />
          </section>
        ))}
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
